import { createFileRoute } from "@tanstack/react-router";
import Hero from "#/components/Hero";
import Features from "#/components/landing-components/Features";
import StatsStrip from "#/components/landing-components/StatsStrip";
import NavBar from "#/components/Navbar";

export const Route = createFileRoute("/landing")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main>
			<NavBar />
			<Hero />
			<StatsStrip />
			<Features />
		</main>
	);
}
