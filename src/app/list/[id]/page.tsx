// app/list/[id]/page.tsx
// import { createServerClient } from "@/lib/supabase/server"
import { Checkbox } from "@/components/ui/checkbox";
// import { cookies } from "next/headers"
// import { TaskItem } from "../components/TaskItem"

type Props = {
	params: { id: string }
}

const Page = async ({ params }: Props) => {
	// const supabase = createServerClient(cookies())

	// // ① タスクリスト名を取得
	// const { data: list } = await supabase
	// 	.from("task_lists")
	// 	.select("title")
	// 	.eq("id", params.id)
	// 	.single()

	// // ② タスクリストに属するタスクを取得
	// const { data: tasks } = await supabase
	// 	.from("tasks")
	// 	.select("id, title, completed")
	// 	.eq("task_list_id", params.id)

	const tasks = [{ id: '1', title: 'task', completed: false }];

	return (
		<main className="p-6">
			<h1 className="text-2xl font-bold mb-4">{params.id ?? "リスト"}</h1>

			<div className="space-y-3">
				{tasks?.map((task) => (
					<div key={task.id} className="flex items-center gap-2 p-3 border rounded-lg shadow-sm">
						<Checkbox checked={task.completed} />
						<span className={task.completed ? "line-through text-gray-500" : ""}>
							{task.title}
						</span>
					</div>
				))}
			</div>
		</main>
	)
}

export default Page
