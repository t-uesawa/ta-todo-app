// app/list/components/TaskListCard.tsx
"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

type TaskListCardProps = {
	id: string
	name: string
}

export const ListCard = ({ id, name }: TaskListCardProps) => {
	const router = useRouter()

	return (
		<Card
			onClick={() => router.push(`/list/${id}`)}
			className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
		>
			<CardHeader>
				<CardTitle className="text-base">{name}</CardTitle>
			</CardHeader>
		</Card>
	)
}
