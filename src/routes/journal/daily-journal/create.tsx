import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journal/daily-journal/create")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/journal/daily-journal/create"!</div>;
}
