'use server'

// export async function myAction(formData: FormData) {
// 	// console.log('formData', formData.get('name'))
// 	await firestore.collection('sample').add({ name: formData.get('name') })
// }
import { v4 as uuidv4 } from 'uuid'
import { fetchReminderById, updateBankDb, updateReminderDB } from '@/app/lib/data'
import { convertFormDataintoBank } from '@/tools/convData'
import { firestore } from '@/app/lib/firebaseConfig'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { z } from 'zod'
import { REMINDER } from '@/types/reminder'
const BUG = false

export async function authenticate(prevState: string | undefined, formData: FormData) {
	try {
		await signIn('credentials', formData)
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return 'Invalid credentials.'
				default:
					return 'Something went wrong.'
			}
		}
		throw error
	}
}

export async function updateReminder(formData: FormData) {
	const data = {
		id: formData.get('id'),
		reminder: formData.get('reminder'),
		account: formData.get('account'),
		inAmountStr: formData.get('inAmountStr'),
		outAmountStr: formData.get('outAmountStr'),
		status: formData.get('status'),
	}

	if (!data.id) {
		const id = uuidv4()
		const data_ = { ...data, id: id }
		await updateReminderDB(data_ as REMINDER)
	} else {
		await updateReminderDB(data as REMINDER)
	}

	revalidatePath('/dashboard/customers')
	redirect('/dashboard/customers')
}

export async function deleteReminder(id: string): Promise<void> {
	BUG && console.log('deleteReminder', id)
	await firestore.collection('reminder').doc(id).delete()

	revalidatePath('/dashboard/customers')
}

const FormSchemaReminder = z.object({
	id: z.string(),
	reminder: z.string({
		invalid_type_error: '摘要を正しく入力してください',
	}),
	account: z.string(),
	inAmountStr: z.string(),
	outAmountStr: z.string(),
	status: z.string(),
})
const CreateReminder = FormSchemaReminder.omit({ id: true })
export interface StateReminder {
	errors: {
		reminder?: string[]
		account?: string[]
		inAmountStr?: string[]
		outAmountStr?: string[]
		status?: string[]
	}
	message?: string | null
}

export async function createReminder(prevState: StateReminder, formData: FormData) {
	const validatedFields = CreateReminder.safeParse({
		reminder: formData.get('reminder'),
		account: formData.get('account'),
		inAmountStr: Number(formData.get('inAmountStr')).toLocaleString() || '',
		outAmountStr: Number(formData.get('outAmountStr')).toLocaleString() || '',
		status: formData.get('status'),
	})

	// 例
	// validatedFields {"success":true,"data":{"date":"2023-12-12","reminderId":"KWpDZy9Ms73tY6CuiqF0","reminder":"KWpDZy9Ms73tY6CuiqF0","account":"群銀個人","inAmount":1000,"outAmount":10,"status":"undef"}}
	// あるいは
	// validatedFields {"success":false,"error":{"issues":[{"code":"too_small","minimum":0,"type":"number","inclusive":false,"exact":false,"message":"0以上の数字を入力してください","path":["outAmount"]}],"name":"ZodError"}}
	// など
	BUG && console.log('validatedFields', JSON.stringify(validatedFields))
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			messages: 'Missing Fileds. Failed to Create Reminder',
		}
	}
	BUG && console.log('validatedFields.data', JSON.stringify(validatedFields.data))

	const reminderFormData = { ...validatedFields.data }

	// const rawFormData = {
	// 	date: formData.get('date'),
	// 	reminderId: formData.get('reminder'),
	// 	reminder: reminder,
	// 	account: formData.get('account'),
	// 	inAmount: Number(formData.get('inAmount')),
	// 	outAmount: Number(formData.get('outAmount')),
	// 	status: formData.get('status'),
	// }
	const id = uuidv4()
	let status = ''
	let inAmountStr = reminderFormData.inAmountStr
	let outAmountStr = ''
	if (reminderFormData.status === 'undef') status = '-'
	if (reminderFormData.status === 'hand') status = '手動振込'
	if (reminderFormData.status === 'auto') status = '自動振込'
	if (inAmountStr === '0') inAmountStr = ''
	if (outAmountStr === '0') outAmountStr = ''

	const reminderFormData_: REMINDER = { ...reminderFormData, id: id, status: status, inAmountStr: inAmountStr, outAmountStr: outAmountStr }

	BUG && console.log('reminderFormData', JSON.stringify(reminderFormData_))

	await updateReminderDB(reminderFormData_ as REMINDER)

	revalidatePath('/dashboard/customers')
	redirect('/dashboard/customers')
}

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
	await firestore.collection('bank').doc(id).delete()

	revalidatePath('/dashboard/invoices')
}

