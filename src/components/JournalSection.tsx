import { MenuCard } from "./MenuCard";

export function JournalSection() {
  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="font-sans font-semibold text-2xl text-white mx-8 mt-8">
        Muhasabah
      </div>
      <div className="font-sans text-sm text-neutral-200 mt-2 mx-8">
        Ringkasan ibadah pekan ini.
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 px-8 py-8">
        <MenuCard
          title={"Tepat Waktu"}
          subtitle={"dalam 21 kali solat"}
          icon={"fa7-solid:angles-up"}
          content={"71"}
          unit={"%"}
        />
        <MenuCard
          title={"Muhasabah"}
          subtitle={"jumlah jurnal pekan ini"}
          content={"5"}
          unit={"x"}
        />
        <MenuCard
          title={"Khazanah"}
          subtitle={"dicantumkan di jurnal"}
          content={"14"}
          unit={"ayat"}
        />
        <MenuCard
          title={"Khusyu'"}
          subtitle={"dari 21 kali solat"}
          icon={"fa7-solid:angles-up"}
          content={"61"}
          unit={"%"}
        />
        <MenuCard
          title={"Isi Jurnal"}
          backgroundColor="bg-secondary"
          backgroundIcon="cib:livejournal"
          className="transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2"
        />
        <MenuCard
          title={"Lihat Statistik"}
          backgroundColor="bg-secondary"
          backgroundIcon="lets-icons:chart-fill"
          className="transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2"
        />
      </div>
    </div>
  );
}
