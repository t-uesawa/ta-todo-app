'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { createBrowserClient } from "@supabase/auth-helpers-nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type TaskList = {
  id: string;
  name: string;
};

export const Sidebar = () => {
  const pathname = usePathname();
  const [taskLists, setTaskLists] = useState<TaskList[]>([]);

  useEffect(() => {
    const fetchTaskLists = async () => {
      // const supabase = createBrowserClient();

      // const {
      //   data: { user }
      // } = await supabase.auth.getUser();

      // if (!user) return;

      // const { data, error } = await supabase
      //   .from("task_lists")
      //   .select("id, name")
      //   .eq("user_id", user.id);

      // if (!error && data) {
      //   setTaskLists(data);
      // }

      setTaskLists([{ id: 'aaa', name: 'aaa' }]);
    };

    fetchTaskLists();
  }, []);

  return (
    <aside className="w-64 border-r h-full p-4 bg-white dark:bg-zinc-950">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">リスト</h2>
        <SidebarLink href="/list" label="すべて" active={pathname === "/list"} />
        {taskLists.map((list) => (
          <SidebarLink
            key={list.id}
            href={`/list/${list.id}`}
            label={list.name}
            active={pathname === `/list/${list.id}`}
          />
        ))}
      </div>
    </aside>
  );
};

type SidebarLinkProps = {
  href: string;
  label: string;
  active: boolean;
};

const SidebarLink = ({ href, label, active }: SidebarLinkProps) => (
  <Link href={href}>
    <Button
      variant={active ? "secondary" : "ghost"}
      className={cn("w-full justify-start mb-1", active && "font-bold")}
    >
      {label}
    </Button>
  </Link>
);
