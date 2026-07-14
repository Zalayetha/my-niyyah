import { MenuCard } from "./MenuCard";

export function JournalSection() {
	return (
		<div className="flex-1 overflow-y-auto pb-24">
			<div className="font-semibold text-2xl text-foreground mx-8 mt-8">
				Muhasabah
			</div>
			<div className="text-sm text-muted-foreground mt-2 mx-8">
				Ringkasan ibadah pekan ini.
			</div>

			<div className="grid grid-cols-2 grid-rows-3 gap-4 px-8 py-8">
				<MenuCard
					title={"Tepat Waktu"}
					subtitle={"dalam 21 kali solat"}
					icon={"fa7-solid:angles-up"}
					content={"71"}
					unit={"%"}
				/>
				<MenuCard
					title={"Muhasabah"}
					subtitle={"jumlah jurnal pekan ini"}
					content={"5"}
					unit={"x"}
				/>
				<MenuCard
					title={"Khazanah"}
					subtitle={"dicantumkan di jurnal"}
					content={"14"}
					unit={"ayat"}
				/>
				<MenuCard
					title={"Khusyu'"}
					subtitle={"dari 21 kali solat"}
					icon={"fa7-solid:angles-up"}
					content={"61"}
					unit={"%"}
				/>
				<MenuCard
					title={"Isi Jurnal"}
					backgroundColor="bg-primary"
					backgroundIcon="cib:livejournal"
					className="transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2"
					link="/journal/daily-journal"
				/>
				<MenuCard
					title={"Lihat Statistik"}
					backgroundColor="bg-primary"
					backgroundIcon="lets-icons:chart-fill"
					className="transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2"
					link="/journal/complete-statistic"
				/>
			</div>
		</div>
	);
}
