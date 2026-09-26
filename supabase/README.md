# Supabase setup — order of operations

1. Create a project at supabase.com.
2. Dashboard -> SQL Editor -> run `migrations/20260926120000_init_schema.sql`.
   Creates `profiles` and `artworks`, their indexes, the `updated_at`
   triggers, and Row Level Security policies.
3. Follow `STORAGE.md` to create the `avatars` and `artworks` buckets,
   then run `storage_policies.sql` in the SQL Editor.
4. Dashboard -> Project Settings -> API -> copy the Project URL and the
   `anon` `public` key (never the `service_role` key) into a new
   `.env.local` file at the repo root (copy `.env.example` as a starting
   point — `.env.local` is gitignored, so it never gets committed).

At that point `src/lib/supabaseClient.js` will have what it needs, though
nothing in the app calls it yet — wiring screens up to real data is a
later PR.
