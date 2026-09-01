import { useNavigate, useSearch } from "@tanstack/react-router";
import { BookOpen, House, User } from "lucide-react";
import { Route as IndexRoute } from "../routes/index";
import { Button } from "./ui/button";

type Section = "home" | "journal" | "account";

interface NavItem {
	id: Section;
	icon: React.ElementType;
}

const navItems: NavItem[] = [
	{ id: "home", icon: House },
	{ id: "journal", icon: BookOpen },
	{ id: "account", icon: User },
];

export function BottomNavbar() {
	const { section } = useSearch({ from: IndexRoute.id });
	const navigate = useNavigate();

	const currentSection = section ?? "home";

	return (
		<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg flex border border-border gap-6">
			{navItems.map((item) => {
				const Icon = item.icon;
				return (
					<Button
						key={item.id}
						type="button"
						variant="ghost"
						size="icon"
						className={`transition-transform duration-150 hover:scale-110 ${
							currentSection === item.id
								? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
								: "text-muted-foreground hover:text-foreground hover:bg-transparent"
						}`}
						onClick={() => navigate({ to: "/", search: { section: item.id } })}
					>
						<Icon className="size-8" />
					</Button>
				);
			})}
		</nav>
	);
}
