import Icons from "./Icons";
import MilkChart from "./MilkChart";

const HeroDashboard = () => {
	return (
		<div className="hero-dash glass floatA">
			<div className="hero-dash-head">
				<div className="hero-dash-head-l">
					<span className="live-dot pulse-dot" />
					<span className="t-label" style={{ color: "#8DBF91" }}>
						LIVE · Ferma Târnava
					</span>
				</div>
				<span className="t-mono">14:27:03</span>
			</div>
			<div className="hero-dash-grid">
				<div className="kpi-card glass">
					<div className="t-label">Animale active</div>
					<div className="kpi-val">247</div>
					<div className="kpi-delta up">+3 față de ieri</div>
				</div>
				<div className="kpi-card glass amber">
					<div className="t-label">Lapte azi</div>
					<div className="kpi-val">
						6.184<span className="kpi-unit">L</span>
					</div>
					<div className="kpi-delta up" style={{ color: "#F4B840" }}>
						+4.2% săptămână
					</div>
				</div>
				<div className="kpi-card glass sky">
					<div className="t-label">Parcele active</div>
					<div className="kpi-val">
						12<span className="kpi-unit">/14</span>
					</div>
					<div className="kpi-delta muted">2 în rotație</div>
				</div>
				<div className="kpi-card glass red">
					<div className="t-label">Alerte deschise</div>
					<div className="kpi-val" style={{ color: "#E86B5A" }}>
						3
					</div>
					<div className="kpi-delta" style={{ color: "#E86B5A" }}>
						Necesită atenție
					</div>
				</div>
			</div>
			<div className="hero-dash-chart">
				<div className="hero-dash-chart-head">
					<div>
						<div className="t-label">Producție lapte — 14 zile</div>
						<div style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>
							6.184 L{" "}
							<span className="t-mono" style={{ color: "#8DBF91" }}>
								▲ 4.2%
							</span>
						</div>
					</div>
					<div className="chart-legend">
						<span>
							<i style={{ background: "#8DBF91" }} />
							Dimineață
						</span>
						<span>
							<i style={{ background: "#F4B840" }} />
							Seară
						</span>
					</div>
				</div>
				<MilkChart />
			</div>
			<div className="hero-dash-alert">
				<div className="alert-icon">
					<Icons.Bell width="14" height="14" />
				</div>
				<div className="alert-body">
					<div className="alert-title">
						Ghiocel · <span className="t-mono">RO-2487-M-0756</span>
					</div>
					<div className="alert-sub">
						Temperatură ridicată · 39.8°C · Izolare A-3
					</div>
				</div>
				<button type="button" className="alert-cta">
					Vezi <Icons.Arrow width="12" height="12" />
				</button>
			</div>
		</div>
	);
};

export default HeroDashboard;
