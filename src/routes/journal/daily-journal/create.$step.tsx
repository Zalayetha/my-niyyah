import { Icon } from "@iconify/react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
	Activity,
	ArrowLeft,
	BookOpen,
	Calendar,
	Check,
	ChevronDown,
	CloudSun,
	Moon,
	Pencil,
	Plus,
	Sun,
	Sunrise,
	Sunset,
	Watch,
} from "lucide-react";
import { useState } from "react";
import type { StepId } from "#/components/journal/daily-journal/create/steps";
import { Button } from "#/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "#/components/ui/dialog";
import { Slider } from "#/components/ui/slider";

export const Route = createFileRoute("/journal/daily-journal/create/$step")({
	component: RouteComponent,
});

interface PrayerStep {
	id: StepId;
	name: string;
	adzanAt: string;
	completedAt: string;
	difference: string;
	punctuality: string;
	Icon: typeof CloudSun;
	iconClassName: string;
	nextStep: StepId;
}

const PRAYER_STEPS: PrayerStep[] = [
	{
		id: "journal-1-subuh",
		name: "Shubuh",
		adzanAt: "04.04",
		completedAt: "04.20",
		difference: "16 menit",
		punctuality: "Awal Waktu",
		Icon: CloudSun,
		iconClassName: "text-primary",
		nextStep: "journal-2-zhuhur",
	},
	{
		id: "journal-2-zhuhur",
		name: "Zhuhur",
		adzanAt: "11.52",
		completedAt: "12.04",
		difference: "12 menit",
		punctuality: "Awal Waktu",
		Icon: Sun,
		iconClassName: "text-lime-300",
		nextStep: "journal-3-ashar",
	},
	{
		id: "journal-3-ashar",
		name: "Ashar",
		adzanAt: "15.08",
		completedAt: "15.25",
		difference: "17 menit",
		punctuality: "Awal Waktu",
		Icon: Sunrise,
		iconClassName: "text-orange-300",
		nextStep: "journal-4-maghrib",
	},
	{
		id: "journal-4-maghrib",
		name: "Maghrib",
		adzanAt: "18.02",
		completedAt: "18.10",
		difference: "8 menit",
		punctuality: "Awal Waktu",
		Icon: Sunset,
		iconClassName: "text-teal-400",
		nextStep: "journal-5-isya",
	},
	{
		id: "journal-5-isya",
		name: "Isya",
		adzanAt: "19.13",
		completedAt: "19.30",
		difference: "17 menit",
		punctuality: "Awal Waktu",
		Icon: Moon,
		iconClassName: "text-cyan-600",
		nextStep: "onboarding-2",
	},
];
interface Category {
	id: number;
	title: string;
	count: number;
	link: string;
}

