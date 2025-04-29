import { z } from "zod";

// 共通
const uuid = z.string().uuid();
const timestamp = z.string().datetime();
const taskTypeEnum = z.enum(['check', 'count']);
const routineTypeEnum = z.enum(['day', 'week', 'month', 'year']);

// List（タスクリスト）
export const listSchema = z.object({
	id: uuid,
	userId: z.string(),
	name: z.string().min(1),
	createdAt: timestamp,
	updatedAt: timestamp
});
export const listArraySchema = z.array(listSchema);
export type List = z.infer<typeof listSchema>;

// Task（タスク）
export const taskSchema = z.object({
	id: uuid,
	listId: uuid,
	userId: z.string(),
	name: z.string().min(1),
	type: taskTypeEnum,
	routineType: routineTypeEnum,
	routineValue: z.number().int().positive().optional(),
	memo: z.string().optional(),
	createdAt: timestamp,
	updatedAt: timestamp,
});
export type Task = z.infer<typeof taskSchema>;

// TaskLog（実行履歴）
export const taskLogSchema = z.object({
	id: uuid,
	taskId: uuid,
	date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // 'YYYY-MM-DD'
	value: z.number().nullable(), // チェックなら 1 or null, カウントなら数値
	createdAt: timestamp,
	updatedAt: timestamp
});

export type TaskLog = z.infer<typeof taskLogSchema>;