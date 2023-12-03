'use client'
import { BANK } from '@/types/bank'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns'
import { lusitana } from '@/app/ui/fonts'

export default function LineChart({ data }: { data: BANK[] }) {
	// console.log('@@ data', data.length)

	let minute = 0
	const chartData = {
		labels: data.map(item => {
			const date = new Date(item.date)
			date.setMinutes(minute++)
			return date
		}),
		datasets: [
			{
				label: 'みずほ銀行残高',
				data: data.map(item => parseInt(item.resM.replaceAll(',', ''))),
				fill: false,
				backgroundColor: 'rgb(75, 192, 192)',
				borderColor: 'rgba(75, 192, 192, 0.2)',
			},
		],
	}

	const options = {
		scales: {
			xAxes: [
				{
					type: 'time',
					time: {
						unit: 'day',
					},
				},
			],
		},
	}

	return (
		<div className="w-full md:col-span-4">
			<h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>みずほ銀行取引</h2>
			<div className="rounded-xl bg-gray-50 p-4">
				<div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4">
					<Line data={chartData} options={options as any} />
				</div>
			</div>
		</div>
	)
}
