import Link from 'next/link'
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { deleteReminder } from '@/app/lib/actions'
import { REMINDER } from '@/types/reminder'

export function UpdateReminderButton({ reminder }: { reminder: REMINDER }) {
	const id = reminder.id
	return (
		<Link href={`/dashboard/customers/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100">
			<PencilIcon className="w-5" />
		</Link>
	)
}

export function DeleteReminderButton({ id }: { id: string }) {
	const deleteReminderWithId = deleteReminder.bind(null, id)
	return (
		<form action={deleteReminderWithId}>
			<button className="rounded-md border p-2 hover:bg-gray-100">
				<span className="sr-only">Delete</span>
				<TrashIcon className="w-5" />
			</button>
		</form>
	)
}
