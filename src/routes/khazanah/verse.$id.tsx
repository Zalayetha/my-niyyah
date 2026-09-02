import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import { KHAZANAH_VERSES } from "#/lib/khazanah-data";

export const Route = createFileRoute("/khazanah/verse/$id")({
	component: VerseDetailPage,
});

function VerseDetailPage() {
	const navigate = useNavigate();
	const { id } = Route.useParams();
	const verse = KHAZANAH_VERSES.find((v) => v.id === id) ?? KHAZANAH_VERSES[0];
	const [selectedSegment, setSelectedSegment] = useState<number>(0);

	const segments = verse.segments ?? [verse.translation];

	return (
		<div className="mx-auto min-h-screen max-w-md bg-background px-4 pb-8 text-foreground">
			{/* Top Bar */}
			<header className="pt-14">
				<Link
					to="/khazanah/$category"
					params={{ category: verse.category }}
					className="inline-flex h-10 w-10 items-center justify-start"
					aria-label="Kembali"
				>
					<ArrowLeft className="size-7" strokeWidth={2.75} />
				</Link>
			</header>

			<main className="mt-2 flex flex-col items-center pb-6 text-center">
				{/* Surah Banner Pill */}
				<div className="gradient-primary flex w-48 flex-col items-center justify-center rounded-[36px] py-6 text-primary-foreground shadow-lg">
					<h1 className="font-bold text-3xl tracking-tight">
						{verse.surahName}
					</h1>
					<p className="mt-1 font-medium text-primary-foreground/80 text-sm">
						{verse.surahTranslation}
					</p>
				</div>

				{/* 3 Metric Cards */}
				<div className="mt-8 grid w-full grid-cols-3 gap-3">
					<div className="flex flex-col items-center justify-center rounded-3xl bg-[#062642] py-4">
						<span className="font-medium text-xs text-primary/80">Juz</span>
						<span className="mt-1 font-bold text-2xl text-primary">
							{verse.juz}
						</span>
					</div>

					<div className="flex flex-col items-center justify-center rounded-3xl bg-[#062642] py-4">
						<span className="font-medium text-xs text-primary/80">Surah</span>
						<span className="mt-1 font-bold text-2xl text-primary">
							{verse.surahNumber}
						</span>
					</div>

					<div className="flex flex-col items-center justify-center rounded-3xl bg-[#062642] py-4">
						<span className="font-medium text-xs text-primary/80">Ayat</span>
						<span className="mt-1 font-bold text-2xl text-primary">
							{verse.verseNumber}
						</span>
					</div>
				</div>

				{/* Arabic Text */}
				<p
					dir="rtl"
					className="mt-8 w-full text-center font-['Amiri',serif] text-2xl text-[#32d7c4] leading-loose"
				>
					{verse.arabic}
				</p>

				{/* Translation Segments */}
				<div className="mt-6 flex w-full flex-col gap-2.5">
					{segments.map((segment, index) => {
						const isSelected = selectedSegment === index;

						return (
							<button
								key={segment}
								type="button"
								onClick={() => setSelectedSegment(index)}
								className={`w-full rounded-2xl p-4 text-left font-normal text-sm leading-relaxed transition-all ${
									isSelected
										? "border border-primary/40 bg-[#062642] text-primary"
										: "border border-transparent bg-[#062642] text-foreground/80 hover:border-border/30"
								}`}
							>
								{segment}
							</button>
						);
					})}
				</div>

				{/* Bottom CTA Button */}
				<div className="mt-8 w-full">
					<Button
						type="button"
						className="h-13 w-full rounded-full border border-border/40 bg-[#062642] font-semibold text-foreground tracking-wide hover:bg-[#0a355c] active:scale-[0.99]"
						onClick={() => {
							navigate({
								to: "/journal/daily-journal/create/$step",
								params: { step: "journal-2-write" },
								search: {
									verseId: verse.id,
									segmentIndex: selectedSegment,
								},
							});
						}}
					>
						Cantumkan
					</Button>
				</div>
			</main>
		</div>
	);
}
