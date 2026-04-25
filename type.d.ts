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