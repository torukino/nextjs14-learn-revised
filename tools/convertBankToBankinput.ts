import { BANK, BANKINPUT } from '@/types/bank'

export function convertBankToBankinput(bank: BANK): BANKINPUT {
	let inAmount: number|undefined = undefined
	let outAmount: number|undefined = undefined

	if (bank.inM) inAmount = Number(bank.inM.replace(/,/g, ''))

	const bankunput: BANKINPUT = {
		id: bank.id,
		date: bank.date,
		reminder: bank.reminder,
		reminderId: bank.reminderId,
		account: bank.account,
		status: bank.status,
		inAmount: inAmount,
		outAmount: outAmount,
	}
	return bankunput
}
