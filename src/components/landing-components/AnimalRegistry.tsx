"use client";

import { useState } from "react";
import { ANIMALS_DUMMY_DATA } from "#/lib/constants/constants";
import Icons from "../Icons";

// ─── Data ─────────────────────────────────────────────────────────────────────

// TODO: import ANIMALS from your data source
const ANIMALS: Animal[] = ANIMALS_DUMMY_DATA;

const STATUS_LABEL: Record<AnimalStatus, string> = {
	sanatos: "Sănătoasă",
	gestant: "Gestantă · zi 187",
	bolnav: "Izolare veterinară",
	lactatie: "Lactație",
};

const STATUS_LABEL_SHORT: Record<AnimalStatus, string> = {
	sanatos: "Sănătoasă",
	gestant: "Gestantă",
	bolnav: "Izolat",
	lactatie: "Lactație",
};

const FILTER_CHIPS = ["Toate", "Sănătoase", "Alerte"] as const;

// ─── MiniSpark ────────────────────────────────────────────────────────────────

interface MiniSparkProps {
	color: string;
	seed?: number;
}

function MiniSpark({ color, seed = 3 }: MiniSparkProps) {
	const W = 220;
	const H = 50;
	const MAX = 60;

	const pts = Array.from(
		{ length: 30 },
		(_, i) => 30 + Math.sin(i * 0.4 + seed) * 12 + Math.cos(i * 0.9 + seed) * 6,
	);

	const path = pts
		.map((v, i) => {
			const x = (i / (pts.length - 1)) * W;
			const y = H - (v / MAX) * H;
			return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
		})
		.join(" ");

	return (
		<svg
			viewBox={`0 0 ${W} ${H}`}
			style={{ width: "100%", marginTop: 8, overflow: "visible" }}
			preserveAspectRatio="none"
			aria-hidden
		>
			<title>Grafic activitate animal</title>
			<path d={`${path} L ${W} ${H} L 0 ${H} Z`} fill={color} opacity="0.15" />
			<path d={path} stroke={color} strokeWidth="1.5" fill="none" />
		</svg>
	);
}

// ─── RegistryItem ─────────────────────────────────────────────────────────────

interface RegistryItemProps {
	animal: Animal;
	selected: boolean;
	onSelect: () => void;
}

function RegistryItem({ animal, selected, onSelect }: RegistryItemProps) {
	return (
		<button
			type="button"
			className={`registry-item ${selected ? "on" : ""}`}
			onClick={onSelect}
		>
			<div className="reg-avatar">
				<Icons.Cow
					width="18"
					height="18"
					style={{ color: selected ? "#FAD070" : "#8DBF91" }}
				/>
			</div>
			<div className="reg-main">
				<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
					<b style={{ fontSize: 13 }}>{animal.nume}</b>
					<span
						className={`badge badge-${animal.status}`}
						style={{ fontSize: 9, padding: "2px 6px" }}
					>
						<i className="badge-dot" style={{ width: 4, height: 4 }} />
						{STATUS_LABEL_SHORT[animal.status]}
					</span>
				</div>
				<div className="t-mono" style={{ fontSize: 10, marginTop: 2 }}>
					{animal.id}
				</div>
				<div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 3 }}>
					{animal.rasa} · {animal.varsta}
				</div>
			</div>
			<div className="reg-time">{animal.last}</div>
		</button>
	);
}

// ─── AnimalDetail ─────────────────────────────────────────────────────────────

interface AnimalDetailProps {
	animal: Animal;
}

