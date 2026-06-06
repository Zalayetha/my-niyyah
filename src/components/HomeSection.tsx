import { Avatar } from "./Avatar";
import { AyahOfTheDay } from "./AyahOfTheDay";
import { PrayerCard } from "./PrayerCard";
import { PrayerChart } from "./PrayerChart";

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

export function HomeSection({
	user,
	prayer,
	ayah,
	chartData,
}: HomeSectionProps) {
	return (
		<div className="flex-1 overflow-y-auto pb-24">
			<Avatar user={user} />
			<PrayerCard prayer={prayer} />
			<AyahOfTheDay ayah={ayah} />
			<PrayerChart data={chartData} />
		</div>
	);
}
