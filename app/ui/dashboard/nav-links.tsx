'use client'

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: 'ホーム', href: '/dashboard', icon: HomeIcon },
	{
		name: '取引明細',
		href: '/dashboard/invoices',
		icon: DocumentDuplicateIcon,
	},
	{ name: '取引先', href: '/dashboard/customers', icon: UserGroupIcon },
	{ name: 'tailwind練習', href: '/dashboard/tailwind', icon: BookOpenIcon },
]

export default function NavLinks() {
	const pathname = usePathname()

	// console.log('pathname', pathname)
	return (
		<>
			{links.map(link => {
				const LinkIcon = link.icon
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
							{
								'bg-sky-100 text-blue-600': pathname === link.href,
							},
						)}
					>
						<LinkIcon className="w-6" />
						<p className="hidden md:block">{link.name}</p>
					</Link>
				)
			})}
		</>
	)
}
