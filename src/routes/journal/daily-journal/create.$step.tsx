import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journal/daily-journal/create/$step")({
  component: RouteComponent,
});

function RouteComponent() {
  const { step } = Route.useParams();

  return <div>Hello "/journal/daily-journal/create/$step"!</div>;
}
