"use client";

import { useId, useMemo } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MilkDataPoint {
	day: number;
	value: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const W = 540;
const H = 130;
const PAD = 8;
const GRID_LINES = [0, 0.33, 0.66, 1] as const;

// ─── Dummy data — swap cu useQuery(milkHistoryQuery) când API-ul e gata ───────

function generateDummyPoints(count: number): MilkDataPoint[] {
	return Array.from({ length: count }, (_, i) => ({
		day: i + 1,
		value: 195 + Math.sin(i * 0.4) * 18 + Math.sin(i * 0.9) * 10 + i * 0.6,
	}));
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function scaleX(index: number, total: number): number {
	return PAD + (index / (total - 1)) * (W - PAD * 2);
}

function scaleY(value: number, min: number, max: number): number {
	return PAD + (1 - (value - min) / (max - min)) * (H - PAD * 2);
}

function deriveScale(values: number[]) {
	const dataMin = Math.min(...values);
	const dataMax = Math.max(...values);
	const headroom = (dataMax - dataMin) * 0.1;
	return { min: dataMin - headroom, max: dataMax + headroom };
}

function buildPaths(pts: number[], min: number, max: number) {
	const coords = pts.map((v, i) => ({
		x: scaleX(i, pts.length),
		y: scaleY(v, min, max),
	}));

	const line = coords
		.map(
			({ x, y }, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`,
		)
		.join(" ");

	const area = `${line} L ${(W - PAD).toFixed(1)} ${(H - PAD).toFixed(1)} L ${PAD} ${(H - PAD).toFixed(1)} Z`;

	return { line, area, last: coords[coords.length - 1] };
}

// ─── View — primește doar points[], nu știe de unde vin ───────────────────────

interface BigMilkChartViewProps {
	points: number[];
}

function BigMilkChartView({ points }: BigMilkChartViewProps) {
	const uid = useId();
	const gradientId = `bmg-${uid}`;
	const titleId = `${uid}-title`;

	const { line, area, last } = useMemo(() => {
		const { min, max } = deriveScale(points);
		return buildPaths(points, min, max);
	}, [points]);

	return (
		<svg
			viewBox={`0 0 ${W} ${H}`}
			className="big-milk"
			preserveAspectRatio="none"
			role="img"
			aria-labelledby={titleId}
		>
			<title id={titleId}>Grafic detaliat producție lapte</title>

			<defs>
				<linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#F4B840" stopOpacity={0.35} />
					<stop offset="100%" stopColor="#F4B840" stopOpacity={0} />
				</linearGradient>
			</defs>

			{GRID_LINES.map((p) => (
				<line
					key={p}
					x1={PAD}
					x2={W - PAD}
					y1={PAD + p * (H - PAD * 2)}
					y2={PAD + p * (H - PAD * 2)}
					stroke="rgba(110,160,112,0.08)"
				/>
			))}

			<path d={area} fill={`url(#${gradientId})`} />
			<path
				d={line}
				stroke="#F4B840"
				strokeWidth="2"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<g>
				<circle cx={last.x} cy={last.y} r="5" fill="#F4B840" opacity={0.25} />
				<circle cx={last.x} cy={last.y} r="3" fill="#FAD070" />
			</g>
		</svg>
	);
}

// ─── Container ────────────────────────────────────────────────────────────────
// TODO: când API-ul e gata, înlocuiește corpul cu:
//
//   const { data, isPending, isError } = useQuery(milkHistoryQuery);
//   if (isPending) return <BigMilkChartSkeleton />;
//   if (isError)   return <div className="big-milk-error">Eroare date.</div>;
//   return <BigMilkChartView points={data.map((d) => d.value)} />;

const DUMMY_DATA = generateDummyPoints(30);

export function BigMilkChart() {
	const points = useMemo(() => DUMMY_DATA.map((d) => d.value), []);
	return <BigMilkChartView points={points} />;
}
