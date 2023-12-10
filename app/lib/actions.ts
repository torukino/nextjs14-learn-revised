'use server'

// export async function myAction(formData: FormData) {
// 	// console.log('formData', formData.get('name'))
// 	await firestore.collection('sample').add({ name: formData.get('name') })
// }

import { fetchReminderById, updateBankDb } from '@/app/lib/data'
import { convertFormDataintoBank } from '@/tools/convData'
import { firestore } from '@/app/lib/firebaseConfig'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const BUG = true

export async function updateBank(formData: FormData) {
	BUG && console.log(`reminder,${formData.get('reminder')}`)
	const reminderId_: any = formData.get('reminder') || ''
	const reminderId = reminderId_.toString()
	BUG && console.log(`reminderId,${reminderId}`)

	const reminder = await fetchReminderById(reminderId)
	const rawFormData = {
		id: formData.get('id'),
		date: formData.get('date'),
		reminderId: formData.get('reminder'),
		reminder: reminder,
		account: formData.get('account'),
		inAmount: Number(formData.get('inAmount')),
		outAmount: Number(formData.get('outAmount')),
		status: formData.get('status'),
	}

	const newBank = convertFormDataintoBank(rawFormData)
	BUG && console.log('------------------')
	BUG && console.log('rawFormData', JSON.stringify(rawFormData))
	BUG && console.log('')
	BUG && console.log('new bank data:', JSON.stringify(newBank))

	await updateBankDb(newBank)

	revalidatePath('/dashboard/invoices')
	redirect('/dashboard/invoices')
}

export async function deleteBank(id: string): Promise<void> {
	BUG && console.log('deleteBank', id)
	// await firestore.collection('bank').doc(id).delete()

	revalidatePath('/dashboard/invoices')
}

export async function createBank(formData: FormData) {
	BUG && console.log(`reminder,${formData.get('reminder')}`)
	const reminderId_: any = formData.get('reminder') || ''
	const reminderId = reminderId_.toString()
	BUG && console.log(`reminderId,${reminderId}`)

	const reminder = await fetchReminderById(reminderId)
	const rawFormData = {
		date: formData.get('date'),
		reminderId: formData.get('reminder'),
		reminder: reminder,
		account: formData.get('account'),
		inAmount: Number(formData.get('inAmount')),
		outAmount: Number(formData.get('outAmount')),
		status: formData.get('status'),
	}

	const newBank = convertFormDataintoBank(rawFormData)

	BUG && console.log('rawFormData', JSON.stringify(rawFormData))
	BUG && console.log('new bank data:', JSON.stringify(newBank))

	await updateBankDb(newBank)

	// // const n1 = newAllBank[newAllBank.length - 1]
	// // const n2 = newAllBank[newAllBank.length - 2]
	// // console.log(`${n2.date} 入金: ${n2.inM} 出金: ${n2.outM} 残高: ${n2.resM}`)
	// // console.log(`${n1.date} 入金: ${n1.inM} 出金: ${n1.outM} 残高: ${n1.resM}`)

	revalidatePath('/dashboard/invoices')
	redirect('/dashboard/invoices')
}