function AnimalDetail({ animal }: AnimalDetailProps) {
	return (
		<div className="registry-detail glass">
			{/* Hero */}
			<div className="rd-hero">
				<div className="rd-portrait">
					<Icons.Cow width="52" height="52" style={{ color: "#8DBF91" }} />
					<div className="rd-tag">
						<div className="rd-tag-top">RO</div>
						<div className="rd-tag-mid">2487</div>
						<div className="rd-tag-bot">M-{animal.id.slice(-4)}</div>
					</div>
				</div>
				<div style={{ flex: 1 }}>
					<div className="t-label">{animal.rasa}</div>
					<div
						style={{
							fontSize: 34,
							fontWeight: 800,
							letterSpacing: "-0.02em",
							marginTop: 2,
						}}
					>
						{animal.nume}
					</div>
					<div className="t-mono" style={{ marginTop: 6 }}>
						{animal.id}
					</div>
					<div
						style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}
					>
						<span className={`badge badge-${animal.status}`}>
							<i className="badge-dot" />
							{STATUS_LABEL[animal.status]}
						</span>
						<span className="badge badge-lactatie">
							<Icons.Location width="10" height="10" /> {animal.parcela}
						</span>
					</div>
				</div>
			</div>

			{/* Stats grid */}
			<div className="rd-grid">
				<div className="rd-stat">
					<div className="t-label">Vârstă</div>
					<div className="rd-val">{animal.varsta}</div>
				</div>
				<div className="rd-stat">
					<div className="t-label">Greutate</div>
					<div className="rd-val">
						{animal.greutate} <span className="rd-unit">kg</span>
					</div>
				</div>
				<div className="rd-stat">
					<div className="t-label">Producție azi</div>
					<div className="rd-val">{animal.lapte}</div>
				</div>
				<div className="rd-stat">
					<div className="t-label">Ultimul tratament</div>
					<div className="rd-val" style={{ fontSize: 16 }}>
						{animal.ultimulTratament}
					</div>
				</div>
			</div>

			{/* Sparklines */}
			<div className="rd-panels">
				<div className="rd-panel">
					<div className="t-label">Producție lapte · 30 zile</div>
					<MiniSpark color="#F4B840" />
				</div>
				<div className="rd-panel">
					<div className="t-label">Activitate</div>
					<MiniSpark color="#8DBF91" seed={7} />
				</div>
			</div>

			{/* Timeline */}
			<div className="rd-timeline">
				<div className="t-label" style={{ marginBottom: 10 }}>
					Istoric recent
				</div>
				{animal.timeline.map((e) => (
					<div key={`${e.date}-${e.event}`} className="rd-timeline-row">
						<div
							className="rd-tl-dot"
							style={{
								background: `${e.color}22`,
								borderColor: `${e.color}55`,
								color: e.color,
							}}
						>
							<e.icon width="12" height="12" />
						</div>
						<div style={{ flex: 1, fontSize: 12 }}>{e.event}</div>
						<div
							className="t-mono"
							style={{ fontSize: 11, color: "var(--text-muted)" }}
						>
							{e.date} · {e.time}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

// ─── AnimalRegistry ───────────────────────────────────────────────────────────

export function AnimalRegistry() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const selectedAnimal = ANIMALS[selectedIndex];

	return (
		<section className="registry" id="animals">
			<div className="container">
				<div className="section-head reveal">
					<span className="t-label" style={{ color: "#E86B5A" }}>
						Registrul turmei
					</span>
					<h2 className="t-h1" style={{ marginTop: 12, maxWidth: 760 }}>
						Fiecare animal, o{" "}
						<span style={{ color: "#F4B840", fontStyle: "italic" }}>
							fișă completă.
						</span>
					</h2>
					<p className="t-body-lg" style={{ marginTop: 18, maxWidth: 600 }}>
						Crotal, rasă, istoric medical, descendență, producție, locație.
						Totul într-un singur card pe care îl scoți în 2 secunde de la
						ANSVSA.
					</p>
				</div>

				<div className="registry-grid">
					{/* List panel */}
					<div className="registry-list glass">
						<div className="registry-list-head">
							<div className="t-label">Turma · {ANIMALS.length} animale</div>
							<div className="registry-filter">
								{FILTER_CHIPS.map((chip) => (
									<span
										key={chip}
										className={`registry-chip ${chip === "Toate" ? "active" : ""}`}
									>
										{chip}
									</span>
								))}
							</div>
						</div>
						<div className="registry-items">
							{ANIMALS.map((animal, i) => (
								<RegistryItem
									key={animal.id}
									animal={animal}
									selected={i === selectedIndex}
									onSelect={() => setSelectedIndex(i)}
								/>
							))}
						</div>
					</div>

					{/* Detail panel */}
					<AnimalDetail animal={selectedAnimal} />
				</div>
			</div>
		</section>
	);
}
