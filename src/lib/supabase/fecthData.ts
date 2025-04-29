import { listArraySchema } from "../schemas/taskSchema"
import { supabase } from "./supabaseClient"

// リスト取得
export async function getLists(userId: string) {
	const { data, error } = await supabase
		.from('lists')
		.select('*')
		.eq('user_id', userId)

	if (error) throw new Error(error.message)

	const parsed = listArraySchema.safeParse(data)

	if (!parsed.success) {
		console.error(parsed.error.flatten())
		throw new Error('取得データの形式が不正です')
	}

	return parsed.data ? parsed.data : [];
}