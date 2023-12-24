'use client'
import React, { useEffect } from 'react'
import * as Icons from '@mui/icons-material'
import { useSearchParams } from 'next/navigation'
import Pagination from '@/app/ui/Icon/pagination'

const IconMui = () => {
	const [selectedIcons, setSelectedIcons] = React.useState<string[]>([])
	const [num, setNum] = React.useState<number>(0)
	const [char, setChar] = React.useState<string>('')
	const [icons, setIcons] = React.useState<string[]>([])
	const [totalPages, setTotalPages] = React.useState<number>(0)

	const searchParams = useSearchParams()
	useEffect(() => {
		const LIMIT: number = 50
		const params = new URLSearchParams(searchParams)
		const query = params.get('query')
		const page = params.get('page')
		const currentPage: number = Number(page) || 1
		// console.log('@@ query', query)
		setChar(query || '')
		const icons_ = Object.keys(Icons)
		//　icons_の中でqueryとの部分一致するものを抽出
		const icons: string[] = icons_.filter(icon => icon.toLowerCase().includes(query?.toLowerCase() || ''))
		const num = icons.length
		setNum(num)
		const totalPages_ = Math.ceil(num / LIMIT)
		setTotalPages(totalPages_)

		let selectedIcons_: string[] = []
		if (icons.length > 0) {
			if (icons.length > 50) {
				const start = (currentPage - 1) * LIMIT
				const end = start + LIMIT
				selectedIcons_ = icons.slice(start, end)
			} else {
				selectedIcons_ = icons
			}
			setSelectedIcons(selectedIcons_)
		}

		if (icons.length > 0 && icons.length < 2) {
			setIcons(icons)
		} else {
			setIcons(icons.slice(0, 2))
		}
	}, [searchParams])

	return (
		<div className="ml-4">
			<div>
				<h1 className="my-4 text-4xl text-blue-700">@mui/icons-material</h1>
				<p>使い方(例)</p>
				<p className=" bg-yellow-100"> {`import { ${icons.join(',') || ''} } from '@mui/icons-material'`}</p>
				<p></p>
				<p className=" bg-yellow-200">{`<${icons[0]} />`}</p>
				<p>
					{' '}
					[{char}]を含むものが {num}個見つかりました
				</p>
			</div>
			<div className="flex flex-wrap gap-2">
				{selectedIcons.map((icon: string) => {
					const IconComponent = (Icons as any)[icon]
					return (
						<div key={icon} className="flex flex-col p-2 items-center border border-black rounded">
							<IconComponent className="w-8 h-8" />
							<p className="mt-2 text-sm">{icon}</p>
						</div>
					)
				})}
			</div>
			<div className="mt-4">
				<Pagination totalPages={totalPages} />
			</div>
		</div>
	)
}

export default IconMui
