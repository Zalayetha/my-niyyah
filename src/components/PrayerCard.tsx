import { Link } from "@tanstack/react-router";
import { CloudSun, Moon, Sun, Sunrise, Sunset } from "lucide-react";

interface Prayer {
  next: string;
  time: string;
}

interface PrayerCardProps {
  prayer: Prayer;
}

export function PrayerCard({ prayer }: PrayerCardProps) {
  return (
    <div className="p-4 rounded-3xl gradient-primary mx-8 mt-4">
      <div className="text-sm text-primary font-sans text-center">
        Mendatang: {prayer.next}
      </div>
      <div className="text-6xl font-semibold text-primary mt-4 text-center">
        {prayer.time}
      </div>

      <div className="flex flex-row justify-evenly my-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06223a]">
          <CloudSun
            className="h-6 w-6 text-secondary"
            fill="var(--color-secondary)"
          />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 shadow-inner shadow-black/25">
          <Sun className="h-6 w-6 text-white" fill="#ffffff" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 shadow-inner shadow-black/25">
          <Sunrise className="h-6 w-6 text-white" fill="#ffffff" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 shadow-inner shadow-black/25">
          <Sunset className="h-6 w-6 text-white" fill="#ffffff" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 shadow-inner shadow-black/25">
          <Moon className="h-6 w-6 text-white" fill="#ffffff" />
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-primary font-semibold mt-4 rounded-full px-4 py-2 transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-secondary/50"
        onClick={() => {
          if ("vibrate" in navigator) {
            navigator.vibrate(10);
          }
          console.log("Catat Solat");
        }}
      >
        <Link to={"/prayer-tracker"}>
          <div className="text-secondary font-semibold text-md">
            Catat Solat
          </div>
        </Link>
      </button>
    </div>
  );
}
