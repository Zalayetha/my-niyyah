import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CloudSun, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { useState } from "react";
import type { StepId } from "#/components/journal/daily-journal/create/steps";
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

const DEFAULT_FEELING = 2;

const FEELING_LABELS = ["Ngantuk", "Berat", "Tenang", "Khusyu’"] as const;

function RouteComponent() {
	const { step } = Route.useParams();
	const currentStep =
		PRAYER_STEPS.find((prayerStep) => prayerStep.id === step) ??
		PRAYER_STEPS[0];
	const [feelings, setFeelings] = useState<Partial<Record<StepId, number>>>({});
	const currentFeeling = feelings[currentStep.id] ?? DEFAULT_FEELING;

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
								<button
									key={label}
									type="button"
									className={`-mx-2 min-h-8 rounded-full px-2 transition-colors ${
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
								</button>
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

				<Link
					to="/journal/daily-journal/create/$step"
					params={{ step: currentStep.nextStep }}
					className="gradient-secondary mt-5 flex h-13 w-full items-center justify-center rounded-full font-semibold text-background tracking-wide"
				>
					Lanjut
				</Link>
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
