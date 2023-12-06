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
	let inM = ''
	let outM = ''
	let inI = ''
	let outI = ''
	let inC = ''
	let outC = ''
	let inH = ''
	let outH = ''

	if (account === 'みずほ銀行') {
		inM = rawFormData.inM || ''
		outM = rawFormData.outM || ''
	} else if (account === '群銀個人') {
		inI = rawFormData.inI || ''
		outI = rawFormData.outI || ''
	} else if (account === '群銀コロナ') {
		inC = rawFormData.inC || ''
		outC = rawFormData.outC || ''
	} else if (account === '群銀法人') {
		inH = rawFormData.inH || ''
		outH = rawFormData.outH || ''
	}
	return {
		id: id,
		date: date,
		status: status,
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
