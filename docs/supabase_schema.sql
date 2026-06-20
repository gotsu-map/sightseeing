create table if not exists public.courses (
  id text primary key,
  payload jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id text primary key,
  payload jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.courses enable row level security;
alter table public.reviews enable row level security;

drop policy if exists "public read courses" on public.courses;
drop policy if exists "public insert courses" on public.courses;
drop policy if exists "public update courses" on public.courses;
drop policy if exists "public delete courses" on public.courses;

drop policy if exists "public read reviews" on public.reviews;
drop policy if exists "public insert reviews" on public.reviews;
drop policy if exists "public update reviews" on public.reviews;
drop policy if exists "public delete reviews" on public.reviews;

create policy "public read courses"
on public.courses for select
to anon
using (true);

create policy "public insert courses"
on public.courses for insert
to anon
with check (true);

create policy "public update courses"
on public.courses for update
to anon
using (true)
with check (true);

create policy "public delete courses"
on public.courses for delete
to anon
using (true);

create policy "public read reviews"
on public.reviews for select
to anon
using (true);

create policy "public insert reviews"
on public.reviews for insert
to anon
with check (true);

create policy "public update reviews"
on public.reviews for update
to anon
using (true)
with check (true);

create policy "public delete reviews"
on public.reviews for delete
to anon
using (true);

