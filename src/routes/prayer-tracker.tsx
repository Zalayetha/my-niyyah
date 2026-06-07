import { Icon } from "@iconify/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CloudSun, Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { SwipeToUnlock } from "#/components/SwipeToUnlock";

export const Route = createFileRoute("/prayer-tracker")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-primary">
      <div className="flex flex-row justify-between p-8">
        <Link to="/">
          <Icon
            icon={"formkit:arrowleft"}
            fontSize={14}
            className="text-white"
          />
        </Link>
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl text-secondary text-center font-sans">
            Zhuhur
          </div>
          <div className="text-sm text-secondary/50 text-center mt-2 font-sans">
            Telah Tiba
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-xl text-white text-center"></div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Icon
          icon={"material-symbols:house-rounded"}
          fontSize={250}
          className="text-secondary"
        />
      </div>
      <div className="flex flex-row gap-4 items-center justify-center mt-4">
        <div className="flex flex-col gap-1 rounded-4xl px-8 py-4 bg-sky-950 ">
          <div className="font-sans font-semibold text-2xl text-center text-white">
            11.52
          </div>
          <div className="font-sans font-medium text-md text-center text-white">
            WIB
          </div>
        </div>
        <div className="flex flex-col gap-1 rounded-4xl px-8 py-4 bg-sky-950 ">
          <div className="font-sans font-semibold text-2xl text-center text-secondary">
            11.39
          </div>
          <div className="font-sans font-medium text-md text-center text-secondary">
            WIB
          </div>
        </div>
      </div>

      {/*Prayer Information Status*/}
      <div className="flex flex-row justify-evenly mt-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <CloudSun
            className="h-6 w-6 text-secondary"
            fill="var(--color-secondary)"
          />
          <div className="text-secondary">Subuh</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Sun className="h-6 w-6 text-white" fill="#ffffff" />
          <div className="text-white">Zhuhur</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Sunrise className="h-6 w-6 text-white" fill="#ffffff" />
          <div className="text-white">Asar</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Sunset className="h-6 w-6 text-white" fill="#ffffff" />
          <div className="text-white">Maghrib</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Moon className="h-6 w-6 text-white" fill="#ffffff" />
          <div className="text-white">Isya</div>
        </div>
      </div>
      <SwipeToUnlock
        onUnlock={() => console.log("unlock")}
        className="m-8"
      ></SwipeToUnlock>
    </div>
  );
}
