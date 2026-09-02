import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { KHAZANAH_CATEGORIES } from "#/lib/khazanah-data";

export const Route = createFileRoute("/khazanah/")({
	component: KhazanahIndexPage,
});

function KhazanahIndexPage() {
	return (
		<div className="mx-auto min-h-screen max-w-md bg-background px-4 pb-12 text-foreground">
			{/* Top Bar */}
			<header className="pt-14">
				<Link
					to="/journal/daily-journal/create/$step"
					params={{ step: "journal-2-write" }}
					className="inline-flex h-10 w-10 items-center justify-start"
					aria-label="Kembali ke isi jurnal"
				>
					<ArrowLeft className="size-7" strokeWidth={2.75} />
				</Link>
			</header>

			{/* Title */}
			<main className="mt-4 flex flex-col">
				<h1 className="font-bold text-3xl tracking-tight">Khazanah</h1>
				<p className="mt-1 text-muted-foreground text-sm">
					Perkuat muhasabah dengan ayat-ayat
				</p>

				{/* Category Cards */}
				<div className="mt-6 flex flex-col gap-5">
					{KHAZANAH_CATEGORIES.map((category) => (
						<section
							key={category.id}
							className="flex flex-col gap-3 rounded-3xl bg-[#062642] p-5"
						>
							<Link
								to="/khazanah/$category"
								params={{ category: category.slug }}
								className="group flex items-center justify-between"
							>
								<h2 className="font-bold text-lg text-foreground transition-colors group-hover:text-primary">
									{category.title}
								</h2>
							</Link>

							<div className="flex flex-col gap-2.5">
								{category.verses.length > 0 ? (
									category.verses.map((verse) => (
										<Link
											key={verse.id}
											to="/khazanah/verse/$id"
											params={{ id: verse.id }}
											className="flex items-center justify-between rounded-2xl bg-[#0a1527] px-4 py-3.5 transition-all hover:bg-[#101f35] active:scale-[0.99]"
										>
											<span className="font-medium text-foreground text-sm">
												{verse.title}
											</span>
											<span className="font-medium text-primary text-xs">
												{verse.reference}
											</span>
										</Link>
									))
								) : (
									<div className="flex flex-col gap-2.5">
										<div className="flex items-center justify-between rounded-2xl bg-[#0a1527] px-4 py-3.5 opacity-60">
											<span className="text-muted-foreground text-sm">...</span>
											<span className="text-muted-foreground text-xs">...</span>
										</div>
										<div className="flex items-center justify-between rounded-2xl bg-[#0a1527] px-4 py-3.5 opacity-60">
											<span className="text-muted-foreground text-sm">...</span>
											<span className="text-muted-foreground text-xs">...</span>
										</div>
									</div>
								)}
							</div>
						</section>
					))}
				</div>
			</main>
		</div>
	);
}
