// app/list/components/TaskListGrid.tsx

import { List } from "@/lib/schemas/taskSchema"
import { ListCard } from "./ListCard"

type Props = {
	taskLists: List[]
}

export const TaskListGrid = ({ taskLists }: Props) => {
	if (!taskLists) return <div>aaa</div>
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{taskLists.map((list) => (
				<ListCard key={list.id} id={list.id} name={list.name} />
			))}
		</div>
	)
}
