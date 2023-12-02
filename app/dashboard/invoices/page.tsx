import ClientComponent from '@/app/ui/dashboard/client_component'
import { myAction } from '@/app/lib/actions'
import { fetchFirestore } from '@/app/lib/data'
import { BANK } from '@/types/bank'

export default async function Page() {
	const fdata: BANK[] = await fetchFirestore()

	return (
		<main>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ClientComponent action={myAction} />
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
						<p className="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p>
					</div>
					<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
						<button
							type="button"
							className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Add user
						</button>
					</div>
				</div>
			</div>
			<div className="mt-8 flow-root overflow-hidden">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	)
}
