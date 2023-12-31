'use client'
import Link from 'next/link'
import { CheckIcon, ClockIcon, CurrencyYenIcon, UserCircleIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { Button } from '@/app/ui/button'
import React from 'react'
import { useFormState } from 'react-dom'
import { createReminder } from '@/app/lib/actions'

export default function Form() {
	const initialState = { message: null, errors: {} }
	const [state, dispatch] = useFormState(createReminder, initialState)

	return (
		<form action={dispatch}>
			<div className="rounded-md bg-gray-50 p-4 md:p-6">
				{/* 摘要を選ぶ */}
				<div className="mb-4">
					<label htmlFor="outAmount" className="mb-2 block text-sm font-medium">
						摘要
					</label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<input
								id="reminder"
								name="reminder"
								type="text"
								step="1"
								placeholder="摘要を入力"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
							/>
							<UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
					</div>
				</div>

				{/* 分類 */}
				<fieldset>
					<legend className="mb-2 block text-sm font-medium">分類</legend>
					<div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
						<div className="flex gap-4">
							<div className="flex items-center">
								<input
									id="auto"
									name="status"
									type="radio"
									value="auto"
									className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
								/>
								<label
									htmlFor="auto"
									className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
								>
									自動振替 <ClockIcon className="h-4 w-4" />
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="hand"
									name="status"
									type="radio"
									value="hand"
									className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
								/>
								<label
									htmlFor="hand"
									className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-300 px-3 py-1.5 text-xs font-medium text-balck"
								>
									手動振込 <CheckIcon className="h-4 w-4" />
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="undef"
									name="status"
									type="radio"
									value="undef"
									className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
								/>
								<label
									htmlFor="undef"
									className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-300 px-3 py-1.5 text-xs font-medium text-black"
								>
									未分類 <FaceSmileIcon className="h-4 w-4" />
								</label>
							</div>
						</div>
					</div>
				</fieldset>

				{/* 銀行口座*/}
				<div className="mb-4">
					<label htmlFor="account" className="mb-2 block text-sm font-medium">
						銀行を選んでください
					</label>
					<div className="relative">
						<select
							id="account"
							name="account"
							className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
						>
							<option value="" disabled>
								銀行口座の選択
							</option>
							{['みずほ銀行', '群銀個人', '群銀コロナ', '群銀法人'].map((r, index) => (
								<option key={index} value={r.toString()}>
									{r.toString()}
								</option>
							))}
						</select>
						<UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
					</div>
				</div>

				{/* Invoice Amount */}
				<div className="mb-4">
					<label htmlFor="inAmountStr" className="mb-2 block text-sm font-medium">
						入金額
					</label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<input
								id="inAmountStr"
								name="inAmountStr"
								type="number"
								step="1"
								placeholder="入金額を入力"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
							/>
							<CurrencyYenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
					</div>
				</div>

				{/*  Amount */}
				<div className="mb-4">
					<label htmlFor="outAmountStr" className="mb-2 block text-sm font-medium">
						出勤額
					</label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<input
								id="outAmountStr"
								name="outAmountStr"
								type="number"
								step="1"
								placeholder="出金額を入力"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
							/>
							<CurrencyYenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
					</div>
				</div>
			</div>

			<div className="mt-6 flex justify-end gap-4">
				<Link
					href="/dashboard/customers"
					className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
				>
					取消
				</Link>
				<Button type="submit">更新</Button>
			</div>
		</form>
	)
}
