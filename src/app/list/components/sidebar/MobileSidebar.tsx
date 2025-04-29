// app/list/components/MobileSidebar.tsx
"use client"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { List } from "@/lib/schemas/taskSchema"

type Props = {
	taskLists: List[]
}

export const MobileSidebar = ({ taskLists }: Props) => {
	const [open, setOpen] = useState(false)

	return (
		<div className="md:hidden p-2">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon">
						<Menu className="w-5 h-5" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-[250px]" aria-describedby={undefined}>
					<SheetTitle>
						<h2 className="text-lg font-bold mb-4">タスクリスト</h2>
					</SheetTitle>
					<ul className="space-y-2">
						<li>
							<Link href="/list" onClick={() => setOpen(false)}>
								すべて
							</Link>
						</li>
						{taskLists.map((list) => (
							<li key={list.id}>
								<Link href={`/list/${list.id}`} onClick={() => setOpen(false)}>
									{list.name}
								</Link>
							</li>
						))}
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	)
}
