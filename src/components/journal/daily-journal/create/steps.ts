export const STEP_ORDER = [
	"onboarding-1",
	"journal-1-subuh",
	"journal-2-zhuhur",
	"journal-3-ashar",
	"journal-4-maghrib",
	"journal-5-isya",
	"onboarding-2",
	"journal-2-write",
	"journal-2-summary",
	"journal-2-complete",
] as const;

export type StepId = (typeof STEP_ORDER)[number];
export interface StepMeta {
	id: StepId;
	type: "onboarding" | "form";
	group: 1 | 2;
	title: string;
}
