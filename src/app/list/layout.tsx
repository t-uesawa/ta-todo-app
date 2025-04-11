// app/list/layout.tsx
import { ReactNode } from "react";
import { Sidebar } from "./components/sidebar/Sidebar";
import { MobileSidebar } from "./components/sidebar/MbileSidebar";
// import SidebarWrapper from "@/app/list/components/sidebar-wrapper";

export default function ListLayout({ children }: { children: ReactNode }) {
	// Supabaseから全タスクフォルダを取得
	const taskLists = [{ id: 'aaa', name: 'aaa' }];

	return (
		<div className="flex h-screen">
			{/* モバイルサイドバー: md(768px)で非表示 */}
			<div className="md:hidden fixed top-4 left-4 z-50">
				<MobileSidebar taskLists={taskLists ?? []} />
			</div>

			{/* PCサイドバー: md(768px)以上で再表示 */}
			<div className="hidden md:block w-64 border-r bg-muted/40">
				<Sidebar />
			</div>
			{/* 左サイドバー */}
			{/* <aside className="w-64 border-r border-gray-200">
				<SidebarWrapper />
			</aside> */}

			{/* メインコンテンツ */}
			<main className="flex-1 overflow-y-auto p-6">
				{children}
			</main>
		</div>
	);
}
