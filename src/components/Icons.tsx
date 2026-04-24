import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const Icons = {
	Logo: (props: IconProps) => (
		<svg viewBox="0 0 32 32" fill="none" {...props}>
			<title>FermaDigitală Logo</title>
			<path
				d="M16 3 L28 9 V22 L16 29 L4 22 V9 Z"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinejoin="round"
			/>
			<path
				d="M16 3 V16 L4 9"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinejoin="round"
				opacity={0.5}
			/>
			<path
				d="M16 16 L28 9"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinejoin="round"
				opacity={0.5}
			/>
			<circle cx="16" cy="16" r={2.5} fill="#F4B840" />
		</svg>
	),
	Arrow: (props: IconProps) => (
		<svg viewBox="0 0 16 16" fill="none" {...props}>
			<title>Arrow</title>
			<path
				d="M3 8 H13 M9 4 L13 8 L9 12"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	Cow: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Cow</title>
			<path
				d="M5 11 Q5 7 8 7 L16 7 Q19 7 19 11 L19 17 Q19 19 17 19 L7 19 Q5 19 5 17 Z"
				stroke="currentColor"
				strokeWidth={1.5}
			/>
			<path
				d="M8 7 L6 4 M16 7 L18 4"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
			<circle cx={9.5} cy={12} r={0.8} fill="currentColor" />
			<circle cx={14.5} cy={12} r={0.8} fill="currentColor" />
			<path
				d="M10 15 Q12 16.5 14 15"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
		</svg>
	),
	Heart: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Heart</title>
			<path
				d="M12 20 S4 15 4 10 A4 4 0 0 1 12 8 A4 4 0 0 1 20 10 C20 15 12 20 12 20Z"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinejoin="round"
			/>
			<path
				d="M8 12 L10 12 L11 10 L13 14 L14 12 L16 12"
				stroke="currentColor"
				strokeWidth={1.2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	Calendar: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Calendar</title>
			<rect
				x={4}
				y={5}
				width={16}
				height={15}
				rx={2}
				stroke="currentColor"
				strokeWidth={1.5}
			/>
			<path
				d="M4 10 H20 M9 3 V7 M15 3 V7"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
			<circle cx={8} cy={14} r={1} fill="currentColor" />
			<circle cx={12} cy={14} r={1} fill="currentColor" />
			<circle cx={16} cy={14} r={1} fill="currentColor" />
		</svg>
	),
	Milk: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Milk</title>
			<path
				d="M9 3 H15 V5 L17 9 V19 Q17 21 15 21 H9 Q7 21 7 19 V9 L9 5 Z"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinejoin="round"
			/>
			<path d="M7 13 H17" stroke="currentColor" strokeWidth={1.5} />
			<path
				d="M10 16 Q12 17 14 16"
				stroke="currentColor"
				strokeWidth={1.2}
				strokeLinecap="round"
			/>
		</svg>
	),
	Pill: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Pill</title>
			<rect
				x={3}
				y={8}
				width={18}
				height={8}
				rx={4}
				stroke="currentColor"
				strokeWidth={1.5}
			/>
			<path d="M12 8 V16" stroke="currentColor" strokeWidth={1.5} />
		</svg>
	),
	Chart: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Chart</title>
			<path
				d="M4 19 V5"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
			<path
				d="M4 19 H20"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
			<path
				d="M7 16 L10 12 L13 14 L17 8 L20 10"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle cx={17} cy={8} r={1.5} fill="currentColor" />
		</svg>
	),
	Scan: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Scan</title>
			<path
				d="M4 8 V5 A1 1 0 0 1 5 4 H8 M16 4 H19 A1 1 0 0 1 20 5 V8 M20 16 V19 A1 1 0 0 1 19 20 H16 M8 20 H5 A1 1 0 0 1 4 19 V16"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
			<path
				d="M4 12 H20"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeDasharray="2 2"
			/>
		</svg>
	),
	Shield: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Shield</title>
			<path
				d="M12 3 L20 6 V12 Q20 17 12 21 Q4 17 4 12 V6 Z"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinejoin="round"
			/>
			<path
				d="M9 12 L11 14 L15 10"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	Location: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Location</title>
			<path
				d="M12 21 Q5 14 5 10 A7 7 0 0 1 19 10 Q19 14 12 21Z"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinejoin="round"
			/>
			<circle cx={12} cy={10} r={2.5} stroke="currentColor" strokeWidth={1.5} />
		</svg>
	),
	Bell: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Bell</title>
			<path
				d="M6 17 H18 L16.5 15 V11 A4.5 4.5 0 0 0 7.5 11 V15 Z"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinejoin="round"
			/>
			<path
				d="M10 20 Q12 21.5 14 20"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
		</svg>
	),
	Search: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Search</title>
			<circle cx={11} cy={11} r={6} stroke="currentColor" strokeWidth={1.5} />
			<path
				d="M15.5 15.5 L20 20"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
		</svg>
	),
	Menu: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Menu</title>
			<path
				d="M4 7 H20 M4 12 H20 M4 17 H14"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
		</svg>
	),
	Check: (props: IconProps) => (
		<svg viewBox="0 0 16 16" fill="none" {...props}>
			<title>Check</title>
			<path
				d="M3 8 L7 12 L13 5"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),
	Plus: (props: IconProps) => (
		<svg viewBox="0 0 16 16" fill="none" {...props}>
			<title>Plus</title>
			<path
				d="M8 3 V13 M3 8 H13"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
		</svg>
	),
	Play: (props: IconProps) => (
		<svg viewBox="0 0 16 16" fill="none" {...props}>
			<title>Play</title>
			<path d="M4 3 L13 8 L4 13 Z" fill="currentColor" />
		</svg>
	),
	Sparkle: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Sparkle</title>
			<path
				d="M12 3 L13.5 10.5 L21 12 L13.5 13.5 L12 21 L10.5 13.5 L3 12 L10.5 10.5 Z"
				fill="currentColor"
			/>
		</svg>
	),
	Wifi: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Wifi</title>
			<path
				d="M4 9 Q12 3 20 9"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
			<path
				d="M7 13 Q12 9 17 13"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
			<path
				d="M10 17 Q12 15 14 17"
				stroke="currentColor"
				strokeWidth={1.5}
				strokeLinecap="round"
			/>
			<circle cx={12} cy={20} r={1} fill="currentColor" />
		</svg>
	),
	Quote: (props: IconProps) => (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<title>Quote</title>
			<path
				d="M6 18 Q3 18 3 14 V11 Q3 7 7 7 V9 Q5 9 5 11 V12 H7 V18 Z M16 18 Q13 18 13 14 V11 Q13 7 17 7 V9 Q15 9 15 11 V12 H17 V18 Z"
				fill="currentColor"
			/>
		</svg>
	),
};

export default Icons;
