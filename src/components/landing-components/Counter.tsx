import { useEffect, useRef, useState } from "react";

type CounterProps = {
	to: number;
	duration?: number;
	suffix?: string;
};

const Counter = ({ to, suffix = "", duration = 1.8 }: CounterProps) => {
	const ref = useRef(null);
	const [val, setVal] = useState(0);
	useEffect(() => {
		let started = false;
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting && !started) {
						started = true;
						const start = performance.now();
						const step = (t: number) => {
							const p = Math.min(1, (t - start) / (duration * 1000));
							const eased = 1 - (1 - p) ** 3;
							setVal(to * eased);
							if (p < 1) requestAnimationFrame(step);
						};
						requestAnimationFrame(step);
					}
				});
			},
			{ threshold: 0.5 },
		);
		if (ref.current) obs.observe(ref.current);
		return () => obs.disconnect();
	}, [to, duration]);
	const display =
		to % 1 === 0
			? Math.round(val).toLocaleString("ro-RO")
			: val.toFixed(1).replace(".", ",");
	return (
		<span ref={ref}>
			{display}
			{suffix}
		</span>
	);
};

export default Counter;
