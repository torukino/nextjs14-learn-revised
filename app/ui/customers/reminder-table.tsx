import { fetchAllBank } from '@/app/lib/data'
import { BANK } from '@/types/bank'
import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import { Card } from '@/app/ui/customers/bank-cards'

export default async function ReminderTable() {
	const banks: BANK[] = await fetchAllBank()

	interface BANKPLUS extends BANK{
		inAmountStr: string
		outAmountStr: string
	}

	const bankPlus: BANKPLUS[] = []
	banks.forEach(bank => {
		let inAmountStr: string = ''
		let outAmountStr: string = ''
		if (bank.inM) inAmountStr = bank.inM
		if (bank.outM) outAmountStr = bank.outM
		if (bank.inI) inAmountStr = bank.inI
		if (bank.outI) outAmountStr = bank.outI
		if (bank.inC) inAmountStr = bank.inC
		if (bank.outC) outAmountStr = bank.outC
		if (bank.inH) inAmountStr = bank.inH
		if (bank.outH) outAmountStr = bank.outH
	})

	// const bankPlus_:BANKPLUS = {
	// 	...bank,
	// 	inAmountStr: inAmountStr,
	// 	outAmountStr: outAmountStr,
	// }

	// bankPlus.push(bankPlus_)



	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0 flex flex-wrap">
					{banks.map((bank, index) => (
						<div key={index}>
							<Card bank={bank} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
