import Form from '@/app/ui/customers/edit-reminder-form'
import { fetchAllReminders, fetchBankById, fetchReminderById, fetchReminders } from '@/app/lib/data'
import Breadcrumbs from '@/app/ui/customers/breadcrumbs'
import { REMINDER } from '@/types/reminder'
const BUG = false
export default async function Page({ params }: { params: { id: string } }) {
	const reminders = await fetchAllReminders()
	BUG && console.log('@@ reminders length:', reminders.length)

	const id = params.id
	const reminder:REMINDER = await fetchReminderById(id)
	
	BUG && console.log('@@ reminder:', JSON.stringify(reminder))

	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{ label: '摘要リスト', href: '/dashboard/customers' },
					{
						label: '摘要リスト編集',
						href: `/dashboard/customers/${id}/edit`,
						active: true,
					},
				]}
			/>
			<Form reminder_={reminder} reminders={reminders} />
		</main>
	)
}
