import ClientComponent from '@/app/ui/dashboard/client_component'
import { myAction } from '@/app/lib/actions'
import { fetchBankPages, fetchFirestore } from '@/app/lib/data'
import { BANK } from '@/types/bank'
import BankTable from '@/app/ui/invoices/bank-table'
import { Suspense } from 'react'
import Pagination from '@/app/ui/invoices/pagination'
import { BanksSkeleton } from '@/app/ui/skeletons'
import Search from '@/app/ui/search'
export default async function Page({
	searchParams,
}: {
	searchParams: {
		query?: string
		page?: string
	}
}) {
	const reminder = searchParams?.query || ''
	const currentPage = Number(searchParams?.page) || 1
	const totalPages = await fetchBankPages(reminder)

	return (
		<main>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
					<Search placeholder="摘要を検索..." />
					{/* <CreateInvoice /> */}
				</div>

				<Suspense key={reminder + currentPage} fallback={<BanksSkeleton />}>
					<BankTable reminder={reminder} currentPage={currentPage} />
				</Suspense>
				<div className="mt-5 flex w-full justify-center">
					<Pagination totalPages={totalPages} />
				</div>
			</div>
		</main>
	)
}
