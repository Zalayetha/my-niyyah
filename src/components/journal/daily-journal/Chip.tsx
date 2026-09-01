import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface ChipProps {
	icon: string;
	label: string | number;
	variant?: "default" | "highlighted";
	className?: string;
}

export function Chip({
	icon,
	label,
	variant = "default",
	className,
}: ChipProps) {
	const isHighlighted = variant === "highlighted";

	return (
		<div
			className={twMerge(
				"rounded-full p-3 flex flex-row gap-1 items-center",
				isHighlighted ? "bg-primary text-primary-foreground" : "bg-card",
				className,
			)}
		>
			<Icon
				icon={icon}
				className={
					isHighlighted ? "text-primary-foreground" : "text-card-foreground"
				}
				fontSize={20}
			/>
			<div
				className={twMerge(
					"text-xs",
					isHighlighted
						? "text-primary-foreground font-semibold"
						: "text-card-foreground font-light",
				)}
			>
				{label}
			</div>
		</div>
	);
}
