import { fetchAllBank, fetchAllReminders } from '@/app/lib/data'
import { BANK, BANKPLUS } from '@/types/bank'
import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'

import { REMINDER } from '@/types/reminder'
import { Card } from '@/app/ui/customers/reminder-cards'
const BUG = true

export default async function ReminderTable() {
	const reminders: REMINDER[] = await fetchAllReminders()
	BUG &&
		reminders.forEach(r => {
			if (typeof r.reminder !== 'string') console.log(`reminder:${JSON.stringify(r.reminder)} typeof reminder (in reminder-table): ${typeof r.reminder}`)
		})
	BUG && console.log('reminders length:', reminders.length)
	BUG &&
		reminders.forEach(reminder => {
			if (BUG && reminder.account === '群銀法人') {
				console.log(`reminder (in ReminderTable):${reminder.id}}`)
				console.log(`${reminder.reminder} ${reminder.account} ${reminder.inAmountStr} ${reminder.outAmountStr}`)
			}
		})

	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0 flex flex-wrap">
					{reminders.map((reminder, index) => (
						<div key={reminder.id}>
							<Card reminder={reminder} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
