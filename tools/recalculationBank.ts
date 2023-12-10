import { BANK } from '@/types/bank'
const BUG = false
export const recalculationBank = (allBank: BANK[]): BANK[] => {
	allBank.sort((a, b) => {
		if (a.date > b.date) {
			return 1
		} else {
			return -1
		}
	})

	const newAllBank: BANK[] = []
	// date,status,reminder,inM,outM,resM,inI,outI,resI,inC,outC,resC,inH,outH,resC,res
	// 10/1,-,なし,,,"11,256,104",,,"2,628,703",,,"10,341,855",,,"3,142,470","11,208,364"

	let RESM: number = 11256104
	let RESI: number = 2628703
	let RESC: number = 10341855
	let RESH: number = 3142470
	let RES: number = 0

	for (let i = 0; i < allBank.length; i++) {
		const bank = { ...allBank[i] }
		BUG && console.log(`${bank.date} ${bank.reminder}`)
		if (bank.inM && bank.inM !== '') RESM += Number(bank.inM.replace(/,/g, ''))
		if (bank.outM && bank.outM !== '') RESM -= Number(bank.outM.replace(/,/g, ''))
		if (bank.inI && bank.inI !== '') RESI += Number(bank.inI.replace(/,/g, ''))
		if (bank.outI && bank.outI !== '') RESI -= Number(bank.outI.replace(/,/g, ''))
		if (bank.inC && bank.inC !== '') RESC += Number(bank.inC.replace(/,/g, ''))
		if (bank.outC && bank.outC !== '') RESC -= Number(bank.outC.replace(/,/g, ''))
		if (bank.inH && bank.inH !== '') RESH += Number(bank.inH.replace(/,/g, ''))
		if (bank.outH && bank.outH !== '') RESH -= Number(bank.outH.replace(/,/g, ''))

		RES = RESM + RESI + RESC + RESH

		bank.resM = RESM.toLocaleString()
		bank.resI = RESI.toLocaleString()
		bank.resC = RESC.toLocaleString()
		bank.resH = RESH.toLocaleString()
		bank.res = RES.toLocaleString()

		BUG &&
			console.log(`inM:${bank.inM} outM:${bank.outM} inI:${bank.inI} outI:${bank.outI} inC:${bank.inC} outC:${bank.outC} inH:${bank.inH} outH:${bank.outH}`)
		BUG && console.log(`resM:${bank.resM} resI:${bank.resI} resC:${bank.resC} resH:${bank.resH} res:${bank.res}`)

		newAllBank.push(bank)
	}

	return newAllBank
}
