'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarProvider } from "@/components/ui/sidebar";
import { ListFilter } from "lucide-react";
import { List } from "@/lib/schemas/taskSchema";

type Props = {
  taskLists: List[]
}

export const ListSidebar = ({ taskLists }: Props) => {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-lg font-semibold mb-2">リスト</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              <ListFilter className="w-5 h-5 mr-1" />
              リスト
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {taskLists.map((list) => (
                  <Link key={list.id} href={`/list/${list.id}`}>
                    <Button
                      variant={pathname === `/list/${list.id}` ? "secondary" : "ghost"}
                      className={cn("w-full justify-start mb-1", pathname === `/list/${list.id}` && "font-bold")}
                    >
                      {list.name}
                    </Button>
                  </Link>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
