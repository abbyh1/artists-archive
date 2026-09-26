-- Storage RLS policies for the "avatars" and "artworks" buckets.
--
-- Run this AFTER creating both buckets (see supabase/STORAGE.md) — it
-- references bucket ids that must already exist. Run in the SQL Editor,
-- same as the schema migration.
--
-- Convention this enforces: every object's path must start with the
-- uploader's auth user id as the first folder segment, e.g.
--   avatars/<user_id>/<filename>
--   artworks/<user_id>/<artwork_id>/<filename>
-- storage.foldername(name) splits the object path into an array of
-- folder segments, so foldername(name)[1] is that first segment — true
-- for both conventions above, since the artwork_id in the artworks path
-- is an extra segment *after* the owner id, not a replacement for it.
--
-- All four operations (select/insert/update/delete) are owner-only and
-- scoped `to authenticated` — there is no public/anon SELECT policy here.
-- Both buckets stay public at the bucket level so the app can render
-- images for anonymous visitors via getPublicUrl(), which resolves a
-- direct, CDN-served URL and does not go through storage.objects RLS at
-- all. These policies only govern access through the Storage API (list,
-- download-by-path, upload, replace, delete) — i.e. they control who can
-- manage objects, not who can view a known public URL.
--
-- `(select auth.uid())` (rather than a bare `auth.uid()`) lets Postgres
-- evaluate it once per statement instead of once per row — the standard
-- Supabase RLS performance pattern.

-- avatars ---------------------------------------------------------

create policy "avatars_owner_select"
on storage.objects for select
to authenticated
using (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "avatars_owner_insert"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "avatars_owner_update"
on storage.objects for update
to authenticated
using (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
)
with check (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "avatars_owner_delete"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'avatars'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

-- artworks ----------------------------------------------------------

create policy "artworks_owner_select"
on storage.objects for select
to authenticated
using (
  bucket_id = 'artworks'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "artworks_owner_insert"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'artworks'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "artworks_owner_update"
on storage.objects for update
to authenticated
using (
  bucket_id = 'artworks'
  and (storage.foldername(name))[1] = (select auth.uid())::text
)
with check (
  bucket_id = 'artworks'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "artworks_owner_delete"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'artworks'
  and (storage.foldername(name))[1] = (select auth.uid())::text
);
