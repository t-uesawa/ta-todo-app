import { auth } from "@clerk/nextjs/server";
import { TaskListGrid } from "./components/card/ListGrid";
import { getLists } from "@/lib/supabase/fecthData";

export default async function Page() {
	const { userId } = await auth();

	if (!userId) {
		return (
			<div>ユーザー情報の取得に失敗しました。</div>
		)
	}

	// Supabaseから全タスクフォルダを取得
	const taskLists = await getLists(userId);
	return (
		<main className="p-6">
			<h1 className="text-2xl font-bold mb-4">タスクリスト</h1>
			<TaskListGrid taskLists={taskLists} />
		</main>
	);
}