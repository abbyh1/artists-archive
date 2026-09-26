-- Artist's Archive MVP schema: profiles + artworks
--
-- How to run: Supabase Dashboard -> SQL Editor -> paste this file -> Run.
-- (Or `supabase db push` if you're using the Supabase CLI locally.)
-- Safe to run once against a fresh project. Do not run twice — the
-- `create table` statements will fail if the tables already exist.

-- gen_random_uuid() lives in pgcrypto; Supabase projects have it available
-- by default, this just makes sure it's enabled.
create extension if not exists "pgcrypto";

-- ============================================================
-- profiles
-- ============================================================

create table public.profiles (
  id            uuid primary key references auth.users (id) on delete cascade,
  username      text not null unique,
  display_name  text not null,
  bio           text,
  avatar_path   text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),

  constraint profiles_username_format
    check (username ~ '^[a-z0-9_]{3,30}$'),
  constraint profiles_display_name_not_blank
    check (btrim(display_name) <> ''),
  constraint profiles_bio_max_length
    check (bio is null or char_length(bio) <= 300)
);

comment on table public.profiles is
  'One row per authenticated user. id is shared with auth.users.id (1:1). '
  'Rows are created automatically by the handle_new_user trigger below, '
  'not by application code — see that section for what signup must provide.';

comment on constraint profiles_username_format on public.profiles is
  '3-30 chars, lowercase letters/numbers/underscores only.';

-- ============================================================
-- artworks
-- ============================================================

create table public.artworks (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references public.profiles (id) on delete cascade,
  title            text not null,
  description      text,
  medium           text not null,
  status           text not null default 'wip' check (status in ('wip', 'finished')),
  image_path       text not null,
  allow_downloads  boolean not null default false,
  is_public        boolean not null default true,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),

  constraint artworks_title_not_blank
    check (btrim(title) <> ''),
  constraint artworks_title_max_length
    check (char_length(title) <= 120),
  constraint artworks_medium_not_blank
    check (btrim(medium) <> ''),
  constraint artworks_description_max_length
    check (description is null or char_length(description) <= 2000)
);

comment on column public.artworks.image_path is
  'Path within the "artworks" storage bucket, e.g. "<user_id>/<artwork_id>/<filename>". '
  'Not a public URL — resolve it via supabase.storage.from(''artworks'').getPublicUrl().';

-- user_id is looked up on every artwork query (feed, profile page), and the
-- home feed always filters is_public + orders by recency.
create index artworks_user_id_idx on public.artworks (user_id);
create index artworks_public_feed_idx on public.artworks (created_at desc) where is_public = true;

-- ============================================================
-- updated_at handling
-- ============================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create trigger artworks_set_updated_at
before update on public.artworks
for each row execute function public.set_updated_at();

-- ============================================================
-- Automatic profile creation on signup
-- ============================================================
-- Supabase's documented pattern (supabase.com/docs/guides/auth/managing-user-data)
-- for turning a new auth.users row into an application-level profile row.
--
-- IMPORTANT — this is a hard requirement for PR 3's signup call, not just a
-- suggestion: supabase.auth.signUp() must be called as
--
--   supabase.auth.signUp({
--     email,
--     password,
--     options: {
--       data: { username, display_name }
--     }
--   });
--
-- `options.data` becomes `raw_user_meta_data` on the new auth.users row,
-- which is exactly what this trigger reads. If username or display_name is
-- missing, the insert into public.profiles fails its NOT NULL / format
-- constraints — and because this trigger fires inside the same transaction
-- as the auth.users insert, that failure rolls back the entire signup
-- (the user will not be created at all). A duplicate username fails the
-- same way, via the unique constraint. PR 3's signup form needs to handle
-- both as signup errors, not post-signup profile errors.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, username, display_name)
  values (
    new.id,
    new.raw_user_meta_data ->> 'username',
    new.raw_user_meta_data ->> 'display_name'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- ============================================================
-- Row Level Security
-- ============================================================

alter table public.profiles enable row level security;
alter table public.artworks enable row level security;

-- profiles ----------------------------------------------------
-- This schema has no private-profile concept, so every profile is
-- readable — including by anonymous (logged-out) visitors.

create policy "profiles_select_all"
on public.profiles for select
using (true);

create policy "profiles_insert_own"
on public.profiles for insert
with check (auth.uid() = id);

create policy "profiles_update_own"
on public.profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

-- no delete policy: account deletion isn't in scope for the MVP, and the
-- default (no policy = denied) is the right failure mode until it is.
-- (Also note: application code never inserts into profiles directly — the
-- handle_new_user trigger above does, running as security definer, which
-- bypasses RLS entirely. The profiles_insert_own policy exists as a
-- backstop / documents the intended ownership rule, not as the normal
-- insert path.)

-- artworks ------------------------------------------------------
-- Public artworks are visible to everyone, logged in or not. Owners can
-- additionally see their own artwork even when is_public is false, since
-- they need to see it on their own profile and edit page.

create policy "artworks_select_public_or_own"
on public.artworks for select
using (is_public = true or auth.uid() = user_id);

create policy "artworks_insert_own"
on public.artworks for insert
with check (auth.uid() = user_id);

create policy "artworks_update_own"
on public.artworks for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "artworks_delete_own"
on public.artworks for delete
using (auth.uid() = user_id);

-- ============================================================
-- Table privileges
-- ============================================================
-- Supabase grants broad default privileges (select/insert/update/delete)
-- on every public-schema table to both anon and authenticated, and relies
-- on RLS above as the real gate. That's already safe, but the grants
-- below make the intent explicit and remove the broader defaults rather
-- than lean on it silently:
--   - anon: read-only on both tables, no write privileges at all
--   - authenticated: read on both, write only on the tables they should
--     ever write to directly (profiles, artworks) — RLS still restricts
--     those writes to rows the caller owns

revoke all on public.profiles from anon, authenticated;
revoke all on public.artworks from anon, authenticated;

grant select on public.profiles to anon, authenticated;
grant select on public.artworks to anon, authenticated;

grant insert, update on public.profiles to authenticated;
grant insert, update, delete on public.artworks to authenticated;
