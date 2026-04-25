"use client";

import { useId, useMemo } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HerdSegment {
	label: string;
	value: number;
	color: string;
}

// ─── Data — swap cu useQuery când API-ul e gata ───────────────────────────────

const HERD_SEGMENTS: HerdSegment[] = [
	{ label: "Lactație", value: 142, color: "#8DBF91" },
	{ label: "Gestante", value: 58, color: "#F4B840" },
	{ label: "Juninci", value: 34, color: "#5BB8D4" },
	{ label: "Taurași", value: 13, color: "#E86B5A" },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const STROKE_WIDTH = 12;
const CENTER = 60;

// ─── Helpers ──────────────────────────────────────────────────────────────────

interface ComputedSegment extends HerdSegment {
	dashArray: string;
	dashOffset: number;
}

function computeSegments(segments: HerdSegment[]): ComputedSegment[] {
	const total = segments.reduce((sum, s) => sum + s.value, 0);
	let accumulated = 0;

	return segments.map((s) => {
		const len = (s.value / total) * CIRCUMFERENCE;
		const dashOffset = -accumulated;
		accumulated += len;

		return {
			...s,
			dashArray: `${len} ${CIRCUMFERENCE - len}`,
			dashOffset,
		};
	});
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface DonutArcProps {
	segment: ComputedSegment;
}

function DonutArc({ segment }: DonutArcProps) {
	return (
		<circle
			cx={CENTER}
			cy={CENTER}
			r={RADIUS}
			fill="none"
			stroke={segment.color}
			strokeWidth={STROKE_WIDTH}
			strokeDasharray={segment.dashArray}
			strokeDashoffset={segment.dashOffset}
			transform={`rotate(-90 ${CENTER} ${CENTER})`}
			strokeLinecap="butt"
		/>
	);
}

interface LegendRowProps {
	segment: HerdSegment;
}

function LegendRow({ segment }: LegendRowProps) {
	return (
		<div className="herd-legend-row">
			<i style={{ background: segment.color }} />
			<span>{segment.label}</span>
			<b>{segment.value}</b>
		</div>
	);
}

// ─── Component ────────────────────────────────────────────────────────────────

interface HerdDonutProps {
	segments?: HerdSegment[];
}

export function HerdDonut({ segments = HERD_SEGMENTS }: HerdDonutProps) {
	const uid = useId();
	const titleId = `${uid}-title`;

	const { computed, total } = useMemo(
		() => ({
			computed: computeSegments(segments),
			total: segments.reduce((sum, s) => sum + s.value, 0),
		}),
		[segments],
	);

	return (
		<div className="herd-donut">
			<svg viewBox="0 0 120 120" role="img" aria-labelledby={titleId}>
				<title id={titleId}>Distribuție turmă: {total} animale</title>

				{/* Track */}
				<circle
					cx={CENTER}
					cy={CENTER}
					r={RADIUS}
					fill="none"
					stroke="rgba(110,160,112,0.08)"
					strokeWidth={STROKE_WIDTH}
				/>

				{/* Arcs */}
				{computed.map((s) => (
					<DonutArc key={s.label} segment={s} />
				))}

				{/* Center label — derivat din date, nu hardcodat */}
				<text
					x={CENTER}
					y="58"
					textAnchor="middle"
					fontSize="22"
					fontWeight="700"
					fill="#F0F5F0"
				>
					{total}
				</text>
				<text
					x={CENTER}
					y="72"
					textAnchor="middle"
					fontSize="7"
					fill="#6A9B6E"
					letterSpacing="1"
				>
					ANIMALE
				</text>
			</svg>

			<div className="herd-legend">
				{segments.map((s) => (
					<LegendRow key={s.label} segment={s} />
				))}
			</div>
		</div>
	);
}
