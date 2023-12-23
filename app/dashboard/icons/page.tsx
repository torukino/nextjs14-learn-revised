import IconMui from "@/app/ui/Icon/IconMui";
import Search from "@/app/ui/Icon/search";


export default async function Page() {
	return (
		<div>
			<Search placeholder="アイコンを検索..." />
			<IconMui />
		</div>
	)
}
