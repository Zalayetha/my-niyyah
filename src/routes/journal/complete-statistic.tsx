import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CloudSun, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { DonutChart } from "#/components/DonutChart";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";

export const Route = createFileRoute("/journal/complete-statistic")({
	component: RouteComponent,
});

const DAYS = ["Jum", "Sab", "Min", "Sen", "Sel", "Rab", "Kam"] as const;

const PRAYERS = [
	{ icon: CloudSun, label: "Subuh" },
	{ icon: Sun, label: "Zhuhur" },
	{ icon: Sunrise, label: "Ashar" },
	{ icon: Sunset, label: "Maghrib" },
	{ icon: Moon, label: "Isya" },
] as const;

type Status = 0 | 1 | 2 | 3;

const STATUS_CLASS: Record<Status, string> = {
	0: "bg-primary",
	1: "bg-primary/60",
	2: "bg-primary/30",
	3: "bg-muted",
};

const STATUS_LABELS: { label: string; className: string }[] = [
	{ label: "Ditunaikan", className: "bg-primary" },
	{ label: "Terlambat", className: "bg-primary/60" },
	{ label: "Berat", className: "bg-primary/30" },
	{ label: "Tertinggal", className: "bg-muted" },
];

// 0 = on time, 1 = late, 2 = struggled, 3 = missed
const PRAYER_STATUS: Status[][] = [
	[0, 0, 2, 3, 3, 3, 3], // Subuh
	[0, 0, 3, 3, 3, 1, 3], // Zhuhur
	[3, 0, 3, 0, 3, 1, 3], // Ashar
	[3, 0, 0, 3, 1, 3, 2], // Maghrib
	[0, 0, 0, 0, 1, 3, 2], // Isya
];

function RouteComponent() {
	const weeklyPrayerData = [
		{ label: "Khusyu", value: 5, color: "var(--chart-1)" },
		{ label: "Biasa", value: 7, color: "var(--chart-2)" },
		{ label: "Berat", value: 6, color: "var(--chart-3)" },
		{ label: "Ngantuk", value: 7, color: "var(--chart-4)" },
	];

	return (
		<div className="mx-auto min-h-screen max-w-md bg-background pb-24">
			<div className="flex flex-row justify-between px-4 py-8">
				<Link to="/" search={{ section: undefined }}>
					<ArrowLeft className="text-foreground size-6" />
				</Link>
			</div>
			<div className="text-3xl text-foreground font-medium text-center">
				Statistik Lengkap
			</div>

			<Card className="mx-4 mt-8">
				<CardHeader>
					<CardTitle>Statistik Solat Harian</CardTitle>
				</CardHeader>
				<CardContent className="px-0">
					<table className="w-full border-collapse">
						<thead>
							<tr>
								<th className="w-14" />
								{DAYS.map((day) => (
									<th
										key={day}
										className="text-foreground font-medium text-xs pb-3 text-center"
									>
										{day}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{PRAYERS.map((prayer, rowIdx) => (
								<tr key={prayer.label}>
									<td className="pb-3 pr-2">
										<div className="flex flex-col items-center gap-1">
											<prayer.icon className="h-5 w-5 text-foreground" />
											<span className="text-foreground text-[10px] font-medium leading-tight text-center">
												{prayer.label}
											</span>
										</div>
									</td>
									{PRAYER_STATUS[rowIdx].map((status, colIdx) => (
										<td
											key={`${prayer.label}-${DAYS[colIdx]}`}
											className="pb-3 text-center"
										>
											<div
												className={`mx-auto h-8 w-8 rounded-xl ${STATUS_CLASS[status]}`}
											/>
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>

					<div className="flex flex-wrap items-center justify-center gap-4 pt-1">
						{STATUS_LABELS.map((s) => (
							<div key={s.label} className="flex items-center gap-1.5">
								<div className={`h-3 w-3 rounded-sm ${s.className}`} />
								<span className="text-[11px] text-muted-foreground">
									{s.label}
								</span>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<Card className="mx-4 mt-4">
				<CardHeader>
					<CardTitle>Kualitas Perasaanmu ketika Solat</CardTitle>
				</CardHeader>
				<CardContent>
					<DonutChart
						className="mx-auto"
						data={weeklyPrayerData}
						size={200}
						strokeWidth={24}
						showLegend={true}
					/>
				</CardContent>
			</Card>
		</div>
	);
}
