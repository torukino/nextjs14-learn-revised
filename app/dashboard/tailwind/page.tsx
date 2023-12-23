import Outline from '@/app/dashboard/tailwind/Outline'
import Link from 'next/link'

export default function Page() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			<header className="bg-gray-800 text-gray-200">
				<div className="container mx-auto max-w-xl  p-3">{'header'}</div>
			</header>

			<div>
				<main className="flex-grow container mx-auto max-w-xs p-3">
					<Link href="https://newmonz.jp/lesson/laravel-practice/chapter-2" target="_blank" rel="noopener noreferrer">
						Laravel Practice Chapter 2
					</Link>
					<div>{'main'}</div>
					<div className="mt-5 p-3 rounded shadow bg-green-200">成功</div>
					<div className="mt-5 p-3 rounded shadow bg-red-200">失敗</div>

					<p className="mt-5">inline-flex</p>
					<div className="inline-flex items-center hover:bg-green-400 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest  active:bg-red-200 focus:outline-none focus:border-blue-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
						ボタン
					</div>
					<div className="ml-4 inline-flex flex-col">
						<div>Item 1</div>
						<div>Item 2</div>
						<div>Item 3</div>
					</div>
					<div className="mt-5">
						<p>form-control</p>
						<div className="inline-flex">
							<input type="text" className="form-control" placeholder="テキストフィールド" />
							<input type="date" className="form-control" defaultValue="{{ today()->toDateString() }}" />
							<select className="form-control">
								<option value="1">オプション１</option>
								<option value="2">オプション２</option>
								<option value="3">オプション３</option>
							</select>
						</div>
					</div>
					<div className="mt-5">
						<p>flexbox</p>
						<div className="flex">
							<div className="w-1/6 p-3 bg-blue-300">左１</div>
							<div className="w-3/6 p-3 bg-yellow-300">中３</div>
							<div className="w-2/6 p-3 bg-orange-600">右２</div>
						</div>
					</div>

					<div className="mt-5">
						<div className="grid grid-cols-5">
							{Array.from({ length: 10 }, (_, i) => i + 1).map(number => (
								<div className="p-2" key={number}>
									<div className="py-5 text-center cursor-pointer bg-indigo-400 hover:bg-indigo-300 text-white">{number}</div>
								</div>
							))}
						</div>
					</div>
				</main>
				<Outline />
			</div>

			<footer className="px-3 py-5 bg-gray-800 text-sm text-gray-400 text-center">&copy; Nozomi-memory clinic</footer>
		</div>
	)
}
