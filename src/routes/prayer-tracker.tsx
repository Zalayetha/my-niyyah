import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	CloudSun,
	House,
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

function RouteComponent() {
	const [isCompleted, setIsCompleted] = useState(false);
	const [sliderKey, setSliderKey] = useState(0);

	const handleUnlock = () => {
		setIsCompleted(true);
		setTimeout(() => {
			setIsCompleted(false);
			setSliderKey((prev) => prev + 1);
		}, 3000);
	};

	return (
		<div className="mx-auto min-h-screen max-w-md bg-background">
			<div className="flex flex-row justify-between p-8">
				<Link to="/" search={{ section: undefined }}>
					<ArrowLeft className="text-foreground size-4" />
				</Link>
				<div className="flex flex-col justify-center items-center">
					<div className="text-3xl text-foreground text-center">Zhuhur</div>
					<div className="text-sm text-muted-foreground text-center mt-2">
						Telah Tiba
					</div>
				</div>
				<div className="flex justify-center items-center" />
			</div>
			<div className="flex items-center justify-center">
				<House
					size={250}
					className={`text-foreground transition-opacity duration-500 ${isCompleted ? "opacity-100" : "opacity-30"}`}
				/>
			</div>
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
						11.39
					</div>
					<div className="font-medium text-md text-center text-foreground">
						WIB
					</div>
				</div>
			</div>

			{/*Prayer Information Status*/}
			<div className="flex flex-row justify-evenly mt-8">
				<div className="flex flex-col items-center justify-center gap-2">
					<CloudSun className="h-6 w-6 text-foreground" />
					<div className="text-muted-foreground">Subuh</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<Sun className="h-6 w-6 text-foreground" fill="currentColor" />
					<div className="text-foreground">Zhuhur</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<Sunrise className="h-6 w-6 text-foreground" />
					<div className="text-foreground">Asar</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<Sunset className="h-6 w-6 text-foreground" />
					<div className="text-foreground">Maghrib</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<Moon className="h-6 w-6 text-foreground" />
					<div className="text-foreground">Isya</div>
				</div>
			</div>
			<SwipeToPray key={sliderKey} onUnlock={handleUnlock} className="m-8" />
		</div>
	);
}
