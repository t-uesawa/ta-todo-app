'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { supabase } from '@/lib/supabase/supabaseClient';
import { useRouter } from 'next/navigation';

const schema = z.object({
	name: z.string().min(1, 'タスク名は必須です'),
	type: z.enum(['check', 'count']),
	note: z.string().optional(),
	isRoutine: z.boolean(),
	intervalType: z.enum(['day', 'week', 'month', 'year']).optional(),
	intervalValue: z
		.number({ invalid_type_error: '数値を入力してください' })
		.positive('1以上を入力してください')
		.optional(),
});

type FormData = z.infer<typeof schema>;

export default function TaskForm({ listId, userId }: { listId: string; userId: string }) {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			isRoutine: false,
		},
	});

	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const isRoutine = watch('isRoutine');

	const onSubmit = async (data: FormData) => {
		setLoading(true);

		const { error } = await supabase.from('tasks').insert({
			name: data.name,
			type: data.type,
			note: data.note ?? '',
			list_id: listId,
			created_by: userId,
			is_routine: data.isRoutine,
			routine: data.isRoutine
				? {
					intervalType: data.intervalType,
					intervalValue: data.intervalValue,
				}
				: null,
			executions: [],
		});

		setLoading(false);

		if (error) {
			alert('登録失敗: ' + error.message);
		} else {
			router.push(`/list/${listId}`);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div>
				<Input placeholder="タスク名" {...register('name')} />
				{errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
			</div>

			<div>
				<Select onValueChange={(val) => setValue('type', val as 'check' | 'count')}>
					<SelectTrigger>
						<SelectValue placeholder="タスク種別を選択" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="check">チェック</SelectItem>
						<SelectItem value="count">カウント</SelectItem>
					</SelectContent>
				</Select>
				{errors.type && <p className="text-sm text-red-500">{errors.type.message}</p>}
			</div>

			<Textarea placeholder="メモ (任意)" {...register('note')} />

			<div className="flex items-center gap-2">
				<Checkbox
					checked={isRoutine}
					onCheckedChange={(checked) => setValue('isRoutine', Boolean(checked))}
				/>
				<label className="text-sm">ルーティン設定</label>
			</div>

			{isRoutine && (
				<div className="grid grid-cols-2 gap-2">
					<Select onValueChange={(val) => setValue('intervalType', val as any)}>
						<SelectTrigger>
							<SelectValue placeholder="周期タイプ" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="day">日</SelectItem>
							<SelectItem value="week">週</SelectItem>
							<SelectItem value="month">月</SelectItem>
							<SelectItem value="year">年</SelectItem>
						</SelectContent>
					</Select>

					<Input
						type="number"
						placeholder="周期数値"
						{...register('intervalValue', { valueAsNumber: true })}
					/>
				</div>
			)}

			<Button type="submit" disabled={loading}>
				{loading ? '登録中...' : '登録'}
			</Button>
		</form>
	);
}
