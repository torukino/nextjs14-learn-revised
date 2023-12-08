import { BANK } from '@/types/bank'

export const recalculationBank = (allBank: BANK[]): BANK[] => {
	const newAllBank: BANK[] = []
	allBank.sort((a, b) => {
		if (a.date > b.date) {
			return 1
		} else {
			return -1
		}
	})

	//     date,status,reminder,inM,outM,resM,inI,outI,resI,inC,outC,resC,inH,outH,resC,res
	// 10/1,-,なし,,,"11,256,104",,,"2,628,703",,,"10,341,855",,,"3,142,470","11,208,364"

	let RESM: number = 11256104
	let RESI: number = 2628703
	let RESC: number = 10341855
	let RESH: number = 3142470
	let RES: number = 0

	for (let i = 0; i < allBank.length; i++) {
		const bank = { ...allBank[i] }
		if (bank.account === 'みずほ銀行') {
			// console.log('bank.account in', bank.account)
			if (bank.inM && bank.inM !== '') {
				RESM += Number(bank.inM.replace(/,/g, ''))
			}
			if (bank.outM && bank.outM !== '') {
				RESM -= Number(bank.outM.replace(/,/g, ''))
			}
		} else if (bank.account === '群銀個人') {
			if (bank.inI && bank.inI !== '') {
				RESI += Number(bank.inI.replace(/,/g, ''))
			}
			if (bank.outI && bank.outM !== '') {
				RESI -= Number(bank.outI.replace(/,/g, ''))
			}
		} else if (bank.account === '群銀コロナ') {
			if (bank.inC && bank.inC !== '') {
				RESC += Number(bank.inC.replace(/,/g, ''))
			}
			if (bank.outC && bank.outC !== '') {
				RESC -= Number(bank.outC.replace(/,/g, ''))
			}
		} else if (bank.account === '群銀法人') {
			if (bank.inH && bank.inH !== '') {
				RESH += Number(bank.inH.replace(/,/g, ''))
			}
			if (bank.outH && bank.outH !== '') {
				RESH -= Number(bank.outH.replace(/,/g, ''))
			}
		}
		RES = RESM + RESI + RESC + RESH

		bank.resM = RESM.toLocaleString()
		bank.resI = RESI.toLocaleString()
		bank.resC = RESC.toLocaleString()
		bank.resH = RESH.toLocaleString()
		bank.res = RES.toLocaleString()
		newAllBank.push(bank)
	}

	return newAllBank
}