const FormSchema = z.object({
	id: z.string(),
	date: z.string({
		invalid_type_error: '日付を正しく入力してください',
	}),
	reminderId: z.string({
		invalid_type_error: '摘要を正しく入力してください',
	}),
	reminder: z.string({
		invalid_type_error: '摘要を正しく入力してください',
	}),
	account: z.string(),
	inAmount: z.union([
		z
			.string()
			.refine(value => value === '' || value === undefined, { message: '空文字列またはundefinedである必要があります' })
			.transform(() => 0),
		z.number().int().gte(0, { message: '正の整数を入力してください' }),
	]),
	outAmount: z.union([
		z
			.string()
			.refine(value => value === '' || value === undefined, { message: '空文字列またはundefinedである必要があります' })
			.transform(() => 0),
		z.number().int().gte(0, { message: '正の整数を入力してください' }),
	]),
	status: z.string(),
})
const CreateBank = FormSchema.omit({ id: true })
export interface State {
	errors: {
		date?: string[]
		reminderId?: string[]
		reminder?: string[]
		account?: string[]
		inAmount?: string[]
		outAmount?: string[]
		status?: string[]
	}
	message?: string | null
}

export async function createBank(prevState: State, formData: FormData) {
	const validatedFields = CreateBank.safeParse({
		date: formData.get('date'),
		reminderId: formData.get('selectedReminderId'),
		reminder: formData.get('selectedReminder'),
		account: formData.get('account'),
		inAmount: Number(formData.get('inAmount')),
		outAmount: Number(formData.get('outAmount')),
		status: formData.get('status'),
	})

	// 例
	// validatedFields {"success":true,"data":{"date":"2023-12-12","reminderId":"KWpDZy9Ms73tY6CuiqF0","reminder":"KWpDZy9Ms73tY6CuiqF0","account":"群銀個人","inAmount":1000,"outAmount":10,"status":"undef"}}
	// あるいは
	// validatedFields {"success":false,"error":{"issues":[{"code":"too_small","minimum":0,"type":"number","inclusive":false,"exact":false,"message":"0以上の数字を入力してください","path":["outAmount"]}],"name":"ZodError"}}
	// など
	BUG && console.log('validatedFields', JSON.stringify(validatedFields))
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			messages: 'Missing Fileds. Failed to Create Bank',
		}
	}
	BUG && console.log('validatedFields.data', JSON.stringify(validatedFields.data))
	// validatedFields.data {"date":"2023-12-19","reminderId":"9gSENJ0WAodVHvVxHBXg",
	// "reminder":"9gSENJ0WAodVHvVxHBXg","account":"みずほ銀行","inAmount":200,"outAmount":0,
	// "status":"hand"}
	const reminderId = validatedFields.data.reminderId
	let reminder = await fetchReminderById(reminderId)
	if (!reminder) {
		const id = uuidv4()
		const newReminder: REMINDER = {
			id: id,
			reminder: validatedFields.data.reminder,
			account: validatedFields.data.account,
			inAmountStr: validatedFields.data.inAmount.toString(),
			outAmountStr: validatedFields.data.outAmount.toString(),
			status: validatedFields.data.status,
		}

		updateReminderDB(newReminder)
	}
	const rawFormData = { ...validatedFields.data, reminder: reminder }

	// const rawFormData = {
	// 	date: formData.get('date'),
	// 	reminderId: formData.get('reminder'),
	// 	reminder: reminder,
	// 	account: formData.get('account'),
	// 	inAmount: Number(formData.get('inAmount')),
	// 	outAmount: Number(formData.get('outAmount')),
	// 	status: formData.get('status'),
	// }

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
