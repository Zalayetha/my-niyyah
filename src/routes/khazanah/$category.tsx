import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { KHAZANAH_CATEGORIES } from "#/lib/khazanah-data";

export const Route = createFileRoute("/khazanah/$category")({
	component: KhazanahCategoryPage,
});

function KhazanahCategoryPage() {
	const { category: categorySlug } = Route.useParams();
	const category =
		KHAZANAH_CATEGORIES.find((c) => c.slug === categorySlug) ??
		KHAZANAH_CATEGORIES[1]; // default Pekerjaan

	return (
		<div className="mx-auto min-h-screen max-w-md bg-background px-4 pb-12 text-foreground">
			{/* Top Bar */}
			<header className="pt-14">
				<Link
					to="/khazanah"
					className="inline-flex h-10 w-10 items-center justify-start"
					aria-label="Kembali ke khazanah"
				>
					<ArrowLeft className="size-7" strokeWidth={2.75} />
				</Link>
			</header>

			{/* Title */}
			<main className="mt-4 flex flex-col">
				<h1 className="font-bold text-3xl tracking-tight">{category.title}</h1>
				<p className="mt-1 text-muted-foreground text-sm">
					{category.subtitle}
				</p>

				{/* Verses List */}
				<div className="mt-6 flex flex-col gap-5">
					{category.verses.map((verse) => (
						<Link
							key={verse.id}
							to="/khazanah/verse/$id"
							params={{ id: verse.id }}
							className="flex flex-col items-center gap-4 rounded-3xl bg-[#062642] p-6 text-center transition-all hover:bg-[#082f52] active:scale-[0.99]"
						>
							{/* Arabic Text */}
							<p
								dir="rtl"
								className="w-full text-center font-['Amiri',serif] text-xl text-[#32d7c4] leading-loose"
							>
								{verse.arabic}
							</p>

							{/* Translation */}
							<p className="text-foreground/85 text-sm leading-relaxed">
								{verse.translation}
							</p>

							{/* Reference */}
							<span className="text-muted-foreground text-xs">
								(QS. {verse.reference})
							</span>
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}
