import { useState } from "react";
import Icons from "../Icons";

// ─── Types ────────────────────────────────────────────────────────────────────

type Period = "lunar" | "anual";
type CtaType = "amber" | "ghost";

interface Plan {
	id: string;
	name: string;
	tagline: string;
	price: Record<Period, number | "La cerere">;
	cta: string;
	ctaType: CtaType;
	popular?: boolean;
	features: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLANS: Plan[] = [
	{
		id: "pastor",
		name: "Păstor",
		tagline: "Pentru ferme mici, până la 50 de animale",
		price: { lunar: 79, anual: 59 },
		cta: "Încearcă gratuit",
		ctaType: "ghost",
		features: [
			"Până la 50 de animale",
			"Scanare crotal nelimitată",
			"Registru medical complet",
			"Rapoarte ANSVSA de bază",
			"Aplicație mobilă iOS + Android",
			"Asistență pe email",
		],
	},
	{
		id: "gospodar",
		name: "Gospodar",
		tagline: "Cel mai ales — ferme de 50–300 de animale",
		price: { lunar: 189, anual: 149 },
		cta: "Începe 30 de zile gratuit",
		ctaType: "amber",
		popular: true,
		features: [
			"Până la 300 de animale",
			"Toate din Păstor, plus:",
			"Monitorizare sănătate cu senzori",
			"Alerte SMS pentru urgențe",
			"Gestiune parcele cu GPS",
			"Rapoarte APIA automate",
			"Integrare ferme muls",
			"Asistență telefonică în română",
		],
	},
	{
		id: "cooperativa",
		name: "Cooperativă",
		tagline: "Multi-fermă · 300+ animale",
		price: { lunar: "La cerere", anual: "La cerere" },
		cta: "Discută cu echipa",
		ctaType: "ghost",
		features: [
			"Animale nelimitate",
			"Toate din Gospodar, plus:",
			"Multi-fermă și roluri",
			"API și integrări ERP",
			"Manager de cont dedicat",
			"Training la fața locului",
			"SLA 99.9% · date în România",
		],
	},
];

const FOOTER_PERKS = [
	"30 de zile gratuit",
	"Date în România (GDPR)",
	"Funcționare offline",
	"Suport în limba română",
] as const;

// ─── PricingCard ──────────────────────────────────────────────────────────────

interface PricingCardProps {
	plan: Plan;
	period: Period;
}

function PricingCard({ plan, period }: PricingCardProps) {
	const price = plan.price[period];
	const isNumeric = typeof price === "number";
	const annualTotal = isNumeric ? price * 12 : null;

	return (
		<div
			className={`pricing-card glass reveal ${plan.popular ? "popular kpi-card amber" : ""}`}
		>
			{plan.popular && (
				<div className="pricing-flag">
					<Icons.Sparkle width="10" height="10" /> Cel mai ales
				</div>
			)}

			<div className="pricing-name">{plan.name}</div>
			<div className="pricing-tag">{plan.tagline}</div>

			<div className="pricing-price">
				{isNumeric ? (
					<>
						<span className="pricing-cur">€</span>
						<span className="pricing-val">{price}</span>
						<span className="pricing-per">/lună</span>
					</>
				) : (
					<span className="pricing-val" style={{ fontSize: 32 }}>
						{price}
					</span>
				)}
			</div>

			{period === "anual" && annualTotal !== null && (
				<div className="pricing-note">facturat anual · €{annualTotal}</div>
			)}

			<button type="button" className={`btn btn-${plan.ctaType} pricing-cta`}>
				{plan.cta} <Icons.Arrow width="14" height="14" />
			</button>

			<div className="pricing-divider" />

			<ul className="pricing-feats">
				{plan.features.map((feature) => (
					<li key={feature}>
						<span className="pricing-check">
							<Icons.Check width="10" height="10" />
						</span>
						{feature}
					</li>
				))}
			</ul>
		</div>
	);
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

export function Pricing() {
	const [period, setPeriod] = useState<Period>("anual");

	return (
		<section className="pricing" id="pricing">
			<div className="container">
				<div className="section-head reveal">
					<span className="t-label" style={{ color: "#F4B840" }}>
						Tarife cinstite
					</span>
					<h2 className="t-h1" style={{ marginTop: 12, maxWidth: 780 }}>
						Plătești pe animal.{" "}
						<span style={{ color: "#8DBF91", fontStyle: "italic" }}>
							Nimic ascuns.
						</span>
					</h2>
					<p className="t-body-lg" style={{ marginTop: 18, maxWidth: 620 }}>
						30 de zile gratuit. Fără card la înscriere. Poți opri oricând.
					</p>

					<div className="pricing-toggle glass">
						<button
							type="button"
							className={period === "lunar" ? "on" : ""}
							onClick={() => setPeriod("lunar")}
						>
							Lunar
						</button>
						<button
							type="button"
							className={period === "anual" ? "on" : ""}
							onClick={() => setPeriod("anual")}
						>
							Anual <span className="pricing-save">–24%</span>
						</button>
					</div>
				</div>

				<div className="pricing-grid">
					{PLANS.map((plan) => (
						<PricingCard key={plan.id} plan={plan} period={period} />
					))}
				</div>

				<div className="pricing-foot">
					<span style={{ color: "var(--text-muted)" }}>
						Toate planurile includ:
					</span>
					{FOOTER_PERKS.map((perk) => (
						<span key={perk}>
							<Icons.Check
								width="12"
								height="12"
								style={{ color: "#8DBF91" }}
							/>
							{perk}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
