import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { REMINDER } from '@/types/reminder'
import { DeleteReminderButton, UpdateReminderButton } from '@/app/ui/customers/buttons'
const BUG = true
const iconMap = {
	collected: BanknotesIcon,
	customers: UserGroupIcon,
	pending: ClockIcon,
	invoices: InboxIcon,
}

export function Card({ reminder }: { reminder: REMINDER }) {
	// const Icon = iconMap[type]
	BUG && console.log(`reminder: ${JSON.stringify(reminder)} ${reminder.inAmountStr}`)
	return (
		<div className="rounded-xl bg-gray-50 p-2 shadow-sm">
			<div className="flex p-4">{/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}</div>
			<p className={`truncate rounded-xl bg-white py-2 text-center text-xl`}>{reminder.reminder}</p>
			<p className={`truncate rounded-xl bg-white text-center text-base`}>{reminder.account}</p>
			<p className={`truncate rounded-xl bg-white text-center text-base`}>{reminder.status}</p>

			{reminder.inAmountStr && (
				<p className={`truncate rounded-xl bg-blue-200 text-center text-base`}>
					入金:
					{reminder.inAmountStr}円
				</p>
			)}

			{reminder.outAmountStr && (
				<p className={`truncate rounded-xl bg-red-200 text-center text-base`}>
					出金:
					{reminder.outAmountStr}円
				</p>
			)}

			<div>
				<UpdateReminderButton reminder={reminder} />
				<DeleteReminderButton id={reminder.id} />
			</div>
		</div>
	)
}
