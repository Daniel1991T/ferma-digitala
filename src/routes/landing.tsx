import { createFileRoute } from "@tanstack/react-router";
import Hero from "#/components/Hero";
import NavBar from "#/components/Navbar";

export const Route = createFileRoute("/landing")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main>
			<NavBar />
			<Hero />
		</main>
	);
}
