import Form from '@/app/ui/invoices/create-bank-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import React, { Suspense } from 'react'
import { fetchReminders } from '@/app/lib/data'
import FormSkelton from '@/app/ui/invoices/create-bank-form-skelton'

export default async function Page() {
	const reminders = await fetchReminders()

	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{ label: '取引明細', href: '/dashboard/invoices' },
					{
						label: '新規取引作成',
						href: '/dashboard/invoices/create',
						active: true,
					},
				]}
			/>
			<Form reminders={reminders} />
		</main>
	)
}
