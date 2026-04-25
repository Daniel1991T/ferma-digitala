"use client";

import { useId } from "react";
import Icons from "../Icons";

// ─── PhoneIcon ────────────────────────────────────────────────────────────────

function PhoneIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden
			role="img"
		>
			<title>Phone Icon</title>
			<path
				d="M22 16.9V20a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3.1a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.9 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

// ─── CtaBackground ────────────────────────────────────────────────────────────

function CtaBackground({ gradientId }: { gradientId: string }) {
	return (
		<div className="cta-bg" aria-hidden>
			<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
				<title>CTA Backgorund</title>
				<defs>
					<radialGradient id={gradientId} cx="0.85" cy="0.2" r="0.6">
						<stop offset="0%" stopColor="#E8A020" stopOpacity="0.25" />
						<stop offset="100%" stopColor="#E8A020" stopOpacity="0" />
					</radialGradient>
				</defs>
				<rect width="800" height="400" fill={`url(#${gradientId})`} />
				{Array.from({ length: 60 }).map((_, i) => {
					const x = (i * 19) % 800;
					const y = 200 + Math.sin(i * 0.5) * 80;
					const h = 8 + (i % 5) * 4;
					return (
						<path
							key={`${x}-${y.toFixed(2)}-${h}`}
							d={`M${x} ${y + h} L${x} ${y}`}
							stroke="#6A9B6E"
							strokeWidth="0.8"
							opacity="0.25"
						/>
					);
				})}
			</svg>
		</div>
	);
}

// ─── FinalCTA ─────────────────────────────────────────────────────────────────

export function FinalCTA() {
	const uid = useId();
	const gradientId = `ctag-${uid}`;

	return (
		<section className="final-cta">
			<div className="container">
				<div className="cta-card glass reveal">
					<CtaBackground gradientId={gradientId} />

					<div className="cta-content">
						<span className="t-label" style={{ color: "#FAD070" }}>
							Începe azi
						</span>

						<h2
							className="t-display cta-title"
							style={{ marginTop: 16, marginBottom: 18 }}
						>
							Ferma ta merită
							<br />
							<span style={{ color: "#F4B840", fontStyle: "italic" }}>
								uneltele secolului XXI.
							</span>
						</h2>

						<p
							className="t-body-lg"
							style={{ maxWidth: 560, marginBottom: 32 }}
						>
							30 de zile gratuite. Fără card. Fără contract. Te sună
							consultantul nostru în 4 ore cu setup complet.
						</p>

						<div className="cta-buttons">
							<button type="button" className="btn btn-amber btn-lg">
								Creează cont gratuit <Icons.Arrow width="16" height="16" />
							</button>
							<button type="button" className="btn btn-ghost btn-lg">
								<PhoneIcon />
								0800 FERMA (33762)
							</button>
						</div>

						<div className="cta-sub">
							<Icons.Shield
								width="12"
								height="12"
								style={{ color: "#8DBF91" }}
							/>
							Parteneri oficiali: <b style={{ color: "#8DBF91" }}>ANSVSA</b> ·{" "}
							<b style={{ color: "#8DBF91" }}>APIA</b> ·{" "}
							<b style={{ color: "#8DBF91" }}>USAMV Cluj</b>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
