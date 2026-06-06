import { BookOpen } from "lucide-react";

interface Ayah {
	text: string;
	source: string;
}

interface AyahOfTheDayProps {
	ayah: Ayah;
}

export function AyahOfTheDay({ ayah }: AyahOfTheDayProps) {
	return (
		<div className="mx-8 mt-4 p-4 bg-slate-800 rounded-3xl relative overflow-hidden">
			<div className="text-white font-sans">"{ayah.text}"</div>
			<div className="flex flex-row justify-between">
				<div className="flex flex-row mt-2 gap-2 items-center">
					<BookOpen className="text-white" fill="#ffffff" />
					<div className="text-white text-xs font-sans">{ayah.source}</div>
				</div>
				<BookOpen
					size={100}
					fill="var(--color-secondary)"
					className="text-secondary mt-5 me-4 absolute -bottom-12 -right-1"
				/>
			</div>
		</div>
	);
}
