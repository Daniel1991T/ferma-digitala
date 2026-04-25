type FeatureItem = {
    label: string;
    title: string;
    body: string;
    icon: (props: IconProps) => JSX.Element;
    color: string;
    demo: FeatureKind;
}

type FeatureKind =
	| "scan"
	| "vitals"
	| "calendar"
	| "milk"
	| "report"
	| "map";


// ─── Types ────────────────────────────────────────────────────────────────────

type AnimalStatus = "sanatos" | "gestant" | "bolnav" | "lactatie";

interface TimelineEvent {
	date: string;
	time: string;
	event: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	color: string;
}

interface Animal {
	id: string;
	nume: string;
	rasa: string;
	varsta: string;
	status: AnimalStatus;
	parcela: string;
	lapte: string;
	greutate: string;
	ultimulTratament: string;
	last: string;
	timeline: TimelineEvent[];
}