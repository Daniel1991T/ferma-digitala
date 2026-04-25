// ─── Types ────────────────────────────────────────────────────────────────────

import Icons from "../Icons";

interface FeatureDemoProps {
	kind: FeatureKind;
	color?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CALENDAR_EVENTS = [
	{ day: "Mar", date: "14", label: "Monte · Floarea", accent: "#F4B840" },
	{ day: "Mie", date: "22", label: "Diagnostic gestație", accent: "#8DBF91" },
	{ day: "Lun", date: "03", label: "Vaccin — 34 animale", accent: "#5BB8D4" },
] as const;

const MILK_BARS = [22, 26, 24, 28, 30, 27, 31, 29, 33, 31, 34, 32] as const;

const HERD_DOTS: [number, number][] = [
	[55, 45],
	[58, 50],
	[52, 48],
	[60, 42],
];

const REPORT_ITEMS = [
	"247 animale verificate",
	"12 mișcări marcate",
	"3 tratamente raportate",
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function ScanDemo() {
	return (
		<div className="fd-scan">
			<div className="fd-scan-viewer">
				<div className="fd-corner tl" />
				<div className="fd-corner tr" />
				<div className="fd-corner bl" />
				<div className="fd-corner br" />
				<div className="fd-scanline" />
				<div className="fd-cow">
					<Icons.Arrow
						width="44"
						height="44"
						style={{ color: "rgba(141,191,145,0.35)" }}
					/>
				</div>
				<div className="fd-crotal">
					<div className="fd-crotal-tag">RO 2487</div>
					<div className="fd-crotal-tag-b">M-0941</div>
				</div>
			</div>
			<div className="fd-scan-meta">
				<span className="t-mono" style={{ color: "#8DBF91" }}>
					✓ 0.8s
				</span>
				<span className="t-mono">Floarea · 4a2l</span>
			</div>
		</div>
	);
}

function VitalsDemo() {
	return (
		<div className="fd-vitals">
			<div className="fd-ecg">
				<svg viewBox="0 0 240 60" preserveAspectRatio="none" role="img">
					<title>Grafic puls în timp real</title>
					<path
						d="M0 30 L40 30 L50 30 L55 10 L60 50 L65 20 L70 30 L120 30 L130 30 L135 10 L140 50 L145 20 L150 30 L240 30"
						stroke="#E86B5A"
						strokeWidth="1.6"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<div className="fd-vital-row">
				<span className="t-label">Temp</span>
				<span className="t-mono">38.4°C</span>
				<span className="t-label">Puls</span>
				<span className="t-mono">64 bpm</span>
				<span className="t-label">Pași</span>
				<span className="t-mono">4.2K</span>
			</div>
		</div>
	);
}

function CalendarDemo() {
	return (
		<div className="fd-cal">
			{CALENDAR_EVENTS.map((ev) => (
				<div key={ev.date + ev.day} className="fd-cal-row">
					<div
						className="fd-cal-date"
						style={{ borderColor: `${ev.accent}55` }}
					>
						<div style={{ fontSize: 9, opacity: 0.6 }}>{ev.day}</div>
						<div style={{ fontSize: 16, fontWeight: 700, color: ev.accent }}>
							{ev.date}
						</div>
					</div>
					<div style={{ flex: 1, fontSize: 12 }}>{ev.label}</div>
					<Icons.Arrow
						width="12"
						height="12"
						style={{ color: "#8DBF91", opacity: 0.5 }}
					/>
				</div>
			))}
		</div>
	);
}

function MilkDemo() {
	const last = MILK_BARS.length - 1;
	return (
		<div className="fd-milk">
			<div className="fd-milk-bars">
				{MILK_BARS.map((h, i) => (
					<div
						key={h}
						className="fd-milk-bar"
						style={{
							height: `${h * 2.2}%`,
							background: i === last ? "#5BB8D4" : "rgba(91,184,212,0.35)",
						}}
					/>
				))}
			</div>
			<div className="fd-vital-row" style={{ marginTop: 8 }}>
				<span className="t-mono" style={{ color: "#5BB8D4" }}>
					28.4 L
				</span>
				<span className="t-body" style={{ fontSize: 11 }}>
					azi · Floarea
				</span>
				<span
					className="t-mono"
					style={{ marginLeft: "auto", color: "#8DBF91" }}
				>
					▲ 8%
				</span>
			</div>
		</div>
	);
}

function ReportDemo() {
	return (
		<div className="fd-report">
			<div className="fd-rep-line">
				<b>Formular 2 — Mișcări luna Martie</b>
			</div>
			{REPORT_ITEMS.map((item) => (
				<div key={item} className="fd-rep-row">
					<Icons.Check width="12" height="12" style={{ color: "#8DBF91" }} />
					{item}
				</div>
			))}
			<div className="fd-rep-submit">
				Gata de trimis către ANSVSA
				<Icons.Arrow width="12" height="12" />
			</div>
		</div>
	);
}

function MapDemo() {
	return (
		<div className="fd-map">
			<svg viewBox="0 0 240 100" preserveAspectRatio="none" role="img">
				<title>Harta parcelelor și locația animalelor</title>
				<defs>
					<pattern
						id="fdp"
						width="10"
						height="10"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M0 10 L10 0"
							stroke="rgba(141,191,145,0.08)"
							strokeWidth="0.5"
						/>
					</pattern>
				</defs>
				<rect width="240" height="100" fill="url(#fdp)" />
				<path
					d="M10 20 L80 15 L120 40 L90 70 L20 65 Z"
					fill="rgba(141,191,145,0.18)"
					stroke="#8DBF91"
					strokeWidth="1"
					strokeDasharray="3 2"
				/>
				<path
					d="M130 25 L210 30 L220 75 L150 80 L125 55 Z"
					fill="rgba(250,208,112,0.18)"
					stroke="#FAD070"
					strokeWidth="1"
					strokeDasharray="3 2"
				/>
				<text
					x="50"
					y="45"
					fontSize="6"
					fill="#8DBF91"
					fontFamily="JetBrains Mono"
				>
					P1 · 4.2 ha
				</text>
				<text
					x="165"
					y="55"
					fontSize="6"
					fill="#FAD070"
					fontFamily="JetBrains Mono"
				>
					P2 · 6.8 ha
				</text>
				{HERD_DOTS.map(([x, y]) => (
					<circle key={x * y} cx={x} cy={y} r="1.5" fill="#F4B840" />
				))}
			</svg>
		</div>
	);
}

// ─── Registry ─────────────────────────────────────────────────────────────────

const DEMO_MAP: Record<FeatureKind, React.ComponentType> = {
	scan: ScanDemo,
	vitals: VitalsDemo,
	calendar: CalendarDemo,
	milk: MilkDemo,
	report: ReportDemo,
	map: MapDemo,
};

// ─── Main component ───────────────────────────────────────────────────────────

export function FeatureDemo({ kind }: FeatureDemoProps) {
	const Demo = DEMO_MAP[kind];
	return Demo ? <Demo /> : null;
}
