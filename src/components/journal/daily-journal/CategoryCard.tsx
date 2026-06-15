import { Icon } from "@iconify/react";
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
					"flex flex-col gradient-secondary rounded-xl p-3 gap-1 transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2",
					className,
				)}
			>
				<div className="text-primary font-medium text-md">{title}</div>
				<div className="flex flex-row bg-primary rounded-md px-4 py-2 gap-2 items-center w-fit">
					<Icon
						icon="streamline-logos:livejournal-logo-solid"
						className="text-secondary"
						fill="var(--color-secondary)"
					/>
					<div className="text-white text-sm">{count} Jurnal</div>
				</div>
			</div>
		</Link>
	);
}
