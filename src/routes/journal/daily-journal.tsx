import { Icon } from "@iconify/react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/journal/daily-journal")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-primary pb-24">
      <div className="flex flex-row justify-between px-4 py-8">
        <Link to="/">
          <Icon
            icon={"formkit:arrowleft"}
            fontSize={14}
            className="text-white"
          />
        </Link>
      </div>
      <div className="font-sans font-semibold text-2xl text-white mx-4 mt-2">
        Jurnal Harian
      </div>
      <div className="font-sans text-sm text-neutral-200 mt-2 mx-4">
        Kumpulan jurnal milikmu
      </div>
      <div className="grid grid-cols-2 mx-4 mt-8 gap-4">
        <div className="flex flex-col gradient-secondary rounded-xl p-2 gap-1 transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2">
          <div className="text-primary font-medium text-md">Pekerjaan</div>
          <div className="flex flex-row bg-primary rounded-md px-4 py-2 gap-2 items-center w-fit">
            <Icon
              icon={"streamline-logos:livejournal-logo-solid"}
              className="text-secondary"
              fill="var(--color-secondary)"
            />
            <div className="text-white text-sm">11 Jurnal</div>
          </div>
        </div>
        <div className="flex flex-col gradient-secondary rounded-xl p-2 gap-1 transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2">
          <div className="text-primary font-medium text-md">Keluarga</div>
          <div className="flex flex-row bg-primary rounded-md px-4 py-2 gap-2 items-center w-fit">
            <Icon
              icon={"streamline-logos:livejournal-logo-solid"}
              className="text-secondary"
              fill="var(--color-secondary)"
            />
            <div className="text-white text-sm">20 Jurnal</div>
          </div>
        </div>
        <div className="flex flex-col gradient-secondary rounded-xl p-2 gap-1 transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2">
          <div className="text-primary font-medium text-md">Kesehatan</div>
          <div className="flex flex-row bg-primary rounded-md px-4 py-2 gap-2 items-center w-fit">
            <Icon
              icon={"streamline-logos:livejournal-logo-solid"}
              className="text-secondary"
              fill="var(--color-secondary)"
            />
            <div className="text-white text-sm">14 Jurnal</div>
          </div>
        </div>
        <div className="flex flex-col gradient-secondary rounded-xl p-2 gap-1 transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2">
          <div className="text-primary font-medium text-md">Teman</div>
          <div className="flex flex-row bg-primary rounded-md px-4 py-2 gap-2 items-center w-fit">
            <Icon
              icon={"streamline-logos:livejournal-logo-solid"}
              className="text-secondary"
              fill="var(--color-secondary)"
            />
            <div className="text-white text-sm">11 Jurnal</div>
          </div>
        </div>
      </div>
    </div>
  );
}
