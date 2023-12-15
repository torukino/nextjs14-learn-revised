import { CreateReminder } from '@/app/ui/customers/buttons'
import ReminderTable from '@/app/ui/customers/reminder-table'
import { SearchReminder } from '@/app/ui/search'
export default function Page() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 className="text-2xl ">摘要</h1>
			<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
				<SearchReminder placeholder="摘要を検索..." />
				<CreateReminder />
			</div>
			<div>
				<ReminderTable />
			</div>
		</div>
	)
}
