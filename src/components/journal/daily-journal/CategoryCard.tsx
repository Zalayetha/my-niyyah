import { Link } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";

interface CategoryCardProps {
	title: string;
	count: number;
	link: string;
	className?: string;
}

export function CategoryCard({
	title,
	count,
	link,
	className,
}: CategoryCardProps) {
	return (
		<Link to={link}>
			<div
				className={twMerge(
					"flex flex-col bg-primary text-primary-foreground rounded-xl p-3 gap-1 transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2",
					className,
				)}
			>
				<div className="text-primary-foreground font-medium text-md">
					{title}
				</div>
				<div className="flex flex-row bg-background rounded-md px-4 py-2 gap-2 items-center w-fit">
					<svg
						aria-label="card-icon"
						className="text-muted-foreground"
						fill="currentColor"
						width="20"
						height="20"
						viewBox="0 0 24 24"
					>
						<path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm2 3h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
					</svg>
					<div className="text-foreground text-sm">{count} Jurnal</div>
				</div>
			</div>
		</Link>
	);
}
