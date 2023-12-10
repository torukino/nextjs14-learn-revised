import { deleteBank, updateBank } from '@/app/lib/actions'
import { BANK } from '@/types/bank'
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function UpdateBankButton({ bank }: { bank: BANK }) {
	const id = bank.id
	return (
		<Link href={`/dashboard/invoices/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100">
			<PencilIcon className="w-5" />
		</Link>
	)
}

export function DeleteBankButton({ id }: { id: string }) {
	const deleteInvoiceWithId = deleteBank.bind(null, id)
	return (
		<form action={deleteInvoiceWithId}>
			<button className="rounded-md border p-2 hover:bg-gray-100">
				<span className="sr-only">Delete</span>
				<TrashIcon className="w-5" />
			</button>
		</form>
	)
}

export function CreateBank() {
	return (
		<Link
			href="/dashboard/invoices/create"
			className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
		>
			<span className="hidden md:block">新たな取引を作成</span> <PlusIcon className="h-5 md:ml-4" />
		</Link>
	)
}

export function CreateInvoice() {
	return (
		<Link
			href="/dashboard/invoices/create"
			className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
		>
			<span className="hidden md:block">Create Invoice</span> <PlusIcon className="h-5 md:ml-4" />
		</Link>
	)
}

export function UpdateInvoice({ id }: { id: string }) {
	return (
		<Link href="/dashboard/invoices" className="rounded-md border p-2 hover:bg-gray-100">
			<PencilIcon className="w-5" />
		</Link>
	)
}

export function DeleteInvoice({ id }: { id: string }) {
	return (
		<>
			<button className="rounded-md border p-2 hover:bg-gray-100">
				<span className="sr-only">Delete</span>
				<TrashIcon className="w-5" />
			</button>
		</>
	)
}
