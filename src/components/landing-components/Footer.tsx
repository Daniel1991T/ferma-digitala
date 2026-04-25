"use client";

import Icons from "../Icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FooterColumn {
	title: string;
	items: string[];
}

interface LegalLink {
	label: string;
	href: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOOTER_COLUMNS: FooterColumn[] = [
	{
		title: "Produs",
		items: [
			"Funcționalități",
			"Tablou de bord",
			"Aplicație mobilă",
			"Senzori IoT",
			"Integrări",
			"Noutăți",
		],
	},
	{
		title: "Pentru",
		items: [
			"Ferme de bovine",
			"Crescători de oi",
			"Medici veterinari",
			"Cooperative",
			"Abatoare",
		],
	},
	{
		title: "Resurse",
		items: [
			"Ghiduri ANSVSA",
			"Webinarii",
			"Blog",
			"Centru ajutor",
			"Video tutoriale",
			"Comunitate",
		],
	},
	{
		title: "Companie",
		items: ["Despre", "Echipa", "Cariere", "Presă", "Parteneri", "Contact"],
	},
];

const LEGAL_LINKS: LegalLink[] = [
	{ label: "Confidențialitate", href: "/confidentialitate" },
	{ label: "Termeni", href: "/termeni" },
	{ label: "GDPR", href: "/gdpr" },
	{ label: "Cookies", href: "/cookies" },
];

// ─── FooterCol ────────────────────────────────────────────────────────────────

function FooterCol({ title, items }: FooterColumn) {
	return (
		<div className="footer-col">
			<div className="t-label">{title}</div>
			<ul>
				{items.map((item) => (
					<li key={item}>
						<a href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</a>
					</li>
				))}
			</ul>
		</div>
	);
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function Newsletter() {
	return (
		<div className="footer-newsletter">
			<div className="t-label" style={{ marginBottom: 10 }}>
				Newsletter lunar
			</div>
			<div className="footer-input-wrap">
				<label htmlFor="footer-email" className="sr-only">
					Adresa de email
				</label>
				<input
					id="footer-email"
					type="email"
					placeholder="adresa@email.ro"
					autoComplete="email"
				/>
				<button type="submit" aria-label="Abonează-te la newsletter">
					<Icons.Arrow width="14" height="14" />
				</button>
			</div>
		</div>
	);
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
	return (
		<footer className="footer">
			<div className="footer-divider">
				<div className="divider" />
			</div>

			<div className="container">
				<div className="footer-top">
					{/* Brand + newsletter */}
					<div className="footer-brand">
						<div className="footer-logo">
							<Icons.Logo width="32" height="32" style={{ color: "#8DBF91" }} />
							<span>
								FermaDigitală<span style={{ color: "#F4B840" }}>.</span>
							</span>
						</div>
						<p
							className="t-body"
							style={{ marginTop: 20, maxWidth: 320, fontSize: 13 }}
						>
							Făcut în România, pentru fermele din România. Cu sprijinul a 1.847
							de fermieri din 32 de județe care ne spun zilnic ce trebuie să
							îmbunătățim.
						</p>
						<Newsletter />
					</div>

					{/* Nav columns */}
					<div className="footer-cols">
						{FOOTER_COLUMNS.map((col) => (
							<FooterCol key={col.title} {...col} />
						))}
					</div>
				</div>

				{/* Bottom bar */}
				<div className="footer-bottom">
					<div className="footer-meta">
						<span>© 2026 FermaDigitală SRL · CUI 45782391</span>
						<span>·</span>
						<span>Str. Pădurii 14, Cluj-Napoca</span>
						<span>·</span>
						<span>Date găzduite în România 🇷🇴</span>
					</div>
					<nav className="footer-legal" aria-label="Linkuri legale">
						{LEGAL_LINKS.map(({ label, href }) => (
							<a aria-disabled key={label} href={href}>
								{label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}
