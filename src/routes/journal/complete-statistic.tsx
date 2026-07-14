import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CloudSun, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { DonutChart } from "#/components/DonutChart";

export const Route = createFileRoute("/journal/complete-statistic")({
	component: RouteComponent,
});

function RouteComponent() {
	const weeklyPrayerData = [
		{ label: "Khusyu", value: 5, color: "#47E1CF" }, // Indigo
		{ label: "Biasa", value: 7, color: "#0B8F8C" }, // Emerald
		{ label: "Berat", value: 6, color: "#C33C54" }, // Amber
		{ label: "Ngantuk", value: 7, color: "#3C1642" }, // Red
		// Purple
	];

	return (
		<div className="mx-auto min-h-screen max-w-md bg-background pb-24">
			<div className="flex flex-row justify-between px-4 py-8">
				<Link to="/" search={{ section: undefined }}>
					<ArrowLeft className="text-foreground size-4" />
				</Link>
			</div>
			<div className="text-3xl text-foreground font-medium text-center">
				Statistik Lengkap
			</div>

			<div className="grid grid-cols-8 grid-rows-6 mt-8 mx-8 gap-x-6 gap-y-4">
				{/*Row 1 : Day Name*/}
				<div className="text-foreground font-medium text-xs"></div>
				<div className="text-foreground font-medium text-xs">Jum</div>
				<div className="text-foreground font-medium text-xs">Sab</div>
				<div className="text-foreground font-medium text-xs">Min</div>
				<div className="text-foreground font-medium text-xs">Sen</div>
				<div className="text-foreground font-medium text-xs">Sel</div>
				<div className="text-foreground font-medium text-xs">Rab</div>
				<div className="text-foreground font-medium text-xs">Kam</div>

				{/*Row 2 : Subuh Prayer*/}
				<div className="flex flex-col gap-2 items-center justify-center">
					<CloudSun className="h-6 w-6 text-foreground" />
					<div className="text-foreground text-xs font-medium">Subuh</div>
				</div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-orange-300 rounded-xl"></div>
				<div className="h-8 w-8 bg-lime-200 rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>

				{/*Row 3: Zhuhur Prayer*/}
				<div className="flex flex-col gap-2 items-center justify-center">
					<Sun className="h-6 w-6 text-foreground" />
					<div className="text-foreground text-xs font-medium">Zhuhur</div>
				</div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-lime-200 rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-orange-300 rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>

				{/*Row 3: Asr Prayer*/}
				<div className="flex flex-col gap-2 items-center justify-center">
					<Sunrise className="h-6 w-6 text-foreground" />
					<div className="text-foreground text-xs font-medium">Ashar</div>
				</div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-lime-200 rounded-xl"></div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-orange-300 rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>

				{/*Row 4: Magrhib Prayer*/}
				<div className="flex flex-col gap-2 items-center justify-center">
					<Sunset className="h-6 w-6 text-foreground" />
					<div className="text-foreground text-xs font-medium">Maghrib</div>
				</div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-orange-300 rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-lime-200 rounded-xl"></div>

				{/*Row 5: Isya Prayer*/}
				<div className="flex flex-col gap-2 items-center justify-center">
					<Moon className="h-6 w-6 text-foreground" />
					<div className="text-foreground text-xs font-medium">Maghrib</div>
				</div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-primary rounded-xl"></div>
				<div className="h-8 w-8 bg-orange-300 rounded-xl"></div>
				<div className="h-8 w-8 bg-cyan-900 rounded-xl"></div>
				<div className="h-8 w-8 bg-lime-200 rounded-xl"></div>
			</div>
			<div className="text-md text-foreground font-normal text-center mt-8">
				Kualitas perasaanmu ketika solat
			</div>

			<DonutChart
				className="mt-4 mx-2"
				data={weeklyPrayerData}
				size={200}
				strokeWidth={24}
				showLegend={true}
			/>
		</div>
	);
}
