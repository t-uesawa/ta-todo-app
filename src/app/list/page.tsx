import { List } from "@/lib/schemas/taskSchema";
import { TaskListGrid } from "./components/card/ListGrid";

type Props = {
	taskLists: List[];
};

export default async function Page({ taskLists }: Props) {
	console.log(taskLists);
	return (
		<main className="p-6">
			<h1 className="text-2xl font-bold mb-4">タスクリスト</h1>
			<TaskListGrid taskLists={taskLists} />
		</main>
	);
}