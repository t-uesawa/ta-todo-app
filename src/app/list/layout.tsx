// app/list/layout.tsx
import { ReactNode } from "react";
import { Sidebar } from "./components/sidebar/Sidebar";
// import SidebarWrapper from "@/app/list/components/sidebar-wrapper";

export default function ListLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex h-screen">
			<Sidebar />
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
