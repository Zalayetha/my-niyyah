import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { JournalCard } from "#/components/journal/daily-journal/JournalCard";
export const Route = createFileRoute("/journal/daily-journal/theme/$id")({
	component: RouteComponent,
});
interface JournalData {
	id: number;
	title: string;
	content: string;
	journalDate: string;
	totalJournal: number;
	khusyuPercentage: string;
	onTimePercentage: string;
}
function RouteComponent() {
	const journals: JournalData[] = [
		{
			id: 1,
			title: "Menunda Solat Karena Pekerjaan",
			content:
				"Saya salah satu pengajar di sekolah dan selalu datang terlambat beberapa menit ketika mengajar di sesi siang. Alasan...",
			journalDate: "1/11/2025",
			khusyuPercentage: "80%",
			onTimePercentage: "60%",
			totalJournal: 5,
		},
		{
			id: 2,
			title: "Waktu luang",
			content:
				"Waktu luang di saat kerja bagi saya adalah sebuah nikmat yang sering luput saya syukuri. Karena beban pikiran saya berkurang dan...",
			journalDate: "2/11/2025",
			khusyuPercentage: "100%",
			onTimePercentage: "90%",
			totalJournal: 3,
		},
		{
			id: 3,
			title: "Gajian",
			content:
				"Tanggal gajian. Senyum merekah di seluruh wajah karyawan di kantor, termasuk saya. Motivasi beribadah menjalar di urat nadi...",
			journalDate: "3/11/2025",
			khusyuPercentage: "100%",
			onTimePercentage: "100%",
			totalJournal: 2,
		},
	];

	return (
		<div className="mx-auto min-h-screen max-w-md bg-background pb-24">
			<div className="flex flex-row justify-between px-4 py-8">
				<Link to="/journal/daily-journal">
					<ArrowLeft size={4} className="text-foreground" />
				</Link>
			</div>
			<div className="p-6 mx-4 mt-2 bg-primary text-primary-foreground rounded-xl font-medium text-xl">
				Pekerjaan
			</div>

			<div className="flex flex-col gap-2">
				{journals.map((journal) => (
					<JournalCard
						key={journal.id}
						title={journal.title}
						content={journal.content}
						journalDate={journal.journalDate}
						khusyuPercentage={journal.khusyuPercentage}
						onTimePercentage={journal.onTimePercentage}
						totalJournal={journal.totalJournal}
					/>
				))}
			</div>
		</div>
	);
}
