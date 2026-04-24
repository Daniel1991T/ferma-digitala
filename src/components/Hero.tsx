import BgScene from "./BgScene";
import HeroDashboard from "./HeroDashboard";
import Icons from "./Icons";

const Hero = () => {
	return (
		<section className="hero" id="top">
			<BgScene />
			<div className="container hero-inner">
				<div className="hero-left reveal in">
					<div className="hero-pill glass">
						<span
							className="live-dot pulse-dot"
							style={{ background: "#F4B840" }}
						/>
						<span
							className="t-label"
							style={{ color: "#FAD070", letterSpacing: "0.15em" }}
						>
							Disponibil pentru ANSVSA &amp; APIA
						</span>
					</div>
					<h1 className="t-display hero-title">
						Ferma ta,
						<br />
						<span className="title-accent">sub control</span>,<br />
						de la pășune
						<br />
						la registrul oficial.
					</h1>
					<p className="t-body-lg hero-sub">
						Platforma digitală pentru fermele românești de bovine. Crotalii
						scanate într-o secundă, sănătate monitorizată 24/7, raportări ANSVSA
						generate automat.{" "}
						<span style={{ color: "#8DBF91" }}>
							Fără registre pe hârtie. Fără amenzi.
						</span>
					</p>
					<div className="hero-cta">
						<button type="button" className="btn btn-amber btn-lg press">
							Începe 30 de zile gratuit <Icons.Arrow width="16" height="16" />
						</button>
						<button type="button" className="btn btn-ghost btn-lg press">
							<Icons.Play width="12" height="12" /> Vezi demo (2:14)
						</button>
					</div>
					<div className="hero-trust">
						<div className="hero-trust-stack">
							{["#4E7652", "#8DBF91", "#E8A020", "#5BB8D4", "#6A9B6E"].map(
								(c) => (
									<div
										key={c}
										className="trust-avatar"
										style={{
											background: `linear-gradient(135deg, ${c}, ${c}88)`,
										}}
									/>
								),
							)}
						</div>
						<div>
							<div
								style={{
									display: "flex",
									gap: 2,
									marginBottom: 2,
									alignItems: "center",
								}}
							>
								{[1, 2, 3, 4, 5].map((star) => (
									<svg
										key={star}
										width="13"
										height="13"
										viewBox="0 0 14 14"
										role="img"
										aria-label="Stea rating"
									>
										<title>Stea rating</title>
										<path
											d="M7 1 L9 5 L13 5.5 L10 8.5 L11 13 L7 11 L3 13 L4 8.5 L1 5.5 L5 5 Z"
											fill="#F4B840"
										/>
									</svg>
								))}
								<span style={{ marginLeft: 8, fontSize: 13, fontWeight: 600 }}>
									4.9 / 5
								</span>
							</div>
							<div className="t-body" style={{ fontSize: 13 }}>
								<b style={{ color: "#F0F5F0" }}>1.847 de fermieri</b> din 32 de
								județe
							</div>
						</div>
					</div>
				</div>

				<div className="hero-right reveal in d2">
					<HeroDashboard />
					<div className="float-card anim-card glass floatB">
						<div className="anim-card-head">
							<div className="anim-avatar">
								<Icons.Cow
									width="20"
									height="20"
									style={{ color: "#8DBF91" }}
								/>
							</div>
							<div>
								<div style={{ fontSize: 14, fontWeight: 600 }}>Floarea</div>
								<div className="t-mono" style={{ fontSize: 11 }}>
									RO-2487-M-0941
								</div>
							</div>
							<span
								className="badge badge-sanatos"
								style={{ marginLeft: "auto" }}
							>
								<i className="badge-dot" />
								Sănătoasă
							</span>
						</div>
						<div className="anim-card-metrics">
							<div>
								<span className="t-label">Lapte</span>
								<b>28.4 L</b>
							</div>
							<div>
								<span className="t-label">Pași</span>
								<b>4.2K</b>
							</div>
							<div>
								<span className="t-label">Rumegă</span>
								<b>7h 12m</b>
							</div>
						</div>
					</div>
					<div className="float-card scan-card glass floatC">
						<div className="scan-head">
							<Icons.Scan width="16" height="16" style={{ color: "#F4B840" }} />
							<span className="t-label" style={{ color: "#F4B840" }}>
								Scanare crotal
							</span>
						</div>
						<div className="t-mono scan-id">RO-2487-M-1122</div>
						<div className="scan-bars">
							{Array.from({ length: 22 }, (_, i) => ({
								id: `bar-${i}`,
								height: 40 + Math.sin(i * 1.7) * 30 + Math.cos(i * 0.8) * 20,
							})).map(({ id, height }) => (
								<div key={id} style={{ height: `${height}%` }} />
							))}
						</div>
						<div style={{ fontSize: 12, color: "#8DBF91" }}>
							✓ Identificat · Mirela · Bălțată Românească
						</div>
					</div>
				</div>
			</div>
			<div className="scroll-hint">
				<div className="scroll-hint-line" />
				<span className="t-label">Derulează</span>
			</div>
		</section>
	);
};

export default Hero;
