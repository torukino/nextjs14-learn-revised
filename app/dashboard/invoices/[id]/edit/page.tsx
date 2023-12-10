import Form from '@/app/ui/invoices/edit-bank-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchBankById, fetchReminders } from '@/app/lib/data'

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id
	const [bank, reminders] = await Promise.all([fetchBankById(id), fetchReminders()])

	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{ label: 'Invoices', href: '/dashboard/invoices' },
					{
						label: 'Edit Invoice',
						href: `/dashboard/invoices/${id}/edit`,
						active: true,
					},
				]}
			/>
			<Form bank_={bank} reminders={reminders} />
		</main>
	)
}
