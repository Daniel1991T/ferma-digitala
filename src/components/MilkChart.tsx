const MilkChart = () => {
	const days = Array.from({ length: 14 }, (_, i) => {
		const seed = Math.sin(i * 1.7) * 0.5 + Math.sin(i * 0.9) * 0.3 + 0.7;
		return { i, am: 280 + seed * 80 + i * 2, pm: 230 + seed * 60 + i * 1.5 };
	});
	const max = 500;
	return (
		<svg
			viewBox="0 0 560 130"
			className="milk-chart"
			role="img"
			aria-labelledby="milk-chart-title"
		>
			<title id="milk-chart-title">
				Grafic producție lapte pe ultimele 14 zile
			</title>
			<defs>
				<linearGradient id="milkGrad" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#8DBF91" stopOpacity="0.35" />
					<stop offset="100%" stopColor="#8DBF91" stopOpacity="0" />
				</linearGradient>
			</defs>
			{[0, 0.25, 0.5, 0.75, 1].map((p) => (
				<line
					key={p}
					x1="0"
					x2="560"
					y1={20 + p * 90}
					y2={20 + p * 90}
					stroke="rgba(110,160,112,0.1)"
				/>
			))}
			{days.map((d, i) => {
				const w = 560 / days.length;
				const x = i * w + w * 0.45;
				const h = (d.pm / max) * 90;
				return (
					<rect
						key={d.i}
						x={x}
						y={20 + 90 - h}
						width={w * 0.35}
						height={h}
						rx="2"
						fill="#F4B840"
						opacity="0.65"
					/>
				);
			})}
			<path
				d={days
					.map((d, i) => {
						const w = 560 / days.length;
						const x = i * w + w * 0.5;
						const y = 20 + 90 - (d.am / max) * 90;
						return `${i === 0 ? "M" : "L"}${x} ${y}`;
					})
					.join(" ")}
				fill="none"
				stroke="#8DBF91"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d={
					days
						.map((d, i) => {
							const w = 560 / days.length;
							const x = i * w + w * 0.5;
							const y = 20 + 90 - (d.am / max) * 90;
							return `${i === 0 ? "M" : "L"}${x} ${y}`;
						})
						.join(" ") +
					` L ${560 - (560 / days.length) * 0.5} 110 L ${(560 / days.length) * 0.5} 110 Z`
				}
				fill="url(#milkGrad)"
			/>
			{days.map((d, i) => {
				const w = 560 / days.length;
				const x = i * w + w * 0.5;
				const y = 20 + 90 - (d.am / max) * 90;
				return (
					<circle
						key={d.i}
						cx={x}
						cy={y}
						r={i === days.length - 1 ? 4 : 2}
						fill={i === days.length - 1 ? "#FAD070" : "#8DBF91"}
					/>
				);
			})}
		</svg>
	);
};

export default MilkChart;
