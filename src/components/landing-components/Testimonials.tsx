"use client";

import Icons from "../Icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Testimonial {
	quote: string;
	nume: string;
	ferma: string;
	stats: string;
	avatarColor: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TESTIMONIALS: Testimonial[] = [
	{
		quote:
			"Am 180 de vaci în Maramureș. Înainte țineam trei caiete — unul pentru medicamente, unul pentru monte, unul pentru mișcări. Acum tot ce fac e scanarea crotalului și aplicația face restul. Controlul ANSVSA de anul trecut a durat 40 de minute.",
		nume: "Vasile Mureșan",
		ferma: "Ferma Mureșan · Borșa, Maramureș",
		stats: "180 animale · 8 ani",
		avatarColor: "#4E7652",
	},
	{
		quote:
			"Pentru veterinarul care vine la mine, e mult mai rapid. Deschide fișa animalului pe telefon, vede exact ce tratamente a primit. A scăzut și consumul de antibiotice — nu mai dublez tratamentele pentru că nu-mi mai aduc aminte.",
		nume: "Dr. Ileana Ciobanu",
		ferma: "Medic veterinar · Cooperativa Buzău-Sud",
		stats: "4 ferme · 620 animale",
		avatarColor: "#E8A020",
	},
	{
		quote:
			"Subvenția APIA de anul ăsta a fost cea mai ușoară. Am exportat mișcările, parcelele, totul. Inspectorul a zâmbit când a văzut formularele — zicea că rar vede ferme așa de bine organizate.",
		nume: "Andrei Popa",
		ferma: "SC Holda Verde SRL · Sibiu",
		stats: "340 animale · 112 ha",
		avatarColor: "#5BB8D4",
	},
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
	return name
		.split(" ")
		.map((w) => w[0])
		.slice(0, 2)
		.join("");
}

// ─── TestimonialCard ──────────────────────────────────────────────────────────

function TestimonialCard({
	quote,
	nume,
	ferma,
	stats,
	avatarColor,
}: Testimonial) {
	return (
		<div className="test-card glass hover-lift reveal">
			<Icons.Quote
				width="28"
				height="28"
				style={{ color: "#3D5E40", marginBottom: 20 }}
			/>
			<p className="test-quote">{quote}</p>
			<div className="test-foot">
				<div
					className="test-avatar"
					style={{
						background: `linear-gradient(135deg, ${avatarColor}, ${avatarColor}55)`,
					}}
					aria-hidden
				>
					{getInitials(nume)}
				</div>
				<div>
					<div style={{ fontSize: 14, fontWeight: 700 }}>{nume}</div>
					<div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
						{ferma}
					</div>
					<div className="t-mono" style={{ fontSize: 11, marginTop: 4 }}>
						{stats}
					</div>
				</div>
			</div>
		</div>
	);
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export function Testimonials() {
	return (
		<section className="testimonials" id="testimonials">
			<div className="container">
				<div className="section-head reveal">
					<span className="t-label" style={{ color: "#8DBF91" }}>
						Vorbesc fermierii
					</span>
					<h2 className="t-h1" style={{ marginTop: 12, maxWidth: 760 }}>
						„Nu mai am caiete. Nu mai am amenzi."
					</h2>
				</div>
				<div className="tests-grid">
					{TESTIMONIALS.map((t) => (
						<TestimonialCard key={t.nume} {...t} />
					))}
				</div>
			</div>
		</section>
	);
}
