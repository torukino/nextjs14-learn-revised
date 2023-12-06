// 変数
// date,class,reminder,inM,outM,resM,inI,outI,resI,inC,outC,resC,inH,outH,resC,res,

import { REMINDER, initReminder } from '@/types/reminder'

export interface BANK {
	id: string
	date: string
	account?: 'みずほ銀行' | '群銀個人' | '群銀コロナ' | '群銀法人' | undefined
	class_?: 'auto' | 'hand' | 'undef'
	reminder: REMINDER
	inM?: string
	outM?: string
	resM: string
	inI?: string
	outI?: string
	resI: string
	inC?: string
	outC?: string
	resC: string
	inH?: string
	outH: string
	resH?: string
	res: string
}


export const initBANK: BANK = {
	id: '',
	date: '',
	class_: 'undef',
	account: undefined,
	reminder: initReminder,
	inM: '',
	outM: '',
	resM: '',
	inI: '',
	outI: '',
	resI: '',
	inC: '',
	outC: '',
	resC: '',
	inH: '',
	outH: '',
	resH: '',
	res: '',
}

export interface BANK_INPUT {
	id?: string // IDフィールド
	date?: string | undefined // 日付フィールド
	reminder?: REMINDER // 摘要フィールド
	account?: 'みずほ銀行' | '群銀個人' | '群銀コロナ' | '群銀法人' | undefined
	class_?: 'auto' | 'hand' | 'undef'
	inAmount?: string // 入金額フィールド
	outAmount?: string // 出金額フィールド
}

export type StateBank = {
	errors?: BANK_INPUT
	message?: string
}
