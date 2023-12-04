import Image from 'next/image'
import { UpdateInvoice, DeleteInvoice, UpdateBank, DeleteBank } from '@/app/ui/invoices/buttons'
import InvoiceStatus from '@/app/ui/invoices/status'
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils'
import { fetchFilteredBank } from '@/app/lib/data'
import { BANK } from '@/types/bank'

export default async function BankTable({ reminder, currentPage }: { reminder: string; currentPage: number }) {
	const fdata: BANK[] = await fetchFilteredBank(reminder, currentPage)

	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
					{/* <div className="md:hidden">
						{fdata?.map(invoice => (
							<div key={invoice.id} className="mb-2 w-full rounded-md bg-white p-4">
								<div className="flex items-center justify-between border-b pb-4">
									<div>
										<div className="mb-2 flex items-center">
											<Image src={invoice.image_url} className="mr-2 rounded-full" width={28} height={28} alt={`${invoice.name}'s profile picture`} />
											<p>{invoice.name}</p>
										</div>
										<p className="text-sm text-gray-500">{invoice.email}</p>
									</div>
									<InvoiceStatus status={invoice.status} />
								</div>
								<div className="flex w-full items-center justify-between pt-4">
									<div>
										<p className="text-xl font-medium">{formatCurrency(invoice.amount)}</p>
										<p>{formatDateToLocal(invoice.date)}</p>
									</div>
									<div className="flex justify-end gap-2">
										<UpdateInvoice id={invoice.id} />
										<DeleteInvoice id={invoice.id} />
									</div>
								</div>
							</div>
						))}
					</div> */}
					<table className="w-full text-left">
						<thead className="bg-white">
							<tr>
								<th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
									日付
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									分類
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									摘要
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									みずほ銀行入金
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									みずほ銀行出金
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									みずほ銀行残高
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									群馬銀行入金
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									群馬銀行出金
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									群馬銀行残高
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									群銀コロナ入金
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									群銀コロナ出金
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									群銀コロナ残高
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									郡銀法人入金
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									群銀法人出金
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									群銀法人残高
								</th>
								<th scope="col" className="relative py-3 pl-6 pr-3">
									<span className="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{fdata.map((b, index) => (
								<tr key={index}>
									<td className="relative py-4 pr-3 text-sm font-medium text-gray-900">{b.date}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.class}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.reminder}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.inM}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.outM}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.resM}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.inI}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.outI}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.resI}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.inC}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.outC}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.resC}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.inH}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.outH}</td>
									<td className="px-3 py-4 text-sm text-gray-500">{b.resH}</td>
									<div className="flex justify-end gap-3">
										<UpdateBank bank={b} />
										<DeleteBank bank={b} />
									</div>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
