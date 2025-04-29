-- タスクリストを保存するテーブル
create table if not exists lists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  name text not null,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- タスクを保存するテーブル
create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  list_id uuid not null references lists(id) on delete cascade,
  user_id uuid not null,
  name text not null,
  type text not null check (type in ('check', 'count')),
  routine_type text check (routine_type in ('day', 'week', 'month', 'year')),
  routine_value integer,
  memo text,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- 実行履歴を保存するテーブル
create table if not exists task_logs (
  id uuid primary key default gen_random_uuid(),
  task_id uuid not null references tasks(id) on delete cascade,
  date date not null,
  value numeric, -- チェックなら1 or null、カウントなら数値
  created_at timestamp with time zone default timezone('utc', now())
);

-- 任意：インデックス最適化（検索高速化）
create index if not exists idx_tasks_user_id on tasks(user_id);
create index if not exists idx_tasks_list_id on tasks(list_id);
create index if not exists idx_logs_task_id on task_logs(task_id);
create index if not exists idx_logs_date on task_logs(date);
