import { fetchAllBank, fetchAllReminders } from '@/app/lib/data'
import { BANK, BANKPLUS } from '@/types/bank'
import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import { Card } from '@/app/ui/customers/bank-cards'
import { REMINDER } from '@/types/reminder'
const BUG = true
export default async function ReminderTable() {
	const reminders: REMINDER[] = await fetchAllReminders()
	console.log('reminders length:', reminders.length)

	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0 flex flex-wrap">
					{reminders.map((reminder, index) => (
						<div key={index}>
							<Card reminder={reminder} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
