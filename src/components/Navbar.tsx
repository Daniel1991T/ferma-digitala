import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NavbarLinks } from "#/lib/constants/links";
import Icons from "./Icons";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
			<div className="container nav-inner">
				<Link to="/landing" className="nav-logo">
					<Icons.Logo width="28" height="28" style={{ color: "#8DBF91" }} />
					<span>
						FermaDigitală<span className="nav-logo-dot">.</span>
					</span>
				</Link>
				<div className="nav-links">
					{NavbarLinks.map(([l, h]) => (
						<a key={l} href={h}>
							{l}
						</a>
					))}
				</div>
				<div className="nav-actions">
					<Link to="/landing" className="nav-login">
						Autentificare
					</Link>
					<button type="button" className="btn btn-amber nav-cta press">
						Încearcă gratuit <Icons.Arrow width="14" height="14" />
					</button>
					<button
						type="button"
						className="nav-burger"
						onClick={() => setOpen((o) => !o)}
						aria-label="Meniu"
					>
						<Icons.Menu width="22" height="22" />
					</button>
				</div>
			</div>
			{open && (
				<div className="nav-mobile glass">
					{NavbarLinks.map(([l, h]) => (
						<a key={l} href={h} onClick={() => setOpen(false)}>
							{l}
						</a>
					))}
					<Link to="/landing" className="nav-login">
						Autentificare
					</Link>
					<button type="button" className="btn btn-amber">
						Încearcă gratuit
					</button>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
