# Storage setup

Two buckets, created by hand in the Supabase Dashboard (Storage does not
have a SQL `create table`-style migration path the way the database does).

## 1. Create the buckets

Dashboard -> Storage -> New bucket, twice:

| Bucket name | Public bucket? |
| --- | --- |
| `avatars` | Yes |
| `artworks` | Yes |

Both are marked **public** so `getPublicUrl()` returns a URL that resolves
directly (needed for the public feed and profile pages, which must render
images for logged-out visitors too).

## 2. Path convention

Every uploaded object's path must start with the uploader's `auth.uid()`
as the first folder segment (the artwork id in the `artworks` path is an
extra segment *after* that, not a replacement for it). This is what
`supabase/storage_policies.sql` enforces — select/insert/update/delete
through the Storage API are all only allowed when that first segment
matches the caller's own id.

```
avatars/<user_id>/<filename>
artworks/<user_id>/<artwork_id>/<filename>
```

The `profiles.avatar_path` and `artworks.image_path` columns store this
path (not a full URL) — resolve it client-side with:

```js
supabase.storage.from('avatars').getPublicUrl(avatar_path);
supabase.storage.from('artworks').getPublicUrl(image_path);
```

## 3. Apply the storage policies

After both buckets exist, run `supabase/storage_policies.sql` in the SQL
Editor. It adds row-level-security policies on `storage.objects` (RLS is
already enabled on that table by Supabase itself — these policies just
scope who can read/write which paths).

## Known limitation: `allow_downloads` / `is_public` aren't enforced at the storage layer

Both buckets are public buckets, so **any object's URL is fetchable by
anyone who has it**, regardless of the `artworks.is_public` or
`allow_downloads` flags on the corresponding database row. Those flags are
only enforced at the database (RLS) level and, later, in the app's UI —
e.g. hiding the download button when `allow_downloads` is false, or
excluding non-public artwork from the feed query.

This is an intentional MVP tradeoff: a real hard boundary (private bucket
+ server-issued signed URLs checked against the DB flags) needs either the
service-role key or an edge function, both explicitly out of scope for
this PR. Worth revisiting when "owner-controlled downloads" is actually
implemented (planned PR 7) — flagging now so it isn't assumed to be a
security guarantee before then.
