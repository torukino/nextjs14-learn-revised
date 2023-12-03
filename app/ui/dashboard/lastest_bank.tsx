import { ArrowPathIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { lusitana } from '@/app/ui/fonts'
import { BANK } from '@/types/bank'
import { fetchLastestFirestore } from '@/app/lib/data'

export default async function LatestBank() {
	const latestBankData: BANK[] = await fetchLastestFirestore()

	return (
		<div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
			<h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>みずほ銀行取引ワースト5</h2>
			<div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
				<div className="bg-white px-6">
					{latestBankData.map((data, i) => {
						return (
							<div
								key={i}
								className={clsx('flex flex-row items-center justify-between py-2', {
									'border-t': i !== 0,
								})}
							>
								<div className="min-w-0 flex flex-col">
									<div className="flex flex-wrap">
										<p className="ml-2 text-sm md:text-base">{data.date}</p>
										<p className="ml-2 text-sm md:text-base">{data.reminder}</p>
										<p className="text-sm md:text-base">{data.outM}円</p>
									</div>
									<div className="flex">
										<p className={`${lusitana.className} mt-2 mr-2 text-sm font-semibold md:text-base`}>残高:{data.resM}円</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				<div className="flex items-center pb-2 pt-6">
					<ArrowPathIcon className="h-5 w-5 text-gray-500" />
					<h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
				</div>
			</div>
		</div>
	)
}
