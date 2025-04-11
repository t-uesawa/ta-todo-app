import { TaskListGrid } from "./components/card/ListGrid";

type TaskList = {
	id: string;
	name: string;
};

export default async function Page() {
	return (
		<main className="p-6">
			<h1 className="text-2xl font-bold mb-4">タスクリスト</h1>
			<TaskListGrid taskLists={[{ id: 'aaa', name: 'aaa' }] as TaskList[]} />
		</main>
	);
}