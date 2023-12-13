import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline'
import React from 'react';

import {BANK} from '@/types/bank';
const iconMap = {
	collected: BanknotesIcon,
	customers: UserGroupIcon,
	pending: ClockIcon,
	invoices: InboxIcon,
}


export function Card({bank }: { bank:BANK}) {
	// const Icon = iconMap[type]

	return (
		<div className="rounded-xl bg-gray-50 p-2 shadow-sm">
			<div className="flex p-4">
				{/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
				<h3 className="ml-2 text-sm font-medium">{bank.date}</h3>
			</div>
			<p
				className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
			>
				{bank.reminder}
			</p>
		</div>
	)
}
