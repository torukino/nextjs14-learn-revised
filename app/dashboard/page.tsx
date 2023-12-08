import { fetchAllBank } from '@/app/lib/data'
import LineChart from '@/app/ui/dashboard/bank_linechart'
import LatestBank from '@/app/ui/dashboard/lastest_bank'
import { BANK } from '@/types/bank'

export default async function Page() {
	const data: BANK[] = await fetchAllBank()
	return (
		<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
			<LineChart data={data} />
			<LatestBank />
		</div>
	)
}
