// app/list/components/TaskListGrid.tsx

import { ListCard } from "./ListCard"

export type TaskList = {
	id: string
	name: string
}

type Props = {
	taskLists: TaskList[]
}

export const TaskListGrid = ({ taskLists }: Props) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{taskLists.map((list) => (
				<ListCard key={list.id} id={list.id} name={list.name} />
			))}
		</div>
	)
}
