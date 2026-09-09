import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	ArrowLeft,
	CloudSun,
	type LucideIcon,
	Moon,
	Sun,
	Sunrise,
	Sunset,
} from "lucide-react";
import { useState } from "react";
import { SwipeToPray } from "#/components/SwipeToPray";

export const Route = createFileRoute("/prayer-tracker")({
	component: RouteComponent,
});

interface Prayer {
	id: string;
	name: string;
	time: string;
	icon: LucideIcon;
}

const prayers: Prayer[] = [
	{ id: "subuh", name: "Subuh", time: "04.35", icon: CloudSun },
	{ id: "zhuhur", name: "Zhuhur", time: "11.39", icon: Sun },
	{ id: "asar", name: "Asar", time: "15.01", icon: Sunrise },
	{ id: "maghrib", name: "Maghrib", time: "17.48", icon: Sunset },
	{ id: "isya", name: "Isya", time: "19.02", icon: Moon },
];

function PrayerHouseProgress({ completedCount }: { completedCount: number }) {
	const isComplete = completedCount >= prayers.length;

	return (
		<div className="relative -mt-10 flex flex-col items-center justify-center">
			<motion.svg
				viewBox="0 0 240 220"
				className="h-80 w-80 overflow-visible"
				initial={false}
				aria-label={`Rumah ibadah terbangun ${completedCount} dari ${prayers.length} bagian`}
				role="img"
			>
				<defs>
					<linearGradient id="houseGradient" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#02bda7" />
						<stop offset="55%" stopColor="#32d7c4" />
						<stop offset="100%" stopColor="#a7fff5" />
					</linearGradient>
					<radialGradient id="houseGlow">
						<stop offset="0%" stopColor="#a7fff5" stopOpacity="0.7" />
						<stop offset="100%" stopColor="#32d7c4" stopOpacity="0" />
					</radialGradient>
					<filter id="softShine" x="-20%" y="-20%" width="140%" height="140%">
						<feGaussianBlur stdDeviation="1.5" />
					</filter>
				</defs>
				<g transform="translate(0 -34)">
					<motion.circle
						cx="120"
						cy="106"
						r="96"
						fill="url(#houseGlow)"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{
							opacity: isComplete
								? [0.28, 0.48, 0.28]
								: completedCount > 0
									? 0.14
									: 0,
							scale: isComplete ? [0.98, 1.08, 0.98] : 0.96,
						}}
						transition={{
							duration: isComplete ? 2.2 : 0.45,
							repeat: isComplete ? Infinity : 0,
							ease: "easeInOut",
						}}
					/>

					<motion.path
						d="M44 184 H196"
						stroke="#32d7c4"
						strokeWidth="10"
						strokeLinecap="round"
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{
							pathLength: completedCount >= 1 ? 1 : 0,
							opacity: completedCount >= 1 ? 1 : 0.25,
						}}
						transition={{ duration: 0.5 }}
					/>

					<motion.rect
						x="70"
						y="156"
						width="100"
						height="24"
						rx="8"
						fill="#101c31"
						stroke="#32d7c4"
						strokeWidth="3"
						initial={{ opacity: 0, y: 14 }}
						animate={{
							opacity: completedCount >= 1 ? 1 : 0,
							y: completedCount >= 1 ? 0 : 14,
						}}
						transition={{ duration: 0.45 }}
					/>

					<motion.rect
						x="78"
						y="96"
						width="84"
						height="66"
						rx="12"
						fill="#13233c"
						stroke="#32d7c4"
						strokeWidth="3"
						initial={{ opacity: 0, scaleY: 0 }}
						animate={{
							opacity: completedCount >= 2 ? 1 : 0,
							scaleY: completedCount >= 2 ? 1 : 0,
						}}
						style={{ originY: 1 }}
						transition={{ duration: 0.55, ease: "easeOut" }}
					/>

					<motion.path
						d="M58 105 L120 50 L182 105 Z"
						fill="url(#houseGradient)"
						initial={{ opacity: 0, y: -14, scale: 0.95 }}
						animate={{
							opacity: completedCount >= 3 ? 1 : 0,
							y: completedCount >= 3 ? 0 : -14,
							scale: completedCount >= 3 ? 1 : 0.95,
						}}
						transition={{ duration: 0.55, ease: "easeOut" }}
					/>

					<motion.rect
						x="105"
						y="126"
						width="30"
						height="36"
						rx="8"
						fill="#061d31"
						stroke="#32d7c4"
						strokeWidth="2"
						initial={{ opacity: 0, scale: 0.82 }}
						animate={{
							opacity: completedCount >= 4 ? 1 : 0,
							scale: completedCount >= 4 ? 1 : 0.82,
						}}
						transition={{ duration: 0.35 }}
					/>

					<motion.circle
						cx="120"
						cy="88"
						r="10"
						fill="#a7fff5"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{
							opacity: completedCount >= 4 ? 1 : 0,
							scale: completedCount >= 4 ? 1 : 0.5,
						}}
						transition={{ duration: 0.35, delay: 0.1 }}
					/>

					{isComplete && (
						<motion.g
							initial={{ x: -72, opacity: 0 }}
							animate={{ x: [-72, 74], opacity: [0, 0.9, 0] }}
							transition={{
								duration: 1.6,
								repeat: Infinity,
								repeatDelay: 1.2,
								ease: "easeInOut",
							}}
						>
							<motion.line
								x1="74"
								y1="170"
								x2="156"
								y2="58"
								stroke="#ffffff"
								strokeWidth="9"
								strokeLinecap="round"
								strokeOpacity="0.55"
								filter="url(#softShine)"
							/>
							<motion.line
								x1="78"
								y1="168"
								x2="160"
								y2="56"
								stroke="#a7fff5"
								strokeWidth="3"
								strokeLinecap="round"
								strokeOpacity="0.85"
							/>
						</motion.g>
					)}
				</g>
			</motion.svg>

			<div className="mt-1 text-center text-sm font-medium text-muted-foreground">
				{isComplete
					? "Rumah ibadah lengkap"
					: `${completedCount}/${prayers.length} solat selesai`}
			</div>
		</div>
	);
}

