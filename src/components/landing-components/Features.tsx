import { FEATURE_ITEMS } from "#/lib/constants/constants";
import { FeatureDemo } from "./FeatureDemo";

const Features = () => {
	return (
		<section className="features" id="features">
			<div className="container">
				<div className="section-head reveal">
					<span className="t-label" style={{ color: "#8DBF91" }}>
						Ce face FermaDigitală
					</span>
					<h2 className="t-h1" style={{ marginTop: 12, maxWidth: 880 }}>
						O singură aplicație pentru{" "}
						<span style={{ color: "#F4B840", fontStyle: "italic" }}>toată</span>{" "}
						ferma ta de bovine.
					</h2>
					<p className="t-body-lg" style={{ marginTop: 18, maxWidth: 640 }}>
						Am petrecut doi ani în ferme din Maramureș, Sibiu și Buzău. Am
						urmărit cum lucrează veterinarii, cum completau fermierii registrele
						pe hârtie, ce întreabă inspectorii ANSVSA. Asta a ieșit.
					</p>
				</div>

				<div className="features-grid">
					{FEATURE_ITEMS.map((f) => (
						<div key={f.demo} className="feature-card glass hover-lift reveal">
							<div className="feature-head">
								<div
									className="feature-icon"
									style={{
										color: f.color,
										background: `${f.color}15`,
										borderColor: `${f.color}33`,
									}}
								>
									<f.icon width="22" height="22" />
								</div>
								<span className="t-label" style={{ color: f.color }}>
									{f.label}
								</span>
							</div>
							<h3
								className="t-h3"
								style={{ marginTop: 18, marginBottom: 10, fontSize: 22 }}
							>
								{f.title}
							</h3>
							<p className="t-body" style={{ marginBottom: 20 }}>
								{f.body}
							</p>
							<FeatureDemo kind={f.demo} color={f.color} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
