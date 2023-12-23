import React from 'react'
import {
	AcademicCapIcon,
	AdjustmentsHorizontalIcon,
	AdjustmentsVerticalIcon,
	ArchiveBoxArrowDownIcon,
	ArchiveBoxXMarkIcon,
	ArchiveBoxIcon,
	ArrowDownCircleIcon,
	ArrowDownLeftIcon,
	ArrowDownOnSquareStackIcon,
	ArrowDownOnSquareIcon,
	ArrowDownRightIcon,
	ArrowDownTrayIcon,
	ArrowDownIcon,
	ArrowLeftCircleIcon,
	ArrowLeftOnRectangleIcon,
	ArrowLeftIcon,
	ArrowLongDownIcon,
	ArrowLongLeftIcon,
	ArrowLongRightIcon,
	ArrowLongUpIcon,
	ArrowPathRoundedSquareIcon,
	ArrowPathIcon,
	ArrowRightCircleIcon,
	ArrowRightOnRectangleIcon,
	ArrowRightIcon,
	ArrowSmallDownIcon,
	ArrowSmallLeftIcon,
	ArrowSmallRightIcon,
	ArrowSmallUpIcon,
	ArrowTopRightOnSquareIcon,
	ArrowTrendingDownIcon,
	ArrowTrendingUpIcon,
	ArrowUpCircleIcon,
	ArrowUpLeftIcon,
	ArrowUpOnSquareStackIcon,
	ArrowUpOnSquareIcon,
	ArrowUpRightIcon,
	ArrowUpTrayIcon,
	ArrowUpIcon,
	ArrowUturnDownIcon,
	ArrowUturnLeftIcon,
	ArrowUturnRightIcon,
	ArrowUturnUpIcon,
	ArrowsPointingInIcon,
	ArrowsPointingOutIcon,
	ArrowsRightLeftIcon,
	ArrowsUpDownIcon,
	AtSymbolIcon,
	BackspaceIcon,
	BackwardIcon,
	BanknotesIcon,
	Bars2Icon,
	Bars3BottomLeftIcon,
	Bars3BottomRightIcon,
	Bars3CenterLeftIcon,
	Bars3Icon,
	Bars4Icon,
	BarsArrowDownIcon,
	BarsArrowUpIcon,
	Battery0Icon,
	Battery100Icon,
	Battery50Icon,
	BeakerIcon,
	BellAlertIcon,
	BellSlashIcon,
	BellSnoozeIcon,
	BellIcon,
	BoltSlashIcon,
	BoltIcon,
	BookOpenIcon,
	BookmarkSlashIcon,
	BookmarkSquareIcon,
	BookmarkIcon,
	BriefcaseIcon,
	BugAntIcon,
	BuildingLibraryIcon,
	BuildingOffice2Icon,
	BuildingOfficeIcon,
	BuildingStorefrontIcon,
	CakeIcon,
	CalculatorIcon,
	CalendarDaysIcon,
	CalendarIcon,
	CameraIcon,
	ChartBarSquareIcon,
	ChartBarIcon,
	ChartPieIcon,
	ChatBubbleBottomCenterTextIcon,
	ChatBubbleBottomCenterIcon,
	ChatBubbleLeftEllipsisIcon,
	ChatBubbleLeftRightIcon,
	ChatBubbleLeftIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	ChatBubbleOvalLeftIcon,
	CheckBadgeIcon,
	CheckCircleIcon,
	CheckIcon,
	ChevronDoubleDownIcon,
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	ChevronDoubleUpIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronUpDownIcon,
	ChevronUpIcon,
	CircleStackIcon,
	ClipboardDocumentCheckIcon,
	ClipboardDocumentListIcon,
	ClipboardDocumentIcon,
	ClipboardIcon,
	ClockIcon,
	CloudArrowDownIcon,
	CloudArrowUpIcon,
	CloudIcon,
	CodeBracketSquareIcon,
	CodeBracketIcon,
	Cog6ToothIcon,
	Cog8ToothIcon,
	CogIcon,
	CommandLineIcon,
	ComputerDesktopIcon,
	CpuChipIcon,
	CreditCardIcon,
	CubeTransparentIcon,
	CubeIcon,
	CurrencyBangladeshiIcon,
	CurrencyDollarIcon,
	CurrencyEuroIcon,
	CurrencyPoundIcon,
	CurrencyRupeeIcon,
	CurrencyYenIcon,
	CursorArrowRaysIcon,
	CursorArrowRippleIcon,
	DevicePhoneMobileIcon,
	DeviceTabletIcon,
	DocumentArrowDownIcon,
	DocumentArrowUpIcon,
	DocumentChartBarIcon,
	DocumentCheckIcon,
	DocumentDuplicateIcon,
	DocumentMagnifyingGlassIcon,
	DocumentMinusIcon,
	DocumentPlusIcon,
	DocumentTextIcon,
	DocumentIcon,
	EllipsisHorizontalCircleIcon,
	EllipsisHorizontalIcon,
	EllipsisVerticalIcon,
	EnvelopeOpenIcon,
	EnvelopeIcon,
	ExclamationCircleIcon,
	ExclamationTriangleIcon,
	EyeDropperIcon,
	EyeSlashIcon,
	EyeIcon,
	FaceFrownIcon,
	FaceSmileIcon,
	FilmIcon,
	FingerPrintIcon,
	FireIcon,
	FlagIcon,
	FolderArrowDownIcon,
	FolderMinusIcon,
	FolderOpenIcon,
	FolderPlusIcon,
	FolderIcon,
	ForwardIcon,
	FunnelIcon,
	GifIcon,
	GiftTopIcon,
	GiftIcon,
	GlobeAltIcon,
	GlobeAmericasIcon,
	GlobeAsiaAustraliaIcon,
	GlobeEuropeAfricaIcon,
	HandRaisedIcon,
	HandThumbDownIcon,
	HandThumbUpIcon,
	HashtagIcon,
	HeartIcon,
	HomeModernIcon,
	HomeIcon,
	IdentificationIcon,
	InboxArrowDownIcon,
	InboxStackIcon,
	InboxIcon,
	InformationCircleIcon,
	KeyIcon,
	LanguageIcon,
	LifebuoyIcon,
	LightBulbIcon,
	LinkIcon,
	ListBulletIcon,
	LockClosedIcon,
	LockOpenIcon,
	MagnifyingGlassCircleIcon,
	MagnifyingGlassMinusIcon,
	MagnifyingGlassPlusIcon,
	MagnifyingGlassIcon,
	MapPinIcon,
	MapIcon,
	MegaphoneIcon,
	MicrophoneIcon,
	MinusCircleIcon,
	MinusSmallIcon,
	MinusIcon,
	MoonIcon,
	MusicalNoteIcon,
	NewspaperIcon,
	NoSymbolIcon,
	PaintBrushIcon,
	PaperAirplaneIcon,
	PaperClipIcon,
	PauseCircleIcon,
	PauseIcon,
	PencilSquareIcon,
	PencilIcon,
	PhoneArrowDownLeftIcon,
	PhoneArrowUpRightIcon,
	PhoneXMarkIcon,
	PhoneIcon,
	PhotoIcon,
	PlayCircleIcon,
	PlayPauseIcon,
	PlayIcon,
	PlusCircleIcon,
	PlusSmallIcon,
	PlusIcon,
	PowerIcon,
	PresentationChartBarIcon,
	PresentationChartLineIcon,
	PrinterIcon,
	PuzzlePieceIcon,
	QrCodeIcon,
	QuestionMarkCircleIcon,
	QueueListIcon,
	RadioIcon,
	ReceiptPercentIcon,
	ReceiptRefundIcon,
	RectangleGroupIcon,
	RectangleStackIcon,
	RocketLaunchIcon,
	RssIcon,
	ScaleIcon,
	ScissorsIcon,
	ServerStackIcon,
	ServerIcon,
	ShareIcon,
	ShieldCheckIcon,
	ShieldExclamationIcon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	SignalSlashIcon,
	SignalIcon,
	SparklesIcon,
	SpeakerWaveIcon,
	SpeakerXMarkIcon,
	Square2StackIcon,
	Square3Stack3DIcon,
	Squares2X2Icon,
	SquaresPlusIcon,
	StarIcon,
	StopCircleIcon,
	StopIcon,
	SunIcon,
	SwatchIcon,
	TableCellsIcon,
	TagIcon,
	TicketIcon,
	TrashIcon,
	TrophyIcon,
	TruckIcon,
	TvIcon,
	UserCircleIcon,
	UserGroupIcon,
	UserMinusIcon,
	UserPlusIcon,
	UserIcon,
	UsersIcon,
	VariableIcon,
	VideoCameraSlashIcon,
	VideoCameraIcon,
	ViewColumnsIcon,
	ViewfinderCircleIcon,
	WalletIcon,
	WifiIcon,
	WindowIcon,
	WrenchScrewdriverIcon,
	WrenchIcon,
	XCircleIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'

const Outline = () => {
	return (
		<div>
			<div>
				<h1 className="mb-4 text-4xl text-blue-700">@heroicons/react/24/outline</h1>
			</div>
			<div className="flex flex-wrap gap-2">
				<div className="flex flex-col p-2 items-center border border-black rounded">
					<AcademicCapIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">AcademicCapIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<AdjustmentsHorizontalIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">AdjustmentsHorizontalIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<AdjustmentsVerticalIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">AdjustmentsVerticalIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArchiveBoxArrowDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArchiveBoxArrowDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArchiveBoxXMarkIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArchiveBoxXMarkIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArchiveBoxIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArchiveBoxIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowDownCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowDownCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowDownLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowDownLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowDownOnSquareStackIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowDownOnSquareStackIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowDownOnSquareIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowDownOnSquareIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowDownRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowDownRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowDownTrayIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowDownTrayIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowLeftCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowLeftCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowLeftOnRectangleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowLeftOnRectangleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowLongDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowLongDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowLongLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowLongLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowLongRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowLongRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowLongUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowLongUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowPathRoundedSquareIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowPathRoundedSquareIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowPathIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowPathIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowRightCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowRightCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowRightOnRectangleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowRightOnRectangleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowSmallDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowSmallDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowSmallLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowSmallLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowSmallRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowSmallRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowSmallUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowSmallUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowTopRightOnSquareIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowTopRightOnSquareIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowTrendingDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowTrendingDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowTrendingUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowTrendingUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUpCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUpCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUpLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUpLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUpOnSquareStackIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUpOnSquareStackIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUpOnSquareIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUpOnSquareIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUpRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUpRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUpTrayIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUpTrayIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUturnDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUturnDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUturnLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUturnLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUturnRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUturnRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowUturnUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowUturnUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowsPointingInIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowsPointingInIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowsPointingOutIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowsPointingOutIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowsRightLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowsRightLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ArrowsUpDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ArrowsUpDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<AtSymbolIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">AtSymbolIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BackspaceIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BackspaceIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BackwardIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BackwardIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BanknotesIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BanknotesIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Bars2Icon className="w-8 h-8" />
					<p className="mt-2 text-sm">Bars2Icon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Bars3BottomLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">Bars3BottomLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Bars3BottomRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">Bars3BottomRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Bars3CenterLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">Bars3CenterLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Bars3Icon className="w-8 h-8" />
					<p className="mt-2 text-sm">Bars3Icon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Bars4Icon className="w-8 h-8" />
					<p className="mt-2 text-sm">Bars4Icon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BarsArrowDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BarsArrowDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BarsArrowUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BarsArrowUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Battery0Icon className="w-8 h-8" />
					<p className="mt-2 text-sm">Battery0Icon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Battery100Icon className="w-8 h-8" />
					<p className="mt-2 text-sm">Battery100Icon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Battery50Icon className="w-8 h-8" />
					<p className="mt-2 text-sm">Battery50Icon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BeakerIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BeakerIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BellAlertIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BellAlertIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BellSlashIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BellSlashIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BellSnoozeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BellSnoozeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BellIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BellIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BoltSlashIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BoltSlashIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BoltIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BoltIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BookOpenIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BookOpenIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BookmarkSlashIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BookmarkSlashIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BookmarkSquareIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BookmarkSquareIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BookmarkIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BookmarkIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BriefcaseIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BriefcaseIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BugAntIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BugAntIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BuildingLibraryIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BuildingLibraryIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BuildingOffice2Icon className="w-8 h-8" />
					<p className="mt-2 text-sm">BuildingOffice2Icon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BuildingOfficeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BuildingOfficeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<BuildingStorefrontIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">BuildingStorefrontIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CakeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CakeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CalculatorIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CalculatorIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CalendarDaysIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CalendarDaysIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CalendarIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CalendarIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CameraIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CameraIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChartBarSquareIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChartBarSquareIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChartBarIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChartBarIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChartPieIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChartPieIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChatBubbleBottomCenterTextIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChatBubbleBottomCenterIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChatBubbleBottomCenterIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChatBubbleLeftEllipsisIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChatBubbleLeftEllipsisIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChatBubbleLeftRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChatBubbleLeftRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChatBubbleLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChatBubbleLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChatBubbleOvalLeftEllipsisIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChatBubbleOvalLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChatBubbleOvalLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CheckBadgeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CheckBadgeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CheckCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CheckCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CheckIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CheckIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChevronDoubleDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChevronDoubleDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChevronDoubleLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChevronDoubleLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChevronDoubleRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChevronDoubleRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChevronDoubleUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChevronDoubleUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChevronDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChevronDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChevronLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChevronLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChevronRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChevronRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChevronUpDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChevronUpDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ChevronUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ChevronUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CircleStackIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CircleStackIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ClipboardDocumentCheckIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ClipboardDocumentCheckIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ClipboardDocumentListIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ClipboardDocumentListIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ClipboardDocumentIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ClipboardDocumentIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ClipboardIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ClipboardIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ClockIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ClockIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CloudArrowDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CloudArrowDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CloudArrowUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CloudArrowUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CloudIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CloudIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CodeBracketSquareIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CodeBracketSquareIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CodeBracketIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CodeBracketIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Cog6ToothIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">Cog6ToothIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Cog8ToothIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">Cog8ToothIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CogIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CogIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CommandLineIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CommandLineIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ComputerDesktopIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ComputerDesktopIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CpuChipIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CpuChipIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CreditCardIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CreditCardIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CubeTransparentIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CubeTransparentIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CubeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CubeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CurrencyBangladeshiIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CurrencyBangladeshiIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CurrencyDollarIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CurrencyDollarIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CurrencyEuroIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CurrencyEuroIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CurrencyPoundIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CurrencyPoundIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CurrencyRupeeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CurrencyRupeeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CurrencyYenIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CurrencyYenIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CursorArrowRaysIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CursorArrowRaysIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<CursorArrowRippleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">CursorArrowRippleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DevicePhoneMobileIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DevicePhoneMobileIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DeviceTabletIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DeviceTabletIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentArrowDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentArrowDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentArrowUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentArrowUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentChartBarIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentChartBarIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentCheckIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentCheckIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentDuplicateIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentDuplicateIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentMagnifyingGlassIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentMagnifyingGlassIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentMinusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentMinusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentPlusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentPlusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentTextIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentTextIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<DocumentIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">DocumentIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<EllipsisHorizontalCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">EllipsisHorizontalCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<EllipsisHorizontalIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">EllipsisHorizontalIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<EllipsisVerticalIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">EllipsisVerticalIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<EnvelopeOpenIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">EnvelopeOpenIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<EnvelopeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">EnvelopeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ExclamationCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ExclamationCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ExclamationTriangleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ExclamationTriangleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<EyeDropperIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">EyeDropperIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<EyeSlashIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">EyeSlashIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<EyeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">EyeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FaceFrownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FaceFrownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FaceSmileIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FaceSmileIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FilmIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FilmIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FingerPrintIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FingerPrintIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FireIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FireIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FlagIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FlagIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FolderArrowDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FolderArrowDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FolderMinusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FolderMinusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FolderOpenIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FolderOpenIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FolderPlusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FolderPlusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FolderIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FolderIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ForwardIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ForwardIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<FunnelIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">FunnelIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<GifIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">GifIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<GiftTopIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">GiftTopIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<GiftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">GiftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<GlobeAltIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">GlobeAltIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<GlobeAmericasIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">GlobeAmericasIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<GlobeAsiaAustraliaIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">GlobeAsiaAustraliaIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<GlobeEuropeAfricaIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">GlobeEuropeAfricaIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<HandRaisedIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">HandRaisedIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<HandThumbDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">HandThumbDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<HandThumbUpIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">HandThumbUpIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<HashtagIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">HashtagIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<HeartIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">HeartIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<HomeModernIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">HomeModernIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<HomeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">HomeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<IdentificationIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">IdentificationIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<InboxArrowDownIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">InboxArrowDownIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<InboxStackIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">InboxStackIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<InboxIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">InboxIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<InformationCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">InformationCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<KeyIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">KeyIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<LanguageIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">LanguageIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<LifebuoyIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">LifebuoyIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<LightBulbIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">LightBulbIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<LinkIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">LinkIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ListBulletIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ListBulletIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<LockClosedIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">LockClosedIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<LockOpenIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">LockOpenIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MagnifyingGlassCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MagnifyingGlassCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MagnifyingGlassMinusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MagnifyingGlassMinusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MagnifyingGlassPlusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MagnifyingGlassPlusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MagnifyingGlassIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MagnifyingGlassIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MapPinIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MapPinIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MapIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MapIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MegaphoneIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MegaphoneIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MicrophoneIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MicrophoneIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MinusCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MinusCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MinusSmallIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MinusSmallIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MinusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MinusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MoonIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MoonIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<MusicalNoteIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">MusicalNoteIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<NewspaperIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">NewspaperIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<NoSymbolIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">NoSymbolIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PaintBrushIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PaintBrushIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PaperAirplaneIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PaperAirplaneIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PaperClipIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PaperClipIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PauseCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PauseCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PauseIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PauseIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PencilSquareIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PencilSquareIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PencilIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PencilIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PhoneArrowDownLeftIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PhoneArrowDownLeftIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PhoneArrowUpRightIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PhoneArrowUpRightIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PhoneXMarkIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PhoneXMarkIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PhoneIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PhoneIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PhotoIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PhotoIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PlayCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PlayCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PlayPauseIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PlayPauseIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PlayIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PlayIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PlusCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PlusCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PlusSmallIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PlusSmallIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PlusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PlusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PowerIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PowerIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PresentationChartBarIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PresentationChartBarIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PresentationChartLineIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PresentationChartLineIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PrinterIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PrinterIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<PuzzlePieceIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">PuzzlePieceIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<QrCodeIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">QrCodeIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<QuestionMarkCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">QuestionMarkCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<QueueListIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">QueueListIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<RadioIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">RadioIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ReceiptPercentIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ReceiptPercentIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ReceiptRefundIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ReceiptRefundIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<RectangleGroupIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">RectangleGroupIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<RectangleStackIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">RectangleStackIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<RocketLaunchIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">RocketLaunchIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<RssIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">RssIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ScaleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ScaleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ScissorsIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ScissorsIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ServerStackIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ServerStackIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ServerIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ServerIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ShareIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ShareIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ShieldCheckIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ShieldCheckIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ShieldExclamationIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ShieldExclamationIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ShoppingBagIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ShoppingBagIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ShoppingCartIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ShoppingCartIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<SignalSlashIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">SignalSlashIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<SignalIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">SignalIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<SparklesIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">SparklesIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<SpeakerWaveIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">SpeakerWaveIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<SpeakerXMarkIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">SpeakerXMarkIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Square2StackIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">Square2StackIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Square3Stack3DIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">Square3Stack3DIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<Squares2X2Icon className="w-8 h-8" />
					<p className="mt-2 text-sm">Squares2X2Icon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<SquaresPlusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">SquaresPlusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<StarIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">StarIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<StopCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">StopCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<StopIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">StopIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<SunIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">SunIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<SwatchIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">SwatchIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<TableCellsIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">TableCellsIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<TagIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">TagIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<TicketIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">TicketIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<TrashIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">TrashIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<TrophyIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">TrophyIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<TruckIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">TruckIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<TvIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">TvIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<UserCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">UserCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<UserGroupIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">UserGroupIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<UserMinusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">UserMinusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<UserPlusIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">UserPlusIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<UserIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">UserIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<UsersIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">UsersIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<VariableIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">VariableIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<VideoCameraSlashIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">VideoCameraSlashIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<VideoCameraIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">VideoCameraIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ViewColumnsIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ViewColumnsIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<ViewfinderCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">ViewfinderCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<WalletIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">WalletIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<WifiIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">WifiIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<WindowIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">WindowIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<WrenchScrewdriverIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">WrenchScrewdriverIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<WrenchIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">WrenchIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<XCircleIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">XCircleIcon</p>
				</div>

				<div className="flex flex-col p-2 items-center border border-black rounded">
					<XMarkIcon className="w-8 h-8" />
					<p className="mt-2 text-sm">XMarkIcon</p>
				</div>
			</div>
		</div>
	)
}

export default Outline
