import { Link } from "@tanstack/react-router";

interface ChartData {
  day: string;
  value: number;
}

interface PrayerChartProps {
  data: ChartData[];
}

export function PrayerChart({ data }: PrayerChartProps) {
  return (
    <div className="mx-8 mt-4 p-4 bg-slate-800 rounded-3xl relative overflow-hidden">
      <div className="flex justify-between">
        {data.map((item) => (
          <div key={item.day} className="flex flex-col items-center gap-3">
            <div className="h-32 w-6 bg-slate-900 rounded-full flex items-end p-1">
              <div
                className="w-full rounded-full gradient-secondary"
                style={{
                  height: `${item.value}%`,
                }}
              />
            </div>
            <span className="text-white">{item.day}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="w-full bg-secondary font-semibold mt-4 rounded-full px-4 py-2 transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-secondary/50"
        onClick={() => {
          if ("vibrate" in navigator) {
            navigator.vibrate(10);
          }
          console.log("Lihat Statistik");
        }}
      >
        <Link to="/journal/complete-statistic">
          <div className="text-primary font-semibold text-md">
            Lihat Statistik
          </div>
        </Link>
      </button>
    </div>
  );
}
