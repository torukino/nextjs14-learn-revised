import { BANK, BANK_INPUT } from '@/types/bank'
import { REMINDER, initReminder } from '@/types/reminder'

export const convertFormDataintoBank = (rawFormData: any): BANK => {
	// const rawFormData = {
	// 	date: formData.get('date'),
	// 	selectedReminder: formData.get('selectedReminder'),
	// 	account: formData.get('account'),
	// 	inAmount: formData.get('inAmount'),
	// 	outAmount: formData.get('outAmount'),
	// 	status: formData.get('status'),
	// };

	const id = rawFormData.id || ''
	const date = rawFormData.date || ''
	const status = rawFormData.status || ''
	const account = rawFormData.account || ''
	const reminder = rawFormData.selectedReminder || ''
	const reminderId = rawFormData.selectedReminderId || ''
	const inAmountStr: string = rawFormData.inAmount ? Number(rawFormData.inAmount).toLocaleString() : ''
	const outAmountStr: string = rawFormData.outAmount ? Number(rawFormData.outAmount).toLocaleString() : ''

	let inM = ''
	let outM = ''
	let inI = ''
	let outI = ''
	let inC = ''
	let outC = ''
	let inH = ''
	let outH = ''

	if (account === 'みずほ銀行') {
		inM = inAmountStr
		outM = outAmountStr
	} else if (account === '群銀個人') {
		inI = inAmountStr
		outI = outAmountStr
	} else if (account === '群銀コロナ') {
		inC = inAmountStr
		outC = outAmountStr
	} else if (account === '群銀法人') {
		inH = inAmountStr
		outH = outAmountStr
	}
	return {
		id: id,
		date: date,
		status: status,
		account: account,
		reminder: reminder,
		reminderId: reminderId,
		inM: inM,
		outM: outM,
		resM: '',
		inI: inI,
		outI: outI,
		resI: '',
		inC: inC,
		outC: outC,
		resC: '',
		inH: inH,
		outH: outH,
		resH: '',
		res: '',
	} as BANK
}
