import { createFileRoute } from "@tanstack/react-router";
import Hero from "#/components/Hero";
import { AnimalRegistry } from "#/components/landing-components/AnimalRegistry";
import { FinalCTA } from "#/components/landing-components/CTA";
import DashboardShowcase from "#/components/landing-components/DashboardShowcase";
import { FAQ } from "#/components/landing-components/FAQ";
import Features from "#/components/landing-components/Features";
import { Footer } from "#/components/landing-components/Footer";
import { Pricing } from "#/components/landing-components/Pricing";
import StatsStrip from "#/components/landing-components/StatsStrip";
import { Testimonials } from "#/components/landing-components/Testimonials";
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
			<DashboardShowcase />
			<AnimalRegistry />
			<Testimonials />
			<Pricing />
			<FAQ />
			<FinalCTA />
			<Footer />
		</main>
	);
}
