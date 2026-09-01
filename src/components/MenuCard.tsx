import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";

interface MenuCardProps {
	title: string;
	subtitle?: string;
	icon?: string;
	content?: string;
	unit?: string;
	backgroundColor?: string;
	backgroundIcon?: string;
	className?: string;
	link?: string;
}
export const MenuCard = (props: MenuCardProps) => {
	return (
		<div
			className={twMerge(
				`rounded-xl p-4 flex flex-col ${props.backgroundColor ?? "bg-card"} relative overflow-hidden`,
				props.className,
			)}
		>
			<Link to={props.link ?? ""} className={props.link && "cursor-pointer"}>
				<div className="flex flex-row justify-between items-center">
					<div
						className={`${props.backgroundColor ? "text-primary-foreground" : "text-card-foreground"} font-medium text-sm`}
					>
						{props.title}
					</div>
					<Icon icon={props.icon ?? ""} className="text-muted-foreground" />
				</div>
				<div className="mt-6">
					{props.backgroundIcon && (
						<div>
							<Icon
								icon={props.backgroundIcon}
								className={`${props.backgroundColor ? "text-primary-foreground/15" : "text-muted/20"} me-4 absolute -bottom-8 -right-8`}
								fontSize={150}
							/>
						</div>
					)}
					<div className="text-card-foreground font-semibold text-6xl">
						{props.content} <span className="text-xl">{props.unit}</span>
					</div>
				</div>
				<div className="mt-4">
					<div className="font-light text-xs text-muted-foreground">
						{props.subtitle}
					</div>
				</div>
			</Link>
		</div>
	);
};
