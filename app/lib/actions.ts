'use server'

// export async function myAction(formData: FormData) {
// 	// console.log('formData', formData.get('name'))
// 	await firestore.collection('sample').add({ name: formData.get('name') })
// }

import { fetchAllBank, fetchReminderById, updateBank } from '@/app/lib/data'
import { convertFormDataintoBank } from '@/tools/convData'
import { recalculationBank } from '@/tools/recalculationBank'
import { BANK } from '@/types/bank'
import { firestore } from '@/app/lib/firebaseConfig'
import { revalidatePath } from 'next/cache'

export async function deleteBank(id: string): Promise<void> {
	console.log('deleteBank', id)
	await firestore.collection('bank').doc(id).delete()
	const allBank: BANK[] = await fetchAllBank()

	const newAllBank = recalculationBank(allBank)
	console.log(`newAllBank: ${JSON.stringify(newAllBank)}`)
	newAllBank.forEach(async bank => {
		await updateBank(bank)
	})

	const n1 = newAllBank[newAllBank.length - 1]
	const n2 = newAllBank[newAllBank.length - 2]
	console.log(`${n2.date} 入金: ${n2.inM} 出金: ${n2.outM} 残高: ${n2.resM}`)
	console.log(`${n1.date} 入金: ${n1.inM} 出金: ${n1.outM} 残高: ${n1.resM}`)

	revalidatePath('/dashboard/invoices')
}

export async function createBank(formData: FormData) {
	console.log(`reminder,${formData.get('reminder')}`)
	const reminderId_: any = formData.get('reminder') || ''
	const reminderId = reminderId_.toString()
	console.log(`reminderId,${reminderId}`)

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

	console.log('rawFormData', JSON.stringify(rawFormData))
	console.log('new bank data:', JSON.stringify(newBank))

	const allBank: BANK[] = await fetchAllBank()
	allBank.push(newBank)
	const newAllBank = recalculationBank(allBank)

	newAllBank.forEach(async bank => {
		await updateBank(bank)
	})

	// // const n1 = newAllBank[newAllBank.length - 1]
	// // const n2 = newAllBank[newAllBank.length - 2]
	// // console.log(`${n2.date} 入金: ${n2.inM} 出金: ${n2.outM} 残高: ${n2.resM}`)
	// // console.log(`${n1.date} 入金: ${n1.inM} 出金: ${n1.outM} 残高: ${n1.resM}`)

	// // revalidatePath('/dashboard/invoices')
	// redirect('/dashboard/invoices')
}
