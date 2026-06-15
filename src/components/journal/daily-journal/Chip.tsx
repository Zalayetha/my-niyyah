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
				"rounded-3xl p-3 flex flex-row gap-1 items-center",
				isHighlighted ? "gradient-primary" : "bg-primary",
				className,
			)}
		>
			<Icon
				icon={icon}
				className={isHighlighted ? "text-primary" : "text-white"}
				fontSize={20}
			/>
			<div
				className={twMerge(
					"text-xs",
					isHighlighted
						? "text-primary font-semibold"
						: "text-white font-light",
				)}
			>
				{label}
			</div>
		</div>
	);
}
