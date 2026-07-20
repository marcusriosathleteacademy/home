-- Run this in the Supabase SQL editor (Project → SQL Editor → New query)
-- for the Marcus Rios Athlete Academy application form.

create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  parent_name text not null,
  student_name text not null,
  email text not null,
  phone text not null,
  sport text not null,
  grade text not null,
  reclassed text not null check (reclassed in ('yes', 'no')),
  message text not null
);

alter table applications enable row level security;

-- The site uses the public anon key from the browser, so it may only
-- INSERT new applications — it can never read, update, or delete rows.
-- View submissions from the Supabase dashboard (Table Editor), which uses
-- your privileged account and bypasses RLS.
create policy "Public can submit applications"
  on applications
  for insert
  to anon
  with check (true);
