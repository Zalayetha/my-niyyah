import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AccountSection } from "../components/AccountSection";
import { BottomNavbar } from "../components/BottomNavbar";
import { HomeSection } from "../components/HomeSection";
import { JournalSection } from "../components/JournalSection";

export const Route = createFileRoute("/")({ component: Home });

type Section = "home" | "journal" | "account";

function Home() {
	const [currentSection, setCurrentSection] = useState<Section>("home");

	const user = {
		name: "Fulan",
		avatar:
			"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
	};

	const prayer = {
		next: "Zhuhur",
		time: "11 : 39",
	};

	const ayah = {
		text: "...Sesungguhnya shalat mencegah dari perbuatan buruk dan mungkar...",
		source: "Q.S Al-Ankabut: 45",
	};

	const chartData = [
		{ day: "Sab", value: 25 },
		{ day: "Min", value: 40 },
		{ day: "Sen", value: 70 },
		{ day: "Sel", value: 25 },
		{ day: "Rab", value: 70 },
		{ day: "Kam", value: 90 },
		{ day: "Jum", value: 90 },
	];

	const accountStats = {
		totalPrayers: 342,
		streak: 14,
		journalEntries: 28,
	};

	return (
		<div className="mx-auto min-h-screen max-w-md bg-primary">
			<section className={currentSection === "home" ? "" : "hidden"}>
				<HomeSection
					user={user}
					prayer={prayer}
					ayah={ayah}
					chartData={chartData}
				/>
			</section>

			<section className={currentSection === "journal" ? "" : "hidden"}>
				<JournalSection />
			</section>

			<section className={currentSection === "account" ? "" : "hidden"}>
				<AccountSection user={user} stats={accountStats} />
			</section>

			<BottomNavbar
				currentSection={currentSection}
				onChangeSection={setCurrentSection}
			/>
		</div>
	);
}
