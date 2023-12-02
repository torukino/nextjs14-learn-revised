import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image'

export default function NozomiLogo() {
	return (
		<div
			className={`${lusitana.className} flex flex-row items-center 
			leading-none text-2xl 
		text-green-700 w-64 pt-8`}
		>
			<Image src="/nozomi_cropped.png" width={`${50}`} height={`${50}`} alt="nozomi-memory-clinic-logo" priority />

			<div className="flex flex-col justify-center font-bold">
				<p className="text-[14px]">のぞみメモリークリニック</p>
			</div>
		</div>
	)
}
