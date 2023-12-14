import Form from '@/app/ui/customers/edit-reminder-form'
import { fetchAllReminders, fetchBankById, fetchReminders } from '@/app/lib/data'
import Breadcrumbs from '@/app/ui/customers/breadcrumbs'

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id
	const reminders = await fetchAllReminders()
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
			<Form reminders={reminders} />
		</main>
	)
}
