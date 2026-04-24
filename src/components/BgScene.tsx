const BgScene = () => {
	return (
		<div className="scene" aria-hidden="true">
			<svg
				className="scene-svg"
				viewBox="0 0 1600 900"
				preserveAspectRatio="xMidYMid slice"
			>
				<title>Fundal ilustrativ FermaDigitală</title>
				<defs>
					<linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#0D1A0F" />
						<stop offset="40%" stopColor="#152218" />
						<stop offset="70%" stopColor="#1a2b1d" />
						<stop offset="100%" stopColor="#0D1A0F" />
					</linearGradient>
					<linearGradient id="haze" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#E8A020" stopOpacity="0" />
						<stop offset="55%" stopColor="#E8A020" stopOpacity="0.06" />
						<stop offset="75%" stopColor="#F4B840" stopOpacity="0.10" />
						<stop offset="100%" stopColor="#D94F3D" stopOpacity="0.04" />
					</linearGradient>
					<linearGradient id="field1" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#2F4A32" />
						<stop offset="100%" stopColor="#152218" />
					</linearGradient>
					<linearGradient id="field2" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#3D5E40" />
						<stop offset="100%" stopColor="#1C2E1F" />
					</linearGradient>
					<linearGradient id="field3" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#4E7652" />
						<stop offset="100%" stopColor="#243828" />
					</linearGradient>
					<radialGradient id="sun" cx="0.78" cy="0.22" r="0.35">
						<stop offset="0%" stopColor="#FAD070" stopOpacity="0.55" />
						<stop offset="40%" stopColor="#E8A020" stopOpacity="0.18" />
						<stop offset="100%" stopColor="#E8A020" stopOpacity="0" />
					</radialGradient>
				</defs>
				<rect width="1600" height="900" fill="url(#sky)" />
				<rect width="1600" height="900" fill="url(#sun)" />
				<rect y="380" width="1600" height="260" fill="url(#haze)" />
				<path
					d="M0 440 L160 400 L260 420 L360 380 L470 410 L580 370 L700 405 L820 385 L940 420 L1060 395 L1180 415 L1300 390 L1420 410 L1600 400 V520 H0 Z"
					fill="#152218"
					opacity="0.9"
				/>
				<path
					d="M0 490 L120 470 L240 485 L360 460 L480 480 L620 455 L760 475 L900 460 L1040 480 L1180 465 L1320 485 L1460 470 L1600 480 V560 H0 Z"
					fill="#1C2E1F"
					opacity="0.95"
				/>
				<g opacity="0.6">
					{Array.from({ length: 40 }, (_, i) => ({
						id: `hill-${i}`,
						cx: i * 42,
						ry: 14 + (i % 5) * 6,
					})).map(({ id, cx, ry }) => (
						<ellipse key={id} cx={cx} cy="548" rx="26" ry={ry} fill="#0D1A0F" />
					))}
				</g>
				<g>
					<path d="M0 560 L1600 560 L1600 640 L0 640 Z" fill="url(#field1)" />
					{Array.from({ length: 18 }, (_, i) => ({
						id: `field1-line-${i}`,
						d: `M0 ${565 + i * 4.5} L1600 ${565 + i * 4.5 + Math.sin(i * 0.8) * 2}`,
						opacity: 0.5 + i * 0.02,
					})).map(({ id, d, opacity }) => (
						<path
							key={id}
							d={d}
							stroke="#1a2b1d"
							strokeWidth="1"
							opacity={opacity}
						/>
					))}
				</g>
				<g>
					<path d="M0 640 L1600 640 L1600 740 L0 740 Z" fill="url(#field2)" />
					{Array.from({ length: 14 }, (_, i) => ({
						id: `field2-h-line-${i}`,
						d: `M0 ${645 + i * 6.8} L1600 ${645 + i * 6.8}`,
						opacity: 0.5,
					})).map(({ id, d, opacity }) => (
						<path
							key={id}
							d={d}
							stroke="#243828"
							strokeWidth="1.2"
							opacity={opacity}
						/>
					))}
					{Array.from({ length: 30 }, (_, i) => ({
						id: `field2-d-line-${i}`,
						d: `M${i * 55 - 200} 640 L${i * 55 - 200 + 140} 740`,
						opacity: 0.35,
					})).map(({ id, d, opacity }) => (
						<path
							key={id}
							d={d}
							stroke="#4E7652"
							strokeWidth="0.6"
							opacity={opacity}
						/>
					))}
				</g>
				<g>
					<path d="M0 740 L1600 740 L1600 900 L0 900 Z" fill="url(#field3)" />
					{Array.from({ length: 180 }, (_, i) => ({
						id: `grass-${(i * 9) % 1600}-${760 + (i % 8) * 16}`,
						x: ((i * 9) % 1600) + (i % 3) * 3,
						yBase: 760 + (i % 8) * 16,
						h: 8 + (i % 4) * 3,
					})).map(({ id, x, yBase, h }) => (
						<path
							key={id}
							d={`M${x} ${yBase} L${x - 1} ${yBase - h}`}
							stroke="#6A9B6E"
							strokeWidth="0.8"
							opacity="0.4"
						/>
					))}
				</g>
				<rect width="1600" height="900" fill="url(#haze)" opacity="0.4" />
				<g opacity="0.07" stroke="#8DBF91" strokeWidth="0.5" fill="none">
					{Array.from({ length: 20 }, (_, i) => i * 50).map((y) => (
						<path key={`grid-h-${y}`} d={`M0 ${y} L1600 ${y}`} />
					))}
					{Array.from({ length: 32 }, (_, i) => i * 50).map((x) => (
						<path key={`grid-v-${x}`} d={`M${x} 0 L${x} 900`} />
					))}
				</g>
				<g opacity="0.55">
					<rect x="1210" y="512" width="90" height="38" fill="#0D1A0F" />
					<path d="M1210 512 L1255 495 L1300 512 Z" fill="#0D1A0F" />
					<rect x="1302" y="500" width="14" height="50" rx="7" fill="#0D1A0F" />
				</g>
			</svg>
			<div className="vignette" />
			<div className="grain" />
		</div>
	);
};

export default BgScene;
