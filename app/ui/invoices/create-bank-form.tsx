'use client'
import Link from 'next/link'
import { CheckIcon, ClockIcon, CurrencyYenIcon, UserCircleIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { Button } from '@/app/ui/button'
import React from 'react'
import { REMINDER } from '@/types/reminder'
import { createBank } from '@/app/lib/actions'
import { useFormState } from 'react-dom'
import CreatableSelect from 'react-select/creatable'
import { CSSProperties } from 'react'
export default function Form({ reminders }: { reminders: REMINDER[] }) {
	const initialState = { message: null, errors: {} }
	const [state, dispatch] = useFormState(createBank, initialState)
	const [status, setStatus] = React.useState<string>('-')
	const [account, setAccount] = React.useState<string>('')
	const [inAmount, setInAmount] = React.useState<number | undefined>()
	const [outAmount, setOutAmount] = React.useState<number | undefined>()

	// リマインダーの状態を保存するためのReactの状態を作成します
	const [selectedReminder, setSelectedReminder] = React.useState<string>()
	const [selectedReminderId, setSelectedReminderId] = React.useState<string>()

	// // 選択されたリマインダーを状態として保存するonChangeハンドラを作成します
	function handleReminderChange(selectedOption: { label: string; value: string } | null) {
		selectedOption && console.log(`selectedOption, label:${selectedOption.label}, value:${selectedOption.value}`)

		if (selectedOption) {
			setSelectedReminder(selectedOption.label)
			setSelectedReminderId(selectedOption.value)
			const reminder = reminders.find(r => r.id === selectedOption.value)
			if (!!reminder) {
				console.log(`reminder:${reminder.reminder}`)
				setStatus(reminder.status)
				setAccount(reminder.account)
				!!reminder.inAmountStr && setInAmount(Number(reminder.inAmountStr))
				!!reminder.outAmountStr && setOutAmount(Number(reminder.outAmountStr))
			}
		}
	}

	// リマインダーの配列をラベルと値のペアに変換
	const optionsReminder = reminders.map((r: REMINDER) => ({
		label: r.reminder,
		value: r.id,
	}))
	// console.log('reminders', optionsReminder)
	return (
		<form action={dispatch}>
			<div className="rounded-md bg-gray-50 p-4 md:p-6">
				{/* 日付 */}
				<div className="mb-4">
					<label htmlFor="date" className="mb-2 block text-sm font-medium">
						日付を選んでください
					</label>
					<div className="relative">
						<input
							type="date"
							id="date"
							name="date"
							required
							min="2023-10-02"
							className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
						/>
						<ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
					</div>
				</div>

				{/* 摘要を選ぶ */}
				<div className="mb-4">
					<input type="hidden" name="selectedReminder" value={selectedReminder || ''} />
					<input type="hidden" name="selectedReminderId" value={selectedReminderId || ''} />
					<label htmlFor="reminder" className="mb-2 block text-sm font-medium">
						摘要を選んでください
					</label>
					<div className="relative">
						<CreatableSelect
							options={optionsReminder}
							onChange={handleReminderChange}
							required
							placeholder="摘要を選んでください"
							styles={{
								singleValue: provided => ({
									...(provided as CSSProperties),
									paddingLeft: '30px',
								}),
								placeholder: provided => ({
									...(provided as CSSProperties),
									paddingLeft: '30px',
								}),
								input: provided => ({
									...(provided as CSSProperties),
									paddingLeft: '30px',
								}),
							}}
						/>

						<UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
									value="自動振替"
									checked={status === '自動振替'}
									onChange={e => setStatus(e.target.value)}
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
									value="手動振込"
									checked={status === '手動振込'}
									onChange={e => setStatus(e.target.value)}
									className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
								/>
								<label
									htmlFor="hand"
									className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
								>
									手動振込 <CheckIcon className="h-4 w-4" />
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="undef"
									name="status"
									type="radio"
									value="-"
									checked={status === '-'}
									onChange={e => setStatus(e.target.value)}
									className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
								/>
								<label
									htmlFor="undef"
									className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white"
								>
									未分類 <FaceSmileIcon className="h-4 w-4" />
								</label>
							</div>
						</div>
					</div>
				</fieldset>
			</div>

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
						value={account}
						onChange={e => setAccount(e.target.value)}
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
				<label htmlFor="inAmount" className="mb-2 block text-sm font-medium">
					入金額
				</label>
				<div className="relative mt-2 rounded-md">
					<div className="relative">
						<input
							id="inAmount"
							name="inAmount"
							type="number"
							step="1"
							placeholder="入金額を入力"
							className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
							value={inAmount}
							onChange={e => setInAmount(Number(e.target.value))}
						/>
						<CurrencyYenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
					</div>
				</div>
			</div>

			{/*  Amount */}
			<div className="mb-4">
				<label htmlFor="outAmount" className="mb-2 block text-sm font-medium">
					出勤額
				</label>
				<div className="relative mt-2 rounded-md">
					<div className="relative">
						<input
							id="outAmount"
							name="outAmount"
							type="number"
							value={outAmount}
							onChange={e => setOutAmount(Number(e.target.value))}
							step="1"
							placeholder="出金額を入力"
							className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
						/>
						<CurrencyYenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
					</div>
				</div>
			</div>

			<div className="mt-6 flex justify-end gap-4">
				<Link
					href="/dashboard/invoices"
					className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
				>
					取消
				</Link>
				<Button type="submit">新規取引作成</Button>
			</div>
		</form>
	)
}