function RouteComponent() {
	const [completedPrayerIds, setCompletedPrayerIds] = useState<Set<string>>(
		() => new Set(["subuh"]),
	);
	const [currentPrayerIndex, setCurrentPrayerIndex] = useState(1);
	const [sliderKey, setSliderKey] = useState(0);

	const currentPrayer = prayers[currentPrayerIndex];
	const completedCount = completedPrayerIds.size;
	const isAllComplete = completedCount >= prayers.length;

	const handleUnlock = () => {
		setCompletedPrayerIds((prev) => {
			const next = new Set(prev);
			next.add(currentPrayer.id);
			return next;
		});

		setTimeout(() => {
			if (currentPrayerIndex < prayers.length - 1) {
				setCurrentPrayerIndex((prev) => prev + 1);
				setSliderKey((prev) => prev + 1);
			}
		}, 1200);
	};

	return (
		<div className="mx-auto min-h-screen max-w-md bg-background">
			<div className="flex flex-row justify-between p-8">
				<Link to="/" search={{ section: undefined }}>
					<ArrowLeft className="text-foreground size-6" />
				</Link>
				<div className="flex flex-col justify-center items-center">
					<div className="text-3xl text-foreground text-center">
						{currentPrayer.name}
					</div>
					<div className="text-sm text-muted-foreground text-center mt-2">
						{isAllComplete ? "Semua Solat Selesai" : "Telah Tiba"}
					</div>
				</div>
				<div className="flex justify-center items-center" />
			</div>
			<PrayerHouseProgress completedCount={completedCount} />
			<div className="flex flex-row gap-4 items-center justify-center mt-4">
				<div className="flex flex-col gap-1 rounded-4xl px-8 py-4 bg-card">
					<div className="font-semibold text-2xl text-center text-muted-foreground">
						11.52
					</div>
					<div className="font-medium text-md text-center text-muted-foreground">
						WIB
					</div>
				</div>
				<div className="flex flex-col gap-1 rounded-4xl px-8 py-4 bg-card ring-1 ring-ring">
					<div className="font-semibold text-2xl text-center text-foreground">
						{currentPrayer.time}
					</div>
					<div className="font-medium text-md text-center text-foreground">
						WIB
					</div>
				</div>
			</div>

			{/*Prayer Information Status*/}
			<div className="flex flex-row justify-evenly mt-8">
				{prayers.map(({ id, name, icon: Icon }) => {
					const isCompletedPrayer = completedPrayerIds.has(id);
					const isCurrentPrayer = id === currentPrayer.id && !isAllComplete;

					return (
						<div
							key={id}
							className="flex flex-col items-center justify-center gap-2"
						>
							<div
								className={`flex size-10 items-center justify-center rounded-full transition-colors ${
									isCompletedPrayer
										? "bg-primary text-primary-foreground"
										: isCurrentPrayer
											? "bg-card text-foreground ring-1 ring-ring"
											: "text-muted-foreground"
								}`}
							>
								<Icon className="h-5 w-5" fill="currentColor" />
							</div>
							<div
								className={`text-sm ${
									isCompletedPrayer || isCurrentPrayer
										? "text-foreground"
										: "text-muted-foreground"
								}`}
							>
								{name}
							</div>
						</div>
					);
				})}
			</div>
			{isAllComplete ? (
				<div className="mx-8 mt-8 rounded-4xl bg-card px-6 py-5 text-center font-semibold text-primary">
					Alhamdulillah, semua solat hari ini selesai.
				</div>
			) : (
				<SwipeToPray
					key={sliderKey}
					onUnlock={handleUnlock}
					className="m-8"
					text={`Geser selesai ${currentPrayer.name}`}
				/>
			)}
		</div>
	);
}
