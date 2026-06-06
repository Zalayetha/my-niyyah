import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

interface SettingItemProps {
  icon: string;
  label: string;
  value?: string;
  onClick?: () => void;
  className?: string;
}

function SettingItem({
  icon,
  label,
  value,
  onClick,
  className,
}: SettingItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "flex flex-row items-center justify-between w-full p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors",
        className,
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-700">
          <Icon icon={icon} className="text-secondary" fontSize={20} />
        </div>
        <span className="text-white font-sans">{label}</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        {value && <span className="text-slate-400 text-sm">{value}</span>}
        <Icon icon="ph:caret-right" className="text-slate-500" fontSize={16} />
      </div>
    </button>
  );
}

interface AccountSectionProps {
  user: {
    name: string;
    avatar: string;
  };
  stats: {
    totalPrayers: number;
    streak: number;
    journalEntries: number;
  };
}

export function AccountSection({ user, stats }: AccountSectionProps) {
  return (
    <div className="flex-1 overflow-y-auto pb-24">
      {/*Header*/}
      <div className="px-8 pt-8">
        <div className="font-sans font-semibold text-2xl text-white">Akun</div>
        <div className="font-sans text-sm text-neutral-200 mt-1">
          Kelola akun dan pengaturanmu.
        </div>
      </div>

      {/*Profile Card*/}
      <div className="mx-8 mt-6 p-4 bg-slate-800 rounded-3xl flex flex-row items-center gap-4">
        <img
          src={user.avatar}
          alt=""
          className="size-16 rounded-full ring-2 ring-secondary outline outline-offset-2 outline-secondary/50"
        />
        <div className="flex flex-col">
          <div className="text-white font-sans font-semibold text-lg">
            {user.name}
          </div>
          <div className="text-slate-400 font-sans text-sm">fulan@jobs.com</div>
        </div>
        <button className="ml-auto" type="button">
          <Icon
            icon="ph:pencil-simple"
            className="text-secondary"
            fontSize={20}
          />
        </button>
      </div>

      {/*Stats Summary*/}
      <div className="mx-8 mt-6 p-4 bg-slate-800/50 rounded-3xl">
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-center">
            <div className="text-secondary font-sans font-semibold text-2xl">
              {stats.totalPrayers}
            </div>
            <div className="text-slate-400 font-sans text-xs mt-1">
              Total Solat
            </div>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="flex flex-col items-center">
            <div className="text-secondary font-sans font-semibold text-2xl">
              {stats.streak}
            </div>
            <div className="text-slate-400 font-sans text-xs mt-1">
              Hari Streak
            </div>
          </div>
          <div className="w-px bg-slate-700" />
          <div className="flex flex-col items-center">
            <div className="text-secondary font-sans font-semibold text-2xl">
              {stats.journalEntries}
            </div>
            <div className="text-slate-400 font-sans text-xs mt-1">Jurnal</div>
          </div>
        </div>
      </div>

      {/*Settings*/}
      <div className="mx-8 mt-6">
        <div className="text-slate-400 font-sans text-xs uppercase tracking-wider mb-3 px-1">
          Preferensi
        </div>
        <div className="flex flex-col gap-3">
          <SettingItem icon="ph:map-pin" label="Lokasi" value="Jakarta, ID" />
        </div>
      </div>

      {/*About*/}
      <div className="mx-8 mt-6">
        <div className="text-slate-400 font-sans text-xs uppercase tracking-wider mb-3 px-1">
          Lainnya
        </div>
        <div className="flex flex-col gap-3">
          <SettingItem icon="ph:info" label="Tentang Aplikasi" />
        </div>
      </div>

      {/*Logout Button*/}
      <div className="mx-8 mt-8">
        <button
          type="button"
          className="w-full p-4 bg-red-900/30 border border-red-800 rounded-2xl flex items-center justify-center gap-2 transition-all duration-150 active:scale-95 hover:bg-red-900/50"
          onClick={() => {
            if ("vibrate" in navigator) navigator.vibrate(10);
            console.log("Logout");
          }}
        >
          <Icon icon="ph:sign-out" className="text-red-400" fontSize={20} />
          <span className="text-red-400 font-sans font-medium">Keluar</span>
        </button>
      </div>

      {/*Version*/}
      <div className="text-center text-slate-600 font-sans text-xs mt-6">
        MyNiyyah v1.0.0
      </div>
    </div>
  );
}
