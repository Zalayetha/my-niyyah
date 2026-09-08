import { MenuCard } from "./MenuCard";

interface Menu {
	slug: string;
	title: string;
	subtitle?: string;
	content?: string;
	icon?: string;
	unit?: string;
	backgroundColor?: string;
	backgroundIcon?: string;
	className?: string;
	link?: string;
}

const menu: Menu[] = [
	{
		slug: "tepat-waktu",
		title: "Tepat Waktu",
		subtitle: "dalam 21 kali solat",
		icon: "fa7-solid:angles-up",
		content: "71",
		unit: "%",
	},
	{
		slug: "muhasabah",
		title: "Muhasabah",
		subtitle: "jumlah jurnal pekan ini",
		content: "5",
		unit: "x",
	},
	{
		slug: "khazanah",
		title: "Khazanah",
		subtitle: "dicantumkan di jurnal",
		content: "14",
		unit: "ayat",
	},
	{
		slug: "khusyu",
		title: "Khusyu'",
		subtitle: "dari 21 kali solat",
		icon: "fa7-solid:angles-up",
		content: "61",
		unit: "%",
	},
	{
		slug: "isi-jurnal",
		title: "Isi Jurnal",
		backgroundColor: "gradient-primary",
		backgroundIcon: "cib:livejournal",
		className:
			"transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2",
		link: "/journal/daily-journal",
	},
	{
		slug: "lihat-statistik",
		title: "Lihat Statistik",
		backgroundColor: "gradient-primary",
		backgroundIcon: "lets-icons:chart-fill",
		className:
			"transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2",
		link: "/journal/complete-statistic",
	},
];

export function JournalSection() {
	return (
		<div className="w-full pb-32">
			<div className="font-semibold text-2xl text-foreground px-8 pt-8">
				Muhasabah
			</div>
			<div className="text-sm text-muted-foreground mt-2 mx-8">
				Ringkasan ibadah pekan ini.
			</div>

			<div className="grid grid-cols-2 grid-rows-3 gap-4 px-8 py-8">
				{menu.map((item) => (
					<MenuCard
						key={item.slug}
						title={item.title}
						subtitle={item.subtitle}
						icon={item.icon}
						content={item.content}
						unit={item.unit}
						backgroundColor={item.backgroundColor}
						backgroundIcon={item.backgroundIcon}
						className={item.className}
						link={item.link}
					/>
				))}
			</div>
		</div>
	);
}
