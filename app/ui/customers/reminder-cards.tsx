import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { REMINDER } from '@/types/reminder'
import { DeleteReminderButton, UpdateReminderButton } from '@/app/ui/customers/buttons'
const BUG = false
const iconMap = {
	collected: BanknotesIcon,
	customers: UserGroupIcon,
	pending: ClockIcon,
	invoices: InboxIcon,
}

export function Card({ reminder }: { reminder: REMINDER }) {
	// const Icon = iconMap[type]
	if (BUG && reminder.account === '群銀法人') {
		console.log(`reminder (in reminder-cards):`)
		console.log(`${reminder.reminder} ${reminder.account} ${reminder.status} ${reminder.inAmountStr} ${reminder.outAmountStr}`)
	}
	return (
		<div className="rounded-xl bg-gray-50 p-2 shadow-xl border-4 border-gray-200">
			<div className="flex flex-col">{/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}</div>
			<p className={`truncate rounded-xl bg-yellow-50 py-2 text-center text-xl`}>{reminder.reminder}</p>
			<p className={`truncate rounded-xl bg-white text-center text-base`}>{reminder.account}</p>
			<p className={`truncate rounded-xl bg-purple-50 text-center text-base`}>{reminder.status}</p>

			{reminder?.inAmountStr && (
				<p className={`truncate rounded-xl bg-blue-100 text-center text-base`}>
					入金:
					{reminder.inAmountStr}円
				</p>
			)}

			{reminder?.outAmountStr && (
				<p className={`truncate rounded-xl bg-red-100 text-center text-base`}>
					出金:
					{reminder.outAmountStr}円
				</p>
			)}

			<div className="flex justify-around">
				<UpdateReminderButton reminder={reminder} />
				<DeleteReminderButton id={reminder.id} />
			</div>
		</div>
	)
}
