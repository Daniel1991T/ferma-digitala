"use client";

import { useState } from "react";
import Icons from "../Icons";
import { BigMilkChart } from "./BigMilkChart";
import { HerdDonut } from "./HerdDonut";

// ─── Types ────────────────────────────────────────────────────────────────────

type Severity = "red" | "amber" | "green" | "sky";

interface NavItem {
	name: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface KpiCard {
	label: string;
	value: string;
	delta: string;
	color: Severity;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Alert {
	severity: Severity;
	title: string;
	who: string;
	time: string;
	detail: string;
}

interface AgendaItem {
	day: string;
	dayOfWeek: string;
	month: string;
	event: string;
	color: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
	{ name: "Tablou", icon: Icons.Chart },
	{ name: "Animale", icon: Icons.Cow },
	{ name: "Sănătate", icon: Icons.Heart },
	{ name: "Reproducție", icon: Icons.Calendar },
	{ name: "Producție", icon: Icons.Milk },
	{ name: "Tratamente", icon: Icons.Pill },
	{ name: "Parcele", icon: Icons.Location },
	{ name: "Rapoarte ANSVSA", icon: Icons.Shield },
];

const KPI_CARDS: KpiCard[] = [
	{
		label: "Animale",
		value: "247",
		delta: "+3 ieri",
		color: "green",
		icon: Icons.Cow,
	},
	{
		label: "Lapte azi",
		value: "6.184L",
		delta: "+4.2%",
		color: "amber",
		icon: Icons.Milk,
	},
	{
		label: "Sănătate",
		value: "96%",
		delta: "sănătoase",
		color: "green",
		icon: Icons.Heart,
	},
	{
		label: "Alerte",
		value: "3",
		delta: "deschise",
		color: "red",
		icon: Icons.Bell,
	},
	{
		label: "Parcele",
		value: "12/14",
		delta: "active",
		color: "sky",
		icon: Icons.Location,
	},
];

const ALERTS: Alert[] = [
	{
		severity: "red",
		title: "Temperatură ridicată",
		who: "Ghiocel · RO-2487-M-0756",
		time: "Acum 4 min",
		detail: "39.8°C · izolat în A-3",
	},
	{
		severity: "amber",
		title: "Călduri detectate",
		who: "Brândușa · RO-2487-M-0883",
		time: "Acum 47 min",
		detail: "Fereastră monte 14–20 Mai",
	},
	{
		severity: "amber",
		title: "Producție în scădere",
		who: "Dafina · RO-2487-M-1204",
		time: "Acum 2h",
		detail: "–18% față de media săptămânii",
	},
];

const AGENDA: AgendaItem[] = [
	{
		day: "14",
		dayOfWeek: "Azi",
		month: "Mai",
		event: "12 consultații · Dr. Pop",
		color: "#8DBF91",
	},
	{
		day: "15",
		dayOfWeek: "Mie",
		month: "Mai",
		event: "Rotație P2 → P5",
		color: "#F4B840",
	},
	{
		day: "16",
		dayOfWeek: "Joi",
		month: "Mai",
		event: "Livrare lapte · 4.800L",
		color: "#5BB8D4",
	},
	{
		day: "18",
		dayOfWeek: "Sâm",
		month: "Mai",
		event: "Raport ANSVSA Formular 2",
		color: "#E86B5A",
	},
];

const MILK_TABS = ["7z", "30z", "90z", "1an"] as const;
type MilkTab = (typeof MILK_TABS)[number];

const CHROME_DOTS: { color: string }[] = [
	{ color: "#E86B5A" },
	{ color: "#F4B840" },
	{ color: "#8DBF91" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function AlertIcon({ severity }: { severity: Severity }) {
	return severity === "red" ? (
		<Icons.Bell width="14" height="14" />
	) : (
		<Icons.Heart width="14" height="14" />
	);
}

// ─── Component ────────────────────────────────────────────────────────────────

const DEFAULT_NAV = "Tablou";
const DEFAULT_MILK_TAB: MilkTab = "30z";

const DashboardShowcase = () => {
	const [activeNav, setActiveNav] = useState(DEFAULT_NAV);
	const [activeMilkTab, setActiveMilkTab] = useState<MilkTab>(DEFAULT_MILK_TAB);

	return (
		<section className="dashboard" id="dashboard">
			<div className="container">
				{/* Section header */}
				<div className="section-head reveal">
					<span className="t-label" style={{ color: "#F4B840" }}>
						Tablou de bord
					</span>
					<h2 className="t-h1" style={{ marginTop: 12, maxWidth: 780 }}>
						Toate datele fermei,{" "}
						<span style={{ color: "#8DBF91", fontStyle: "italic" }}>
							într-un singur ecran.
						</span>
					</h2>
				</div>

				{/* Browser frame */}
				<div className="dash-frame glass reveal">
					{/* Chrome bar */}
					<div className="dash-chrome">
						<div className="dash-dots">
							{CHROME_DOTS.map(({ color }) => (
								<i key={color} style={{ background: color }} />
							))}
						</div>
						<div className="dash-url">
							<Icons.Shield
								width="12"
								height="12"
								style={{ color: "#8DBF91" }}
							/>
							<span>app.fermadigitala.ro / tablou</span>
						</div>
						<div className="dash-chrome-r">
							<span className="live-dot pulse-dot" />
							<span className="t-mono" style={{ fontSize: 11 }}>
								Sincronizat · 14:27
							</span>
						</div>
					</div>

					<div className="dash-body">
						{/* Sidebar */}
						<aside className="dash-side">
							<div className="dash-brand">
								<Icons.Logo
									width="22"
									height="22"
									style={{ color: "#8DBF91" }}
								/>
								<div>
									<div style={{ fontSize: 13, fontWeight: 700 }}>
										Ferma Târnava
									</div>
									<div style={{ fontSize: 10, color: "var(--text-muted)" }}>
										SC Agro Valea Mare SRL
									</div>
								</div>
							</div>

							<nav className="dash-nav">
								{NAV_ITEMS.map(({ name, icon: Icon }) => (
									<button
										key={name}
										type="button"
										className={`dash-nav-item ${activeNav === name ? "active" : ""}`}
										onClick={() => setActiveNav(name)}
									>
										<Icon width="16" height="16" /> {name}
									</button>
								))}
							</nav>

							<div className="dash-side-foot glass">
								<div
									className="trust-avatar"
									style={{
										background: "linear-gradient(135deg, #4E7652, #8DBF91)",
										width: 32,
										height: 32,
									}}
								/>
								<div>
									<div style={{ fontSize: 12, fontWeight: 600 }}>
										Ioan Țăranu
									</div>
									<div style={{ fontSize: 10, color: "var(--text-muted)" }}>
										Proprietar
									</div>
								</div>
							</div>
						</aside>

						{/* Main content */}
						<main className="dash-main">
							{/* Top bar */}
							<div className="dash-topbar">
								<div>
									<div className="t-label">Bună dimineața, Ioan</div>
									<div style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>
										Marți, 14 Mai · ferma e în ordine
									</div>
								</div>
								<div className="dash-search glass">
									<Icons.Search
										width="14"
										height="14"
										style={{ color: "var(--text-muted)" }}
									/>
									<span style={{ color: "var(--text-muted)", fontSize: 13 }}>
										Caută animal, parcelă, raport…
									</span>
									<span
										className="t-mono"
										style={{ marginLeft: "auto", fontSize: 10, opacity: 0.5 }}
									>
										⌘K
									</span>
								</div>
								<button
									type="button"
									className="btn btn-amber"
									style={{ padding: "8px 16px", fontSize: 12 }}
								>
									<Icons.Plus width="12" height="12" /> Intrare rapidă
								</button>
							</div>

							{/* KPI cards */}
							<div className="dash-kpis">
								{KPI_CARDS.map(({ label, value, delta, color, icon: Icon }) => (
									<div key={label} className={`kpi-card glass ${color}`}>
										<div className="dash-kpi-top">
											<Icon width="14" height="14" style={{ opacity: 0.55 }} />
											<span className="t-label">{label}</span>
										</div>
										<div className="dash-kpi-val">{value}</div>
										<div className="dash-kpi-delta">{delta}</div>
									</div>
								))}
							</div>

							{/* Charts row */}
							<div className="dash-row">
								{/* Milk chart */}
								<div className="dash-panel glass">
									<div className="dash-panel-head">
										<div>
											<div className="t-label">Producție lapte</div>
											<div
												style={{ fontSize: 20, fontWeight: 700, marginTop: 2 }}
											>
												6.184 L{" "}
												<span
													className="t-mono"
													style={{ fontSize: 12, color: "#8DBF91" }}
												>
													▲ 4.2% vs săpt trecută
												</span>
											</div>
										</div>
										<div className="dash-panel-tabs">
											{MILK_TABS.map((t) => (
												<button
													key={t}
													type="button"
													className={activeMilkTab === t ? "on" : ""}
													onClick={() => setActiveMilkTab(t)}
												>
													{t}
												</button>
											))}
										</div>
									</div>
									<BigMilkChart />
								</div>

								{/* Herd donut */}
								<div className="dash-panel glass">
									<div className="dash-panel-head">
										<div>
											<div className="t-label">Compoziția turmei</div>
											<div
												style={{ fontSize: 20, fontWeight: 700, marginTop: 2 }}
											>
												247{" "}
												<span
													style={{ fontSize: 13, color: "var(--text-muted)" }}
												>
													animale
												</span>
											</div>
										</div>
									</div>
									<HerdDonut />
								</div>
							</div>

							{/* Alerts + Agenda row */}
							<div className="dash-row">
								{/* Alerts */}
								<div className="dash-panel glass" style={{ flex: 1.4 }}>
									<div className="dash-panel-head">
										<div className="t-label">
											Alerte active · necesită acțiune
										</div>
										<span
											className="t-mono"
											style={{ fontSize: 11, color: "#E86B5A" }}
										>
											{ALERTS.length} noi
										</span>
									</div>
									<div className="dash-alerts">
										{ALERTS.map((alert) => (
											<div key={alert.title} className="dash-alert">
												<div className={`alert-sev ${alert.severity}`}>
													<AlertIcon severity={alert.severity} />
												</div>
												<div className="alert-main">
													<div style={{ fontSize: 13, fontWeight: 600 }}>
														{alert.title}
													</div>
													<div
														style={{ fontSize: 11, color: "var(--text-muted)" }}
													>
														{alert.who}
													</div>
													<div
														style={{
															fontSize: 11,
															color: "var(--text-secondary)",
															marginTop: 3,
														}}
													>
														{alert.detail}
													</div>
												</div>
												<div className="alert-time">{alert.time}</div>
											</div>
										))}
									</div>
								</div>

								{/* Agenda */}
								<div className="dash-panel glass">
									<div className="dash-panel-head">
										<div className="t-label">Următoarele 7 zile</div>
									</div>
									<div className="dash-agenda">
										{AGENDA.map((item) => (
											<div
												key={`${item.day}-${item.month}`}
												className="agenda-row"
											>
												<div
													className="agenda-date"
													style={{ borderColor: `${item.color}55` }}
												>
													<div style={{ fontSize: 9, opacity: 0.6 }}>
														{item.month}
													</div>
													<div
														style={{
															fontSize: 15,
															fontWeight: 700,
															color: item.color,
														}}
													>
														{item.day}
													</div>
												</div>
												<div style={{ flex: 1 }}>
													<div
														style={{ fontSize: 11, color: "var(--text-muted)" }}
													>
														{item.dayOfWeek}
													</div>
													<div style={{ fontSize: 12, fontWeight: 500 }}>
														{item.event}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DashboardShowcase;
