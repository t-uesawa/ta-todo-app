// app/list/layout.tsx
import React, { ReactNode } from "react";
import { ListSidebar } from "./components/sidebar/ListSidebar";
import { MobileSidebar } from "./components/sidebar/MobileSidebar";
import { auth } from "@clerk/nextjs/server";
import { getLists } from "@/lib/supabase/fecthData";
// import SidebarWrapper from "@/app/list/components/sidebar-wrapper";

export default async function ListLayout({ children }: { children: ReactNode }) {
	const { userId } = await auth();

	if (!userId) {
		return (
			<div>ユーザー情報の取得に失敗しました。</div>
		)
	}

	// Supabaseから全タスクフォルダを取得
	const taskLists = await getLists(userId);

	return (
		<div className="flex h-screen">
			{/* モバイルサイドバー: md(768px)以下で表示 */}
			<div className="md:hidden fixed top-4 left-4 z-50">
				<MobileSidebar taskLists={taskLists} />
			</div>

			{/* PCサイドバー: md(768px)以上で表示 */}
			<div className="hidden md:block w-64 border-r bg-muted/40">
				<ListSidebar taskLists={taskLists} />
			</div>

			{/* メインコンテンツ */}
			<main className="flex-1 overflow-y-auto p-6 pt-10 md:pt-0">
				{children}
			</main>
		</div>
	);
}
