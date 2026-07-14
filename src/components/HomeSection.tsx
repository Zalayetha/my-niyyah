import { Link } from "@tanstack/react-router";
import { BookOpen, CloudSun, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface HomeSectionProps {
	user: {
		name: string;
		avatar: string;
	};
	prayer: {
		next: string;
		time: string;
	};
	ayah: {
		text: string;
		source: string;
	};
	chartData: Array<{ day: string; value: number }>;
}

const prayerIcons = [CloudSun, Sun, Sunrise, Sunset, Moon];

export function HomeSection({
	user,
	prayer,
	ayah,
	chartData,
}: HomeSectionProps) {
	return (
		<div className="flex-1 overflow-y-auto pb-24">
			{/* Avatar & Greeting */}
			<div className="flex flex-row p-4 items-center gap-4">
				<Avatar className="ring-2 ring-ring">
					<AvatarImage src={user.avatar} alt={user.name} />
					<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
				</Avatar>
				<div className="text-lg text-muted-foreground">Ahlan, {user.name}</div>
			</div>

			{/* Prayer Card */}
			<div className="mx-8 mt-4">
				<Card size="sm" className="border-0">
					<CardContent className="flex flex-col gap-4">
						<div className="text-sm text-center">Mendatang: {prayer.next}</div>
						<div className="text-6xl font-semibold text-center">
							{prayer.time}
						</div>

						<div className="flex flex-row justify-evenly">
							{prayerIcons.map((Icon, i) => (
								<div
									key={`${Icon}`}
									className={`flex h-12 w-12 items-center justify-center rounded-full ${
										i === 0
											? "bg-muted/50"
											: "bg-muted shadow-inner shadow-black/25"
									}`}
								>
									<Icon
										className={`h-6 w-6 ${
											i === 0 ? "text-primary" : "text-foreground"
										}`}
										fill={i === 0 ? "currentColor" : undefined}
									/>
								</div>
							))}
						</div>

						<Link to="/prayer-tracker">
							<Button
								type="button"
								className="w-full font-semibold mt-4 rounded-full px-4 py-2"
							>
								Catat Solat
							</Button>
						</Link>
					</CardContent>
				</Card>
			</div>

			{/* Ayah of the Day */}
			<div className="mx-8 mt-4">
				<Card
					size="sm"
					className="bg-card border-0 text-card-foreground relative overflow-hidden"
				>
					<CardContent className="flex flex-col gap-3">
						<div>"{ayah.text}"</div>
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row gap-2 items-center">
								<BookOpen className="text-card-foreground" />
								<div className="text-card-foreground text-xs">
									{ayah.source}
								</div>
							</div>
						</div>
						<BookOpen
							size={100}
							fill="currentColor"
							className="text-muted-foreground absolute -bottom-12 -right-1"
						/>
					</CardContent>
				</Card>
			</div>

			{/* Prayer Chart */}
			<div className="mx-8 mt-4">
				<Card
					size="sm"
					className="bg-card border-0 text-card-foreground overflow-hidden"
				>
					<CardContent className="flex flex-col gap-4">
						<div className="flex justify-between">
							{chartData.map((item) => (
								<div
									key={item.day}
									className="flex flex-col items-center gap-3"
								>
									<div className="h-32 w-6 bg-muted rounded-full flex items-end p-1">
										<div
											className="w-full rounded-full bg-primary"
											style={{ height: `${item.value}%` }}
										/>
									</div>
									<span className="text-card-foreground">{item.day}</span>
								</div>
							))}
						</div>
						<Link to="/journal/complete-statistic">
							<Button
								type="button"
								variant="secondary"
								className="w-full font-semibold mt-4 rounded-full px-4 py-2"
								onClick={() => {
									if ("vibrate" in navigator) {
										navigator.vibrate(10);
									}
									console.log("Lihat Statistik");
								}}
							>
								Lihat Statistik
							</Button>
						</Link>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
