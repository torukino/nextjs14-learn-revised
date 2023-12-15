import Form from '@/app/ui/customers/create-reminder-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import React from 'react'

export default async function Page() {
	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{ label: '摘要リスト', href: '/dashboard/customers' },
					{
						label: '新規取引作成',
						href: '/dashboard/customers/create',
						active: true,
					},
				]}
			/>
			<Form />
		</main>
	)
}
