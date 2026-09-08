import { Link } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { Chip } from "./Chip";

interface JournalCardProps {
	title: string;
	content: string;
	journalDate: string;
	totalJournal: number;
	khusyuPercentage: string;
	onTimePercentage: string;
	link?: string;
}

export const JournalCard = (props: JournalCardProps) => {
	const content = (
		<div>
			<div className="text-card-foreground text-lg font-semibold">
				{props.title}
			</div>

			<div className="text-card-foreground text-xs mt-2">{props.content}</div>

			<div className="flex flex-wrap gap-4 mt-4">
				<Chip icon="solar:calendar-bold" label={props.journalDate} />
				<Chip icon="mingcute:heartbeat-fill" label={props.khusyuPercentage} />
				<Chip icon="mingcute:watch-fill" label={props.onTimePercentage} />
				<Chip
					icon="tabler:book-filled"
					label={props.totalJournal}
					variant="highlighted"
				/>
			</div>
		</div>
	);

	return (
		<div className={twMerge(`rounded-xl p-4 flex flex-col bg-card mt-4 mx-4`)}>
			{props.link ? (
				<Link to={props.link} className="cursor-pointer">
					{content}
				</Link>
			) : (
				content
			)}
		</div>
	);
};
