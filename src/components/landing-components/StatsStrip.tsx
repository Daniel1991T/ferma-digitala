import { STATS_STRIP_ITEMS } from "#/lib/constants/constants";
import Counter from "./Counter";

const StatsStrip = () => {
	return (
		<section className="stats-strip">
			<div className="container">
				<div className="stats-head">
					<span className="t-label" style={{ color: "#E8A020" }}>
						Rețeaua FermaDigitală
					</span>
					<h2 className="t-h2" style={{ marginTop: 8, maxWidth: 720 }}>
						Cea mai mare comunitate de{" "}
						<span style={{ color: "#F4B840" }}>fermieri digitali</span> din
						România.
					</h2>
				</div>

				<div className="stats-grid">
					{STATS_STRIP_ITEMS.map((s) => (
						<div key={s.id} className="stat-card glass kpi-card reveal">
							<div className="stat-val">
								<Counter to={s.val} suffix={s.suf} />
							</div>
							<div className="stat-label">{s.label}</div>
							<div className="stat-sub">{s.sub}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default StatsStrip;
