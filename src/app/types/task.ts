// types/task.ts
import { z } from 'zod';

export const RoutineIntervalTypeSchema = z.enum(['day', 'week', 'month', 'year']);

export const TaskSchema = z.object({
	name: z.string().min(1, 'タスク名は必須です'),
	type: z.enum(['check', 'count']),
	memo: z.string().optional(),

	routine: z.object({
		enabled: z.boolean(),
		intervalType: RoutineIntervalTypeSchema,
		intervalValue: z.number().min(1, '周期は1以上である必要があります'),
	}).optional(),

	history: z.array(z.string()).default([]), // 日付の配列（ISO文字列）

	userId: z.string().min(1),
	listId: z.string().min(1),
});

export type Task = z.infer<typeof TaskSchema>;