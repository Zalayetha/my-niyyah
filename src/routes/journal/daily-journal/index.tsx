import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Plus } from "lucide-react";
import { CategoryCard } from "#/components/journal/daily-journal/CategoryCard";

export const Route = createFileRoute("/journal/daily-journal/")({
	component: RouteComponent,
});

interface Category {
	id: number;
	title: string;
	count: number;
	link: string;
}

function RouteComponent() {
	const categories: Category[] = [
		{
			id: 1,
			title: "Pekerjaan",
			count: 11,
			link: "/journal/daily-journal/theme/1",
		},
		{
			id: 2,
			title: "Keluarga",
			count: 20,
			link: "/journal/daily-journal/theme/2",
		},
		{
			id: 3,
			title: "Kesehatan",
			count: 14,
			link: "/journal/daily-journal/theme/3",
		},
		{
			id: 4,
			title: "Teman",
			count: 11,
			link: "/journal/daily-journal/theme/4",
		},
	];

	return (
		<div className="relative mx-auto min-h-screen max-w-md bg-background pb-24">
			<div className="flex flex-row justify-between px-4 py-8">
				<Link to="/" search={{ section: undefined }}>
					<ArrowLeft size={4} className="text-foreground" />
				</Link>
			</div>
			<div className="font-semibold text-2xl text-foreground mx-4 mt-2">
				Jurnal Harian
			</div>
			<div className="text-sm text-muted-foreground mt-2 mx-4">
				Kumpulan jurnal milikmu
			</div>
			<div className="grid grid-cols-2 mx-4 mt-8 gap-4">
				{categories.map((category) => (
					<CategoryCard
						key={category.id}
						title={category.title}
						count={category.count}
						link={category.link}
					/>
				))}
			</div>

			<button
				type="button"
				className="absolute bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-ring"
				aria-label="Tambah jurnal"
				onClick={() => console.log("Create journal")}
			>
				<Plus size={7} />
			</button>
		</div>
	);
}
