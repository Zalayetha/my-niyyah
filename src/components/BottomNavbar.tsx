import { Icon } from "@iconify/react";

type Section = "home" | "journal" | "account";

interface NavItem {
  id: Section;
  icon: string;
}

const navItems: NavItem[] = [
  { id: "home", icon: "material-symbols:home-rounded" },
  { id: "journal", icon: "streamline-logos:livejournal-logo-solid" },
  { id: "account", icon: "ic:round-person" },
];

interface BottomNavbarProps {
  currentSection: Section;
  onChangeSection: (section: Section) => void;
}

export function BottomNavbar({
  currentSection,
  onChangeSection,
}: BottomNavbarProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-lg flex border border-white/20 gap-6">
      {navItems.map((item) => (
        <button
          type="button"
          key={item.id}
          className={
            currentSection === item.id ? "text-secondary" : "text-white"
          }
          onClick={() => onChangeSection(item.id)}
        >
          <Icon icon={item.icon} fontSize={32} />
        </button>
      ))}
    </nav>
  );
}