const CATEGORIES: Category[] = [
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

const PRAYER_SUMMARIES = [
	{
		id: "journal-1-subuh" as StepId,
		icon: CloudSun,
		label: "Khusyu’",
		colorClassName: "text-[#32d7c4]",
	},
	{
		id: "journal-2-zhuhur" as StepId,
		icon: Sun,
		label: "Tenang",
		colorClassName: "text-[#d9f99d]",
	},
	{
		id: "journal-3-ashar" as StepId,
		icon: Sunrise,
		label: "Berat",
		colorClassName: "text-[#fdba74]",
	},
	{
		id: "journal-4-maghrib" as StepId,
		icon: Sunset,
		label: "Tenang",
		colorClassName: "text-[#2dd4bf]",
	},
	{
		id: "journal-5-isya" as StepId,
		icon: Moon,
		label: "Ngantuk",
		colorClassName: "text-[#86efac]",
	},
];

const DEFAULT_FEELING = 2;

const FEELING_LABELS = ["Ngantuk", "Berat", "Tenang", "Khusyu’"] as const;

function RouteComponent() {
	const navigate = useNavigate();

	const { step } = Route.useParams();
	const currentPrayerStep = PRAYER_STEPS.find(
		(prayerStep) => prayerStep.id === step,
	);
	const currentStep = currentPrayerStep ?? PRAYER_STEPS[0];
	const [feelings, setFeelings] = useState<Partial<Record<StepId, number>>>({});
	const currentFeeling = feelings[currentStep.id] ?? DEFAULT_FEELING;
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [journalDate, setJournalDate] = useState("1/11/2025");
	const [isDateModalOpen, setIsDateModalOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null,
	);
	const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

	if (step === "journal-2-write") {
		return (
			<div className="mx-auto flex min-h-screen max-w-md flex-col bg-background px-4 pb-8 text-foreground">
				<header className="pt-14">
					<Link
						to="/journal/daily-journal/create/$step"
						params={{ step: "onboarding-2" }}
						className="inline-flex h-10 w-10 items-center justify-start"
						aria-label="Kembali ke pembuka isi jurnal"
					>
						<ArrowLeft className="size-7" strokeWidth={2.75} />
					</Link>
				</header>

				<main className="flex flex-1 flex-col">
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Isi Judul Jurnalmu"
						aria-label="Judul Jurnal"
						className="mt-6 w-full bg-transparent font-bold text-[32px] text-foreground tracking-tight placeholder:text-muted-foreground/40 focus:outline-none"
					/>

					<section
						className="mt-8 flex justify-between px-2"
						aria-label="Ringkasan sholat hari ini"
					>
						{PRAYER_SUMMARIES.map(
							({ id, icon: PrayerIcon, label, colorClassName }) => {
								const feelingIndex = feelings[id];
								const feelingLabel =
									feelingIndex !== undefined
										? FEELING_LABELS[feelingIndex]
										: label;

								return (
									<div key={id} className="flex flex-col items-center gap-1.5">
										<PrayerIcon
											className={`size-8 ${colorClassName}`}
											fill="currentColor"
											strokeWidth={1.75}
										/>
										<span
											className={`text-xs font-medium leading-none ${colorClassName}`}
										>
											{feelingLabel}
										</span>
									</div>
								);
							},
						)}
					</section>

					<section
						className="mt-7 flex flex-wrap items-center gap-3"
						aria-label="Informasi jurnal"
					>
						<Button
							type="button"
							variant="default"
							className="h-10 rounded-full px-4 font-semibold shadow-none"
							onClick={() => setIsDateModalOpen(true)}
						>
							<Calendar className="size-4" />
							<span>{journalDate}</span>
						</Button>

						<Button
							type="button"
							variant="outline"
							className="h-10 rounded-full border-border/40 bg-[#0f2137] px-4 font-medium text-foreground hover:bg-[#152a45]"
							onClick={() => setIsCategoryModalOpen(true)}
						>
							<span>
								{selectedCategory ? selectedCategory.title : "Kategori"}
							</span>
							<ChevronDown className="size-4 opacity-70" />
						</Button>

						<Button
							type="button"
							variant="outline"
							className="h-10 rounded-full border-border/40 bg-[#0f2137] px-4 font-medium text-foreground hover:bg-[#152a45]"
						>
							<BookOpen className="size-4" />
							<span>0 Ayat</span>
							<Plus className="size-4" />
						</Button>
					</section>

					<section className="mt-8 flex flex-1 flex-col">
						<p className="text-sm text-[#4ea8de] italic">
							Kenapa kau merasa berat hari ini?
						</p>
						<textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
							placeholder="Tuliskan renunganmu di sini..."
							aria-label="Isi Renungan Jurnal"
							rows={10}
							className="mt-3 w-full flex-1 resize-none bg-transparent text-foreground placeholder:text-muted-foreground/30 focus:outline-none"
						/>
					</section>

					<Button
						type="button"
						className="gradient-secondary mt-5 h-13 w-full font-semibold text-background tracking-wide hover:brightness-105"
						onClick={() => {
							navigate({
								to: "/journal/daily-journal/create/$step",
								params: { step: "journal-2-summary" },
							});
						}}
					>
						Lihat Hasil
					</Button>
				</main>

				<Dialog open={isDateModalOpen} onOpenChange={setIsDateModalOpen}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Pilih Tanggal Jurnal</DialogTitle>
							<DialogDescription>
								Pilih tanggal pelaksanaan ibadah dan renungan jurnalmu.
							</DialogDescription>
						</DialogHeader>
						<div className="py-3">
							<label
								htmlFor="journal-date-input"
								className="mb-2 block text-xs text-muted-foreground"
							>
								Tanggal (YYYY-MM-DD)
							</label>
							<input
								id="journal-date-input"
								type="date"
								defaultValue="2025-11-01"
								onChange={(e) => {
									const [year, month, day] = e.target.value.split("-");
									if (year && month && day) {
										setJournalDate(
											`${parseInt(day, 10)}/${parseInt(month, 10)}/${year}`,
										);
									}
								}}
								className="w-full rounded-2xl border border-border/50 bg-[#0a1527] px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
							/>
						</div>
						<DialogFooter>
							<Button
								type="button"
								className="gradient-secondary w-full font-semibold text-background hover:brightness-105"
								onClick={() => setIsDateModalOpen(false)}
							>
								Simpan Tanggal
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>

				<Dialog
					open={isCategoryModalOpen}
					onOpenChange={setIsCategoryModalOpen}
				>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Pilih Kategori</DialogTitle>
							<DialogDescription>
								Pilih kategori yang sesuai untuk renungan jurnalmu.
							</DialogDescription>
						</DialogHeader>
						<div className="flex flex-col gap-2 py-2">
							{CATEGORIES.map((category) => {
								const isSelected = selectedCategory?.id === category.id;
								return (
									<button
										key={category.id}
										type="button"
										onClick={() => {
											setSelectedCategory(category);
											setIsCategoryModalOpen(false);
										}}
										className={`flex w-full items-center justify-between rounded-2xl p-4 transition-all ${
											isSelected
												? "border border-primary bg-primary/20 text-primary"
												: "border border-border/40 bg-[#0a1527] text-foreground hover:border-primary/40 hover:bg-[#0e1d33]"
										}`}
									>
										<div className="flex flex-col text-left">
											<span className="font-semibold text-base">
												{category.title}
											</span>
											<span className="text-muted-foreground text-xs">
												{category.count} Jurnal terkait
											</span>
										</div>
										{isSelected && <Check className="size-5 text-primary" />}
									</button>
								);
							})}
						</div>
					</DialogContent>
				</Dialog>
			</div>
		);
	}

	if (step === "journal-2-complete") {
		return (
			<div className="mx-auto flex min-h-screen max-w-md flex-col bg-background px-4 pb-8 text-foreground">
				<header className="pt-14">
					<Link
						to="/journal/daily-journal/create/$step"
						params={{ step: "journal-2-summary" }}
						aria-label="Kembali ke isi jurnal"
					>
						<ArrowLeft className="size-7" strokeWidth={2.75} />
					</Link>
				</header>

				<main className="flex flex-1 flex-col items-center text-center">
					<section className="flex flex-1 flex-col items-center justify-center pb-8">
						<h1 className="mb-14 font-bold text-[40px] leading-tight tracking-[0.12em]">
							Muhasabah
							<br />
							Selesai
						</h1>

						<MuhasabahSealIcon className="size-52 text-primary" />

						<p className="mt-12 max-w-[340px] text-[16px] text-foreground/90 leading-snug">
							Kamu telah melakukan muhasabah hari ini, silahkan lihat statistik
							hasil refleksimu.
						</p>
					</section>

					<Button
						type="button"
						className="gradient-secondary h-13 w-full font-semibold text-background tracking-wide hover:brightness-105"
						onClick={() => {
							navigate({
								to: "/journal/complete-statistic",
							});
						}}
					>
						Lihat Statistik
					</Button>
				</main>
			</div>
		);
	}

	if (step === "journal-2-summary") {
		return (
			<div className="mx-auto flex min-h-screen max-w-md flex-col bg-background px-4 pb-8 text-foreground">
				<header className="pt-14">
					<Link
						to="/journal/daily-journal/create/$step"
						params={{ step: "journal-2-write" }}
						aria-label="Kembali ke muhasabah selesai"
					>
						<ArrowLeft className="size-7" strokeWidth={2.75} />
					</Link>
				</header>

				<main className="flex flex-1 flex-col pb-6">
					<h1 className="mt-6 font-semibold text-[32px] text-foreground tracking-tight">
						Rangkuman
					</h1>
					<p className="mt-1 text-muted-foreground text-sm">
						Rekap jurnalmu hari ini
					</p>

					<section
						className="mt-6 flex flex-col gap-4 rounded-3xl bg-[#062642] p-6 text-foreground"
						aria-label="Jejak Ibadah"
					>
						<div className="flex items-center gap-3">
							<Icon
								icon="hugeicons:prayer-rug-01"
								className="size-7 text-foreground"
								fontSize={28}
							/>
							<h2 className="font-bold text-xl tracking-wide">Jejak Ibadah</h2>
						</div>

						<div className="flex items-center justify-between pt-1">
							<div className="flex items-center gap-2.5 text-foreground/90">
								<Activity className="size-5 text-foreground" />
								<span className="font-medium text-[15px]">Kekhusyu’an</span>
							</div>
							<span className="font-bold text-lg text-primary">80%</span>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2.5 text-foreground/90">
								<Watch className="size-5 text-foreground" />
								<span className="font-medium text-[15px]">Tepat Waktu</span>
							</div>
							<span className="font-bold text-lg text-primary">60%</span>
						</div>
					</section>

					<section
						className="mt-4 flex flex-col gap-3 rounded-3xl bg-[#062642] p-6 text-foreground"
						aria-label="Isi Jurnal"
					>
						<div className="flex items-center gap-3">
							<div className="flex size-9 items-center justify-center rounded-full border-2 border-foreground/90">
								<Pencil className="size-4.5 -rotate-45 text-foreground/90" />
							</div>
							<h2 className="font-bold text-xl tracking-wide">Isi Jurnal</h2>
						</div>

						<h3 className="mt-1 font-bold text-base text-foreground leading-snug">
							{title.trim() ? title : "Menunda Shalat Karena Pekerjaan"}
						</h3>

						<p className="line-clamp-3 text-foreground/80 text-sm leading-relaxed">
							{content.trim()
								? content
								: "Aku mengajar di sekolah dan selalu datang terlambat beberapa menit ketika mengajar di sesi siang. Alasan..."}
						</p>

						<div className="mt-2 flex flex-wrap items-center gap-2">
							<span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 font-semibold text-primary-foreground text-xs">
								<Calendar className="size-3.5" />
								<span>{journalDate}</span>
							</span>

							<span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 font-semibold text-primary-foreground text-xs">
								<BookOpen className="size-3.5" />
								<span>5</span>
							</span>

							<span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 font-semibold text-primary-foreground text-xs">
								<ChevronDown className="size-3.5" />
								<span>
									{selectedCategory ? selectedCategory.title : "Pekerjaan"}
								</span>
							</span>
						</div>
					</section>

					<div className="mt-auto pt-8">
						<Button
							type="button"
							className="gradient-secondary h-13 w-full font-semibold text-background tracking-wide hover:brightness-105"
							onClick={() => {
								navigate({
									to: "/journal/daily-journal/create/$step",
									params: { step: "journal-2-complete" },
								});
							}}
						>
							Simpan Jurnal
						</Button>
					</div>
				</main>
			</div>
		);
	}
	if (step === "onboarding-2") {
		return (
			<div className="mx-auto flex min-h-screen max-w-md flex-col bg-background px-4 pb-8 text-foreground">
				<header className="pt-14">
					<Link
						to="/journal/daily-journal/create/$step"
						params={{ step: "journal-5-isya" }}
						className="inline-flex h-10 w-10 items-center justify-start"
						aria-label="Kembali ke jejak Isya"
					>
						<ArrowLeft className="size-7" strokeWidth={2.75} />
					</Link>
				</header>

				<main className="flex flex-1 flex-col items-center text-center">
					<section className="flex flex-1 flex-col items-center justify-center pb-8">
						<h1 className="mb-14 font-bold text-[40px] tracking-[0.12em]">
							Isi Jurnal
						</h1>

						<div
							className="flex h-[220px] w-[220px] items-center justify-center rounded-full border-[10px] border-primary"
							aria-hidden="true"
						>
							<Pencil
								className="size-[150px] text-primary"
								strokeWidth={2.75}
							/>
						</div>

						<p className="mt-12 max-w-[350px] text-[17px] text-foreground/90 leading-snug">
							Tulis bagaimana kau ingin merenungi diri hari ini.
						</p>
					</section>

					<Button
						type="button"
						className="gradient-secondary h-13 w-full font-semibold text-background tracking-wide hover:brightness-105"
						onClick={() => {
							navigate({
								to: "/journal/daily-journal/create/$step",
								params: { step: "journal-2-write" },
							});
						}}
					>
						Mulai Isi Jurnal
					</Button>
				</main>
			</div>
		);
	}
	return (
		<div className="mx-auto flex min-h-screen max-w-md flex-col bg-background px-4 pb-8 text-foreground">
			<header className="pt-14">
				<Link
					to="/journal/daily-journal/create"
					className="inline-flex h-10 w-10 items-center justify-start"
					aria-label="Kembali ke pembuka jejak ibadah"
				>
					<ArrowLeft className="size-7" strokeWidth={2.75} />
				</Link>
			</header>

			<main className="flex flex-1 flex-col">
				<h1 className="mt-6 text-center font-bold text-[40px] text-primary tracking-[0.14em]">
					{currentStep.name}
				</h1>

				<section className="mt-12 grid grid-cols-2 gap-4">
					<MetricCard label="Adzan pada" value={currentStep.adzanAt} />
					<MetricCard label="Selesai pada" value={currentStep.completedAt} />
					<MetricCard label="Selisih" value={currentStep.difference} />
					<MetricCard label="Ketepatan" value={currentStep.punctuality} />
				</section>

				<section className="mt-6 rounded-[30px] bg-[#062642] px-4 py-7">
					<h2 className="mx-auto max-w-[320px] text-center text-[17px] leading-snug">
						Bagaimana perasaanmu saat Sholat {currentStep.name}?
					</h2>
					<div className="mt-7">
						<div className="mb-3 flex justify-between text-[13px]">
							{FEELING_LABELS.map((label, index) => (
								<Button
									key={label}
									type="button"
									variant="ghost"
									size="xs"
									className={`-mx-2 min-h-8 rounded-full px-2 transition-colors hover:bg-transparent hover:text-primary ${
										currentFeeling === index
											? "font-semibold text-primary"
											: "text-foreground/80"
									}`}
									aria-pressed={currentFeeling === index}
									onClick={() => {
										setFeelings((currentFeelings) => ({
											...currentFeelings,
											[currentStep.id]: index,
										}));
									}}
								>
									{label}
								</Button>
							))}
						</div>
						<div className="px-7">
							<Slider
								min={0}
								max={3}
								step={1}
								value={[currentFeeling]}
								aria-label={`Perasaan saat Sholat ${currentStep.name}`}
								aria-valuetext={FEELING_LABELS[currentFeeling]}
								className="w-full"
								onValueChange={(value) => {
									const nextFeeling = Array.isArray(value)
										? (value[0] ?? 0)
										: value;
									setFeelings((currentFeelings) => ({
										...currentFeelings,
										[currentStep.id]: nextFeeling,
									}));
								}}
							/>
						</div>
					</div>
				</section>

				<PrayerProgress currentStepId={currentStep.id} />

				<Button
					type="button"
					className="gradient-secondary mt-5 h-13 w-full font-semibold text-background tracking-wide hover:brightness-105"
					onClick={() => {
						navigate({
							to: "/journal/daily-journal/create/$step",
							params: { step: currentStep.nextStep },
						});
					}}
				>
					Lanjut
				</Button>
			</main>
		</div>
	);
}

function MetricCard({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex h-[122px] flex-col items-center justify-center rounded-[28px] bg-[#062642]">
			<div className="text-[13px] text-foreground/85">{label}</div>
			<div className="mt-4 text-center font-bold text-[26px] leading-none whitespace-nowrap">
				{value}
			</div>
		</div>
	);
}

function PrayerProgress({ currentStepId }: { currentStepId: StepId }) {
	return (
		<nav
			className="mt-auto flex justify-between pt-16"
			aria-label="Tahapan sholat harian"
		>
			{PRAYER_STEPS.map(({ id, name, Icon, iconClassName }) => {
				const isActive = id === currentStepId;

				return (
					<div key={id} className="flex w-15 flex-col items-center gap-1.5">
						<Icon
							className={`size-8 ${iconClassName} ${isActive ? "" : "opacity-65"}`}
							fill="currentColor"
							strokeWidth={1.75}
						/>
						<span
							className={`text-xs leading-none ${isActive ? "text-primary" : iconClassName}`}
						>
							{name}
						</span>
						<span
							className={`h-2 w-2 rounded-full ${isActive ? "bg-primary" : "bg-transparent"}`}
						/>
					</div>
				);
			})}
		</nav>
	);
}
function MuhasabahSealIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			aria-hidden="true"
		>
			<path d="M18.99 19H19m-.01 0c-.622.617-1.75.464-2.542.464c-.972 0-1.44.19-2.133.883C13.725 20.937 12.934 22 12 22s-1.725-1.063-2.315-1.653c-.694-.693-1.162-.883-2.133-.883c-.791 0-1.92.154-2.543-.464c-.627-.622-.473-1.756-.473-2.552c0-1.007-.22-1.47-.937-2.186C2.533 13.196 2 12.662 2 12s.533-1.196 1.6-2.262c.64-.64.936-1.274.936-2.186c0-.791-.154-1.92.464-2.543c.622-.627 1.756-.473 2.552-.473c.912 0 1.546-.297 2.186-.937C10.804 2.533 11.338 2 12 2s1.196.533 2.262 1.6c.64.64 1.274.936 2.186.936c.791 0 1.92-.154 2.543.464c.627.622.473 1.756.473 2.552c0 1.007.22 1.47.937 2.186C21.467 10.804 22 11.338 22 12s-.533 1.196-1.6 2.262c-.716.717-.936 1.18-.936 2.186c0 .796.154 1.93-.473 2.552Z" />
			<path
				d="M9 12.893s1.2.652 1.8 1.607c0 0 1.8-3.75 4.2-5"
				strokeWidth="2.25"
			/>
		</svg>
	);
}
