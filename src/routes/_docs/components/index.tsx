import { ArrowRight } from "@boxicons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../../../registry/components/ui/card";
import { COMPONENT_SHOWCASES } from "../../../components/component-showcases";
import { seo } from "../../../lib/seo";

export const Route = createFileRoute("/_docs/components/")({
	head: () =>
		seo({
			title: "Components — Sketchcn",
			description:
				"Browse every Sketchcn component: hand-drawn buttons, cards, dialogs, sheets, tabs, inputs and more, ready to install with the shadcn CLI.",
			path: "/components",
		}),
	component: ComponentsIndex,
});

function ComponentsIndex() {
	return (
		<div className="mx-auto flex w-full max-w-5xl flex-col gap-8 p-8">
			<header className="flex flex-col gap-2">
				<h1 className="text-4xl">Components</h1>
				<p className="text-muted-foreground">
					{"Every Sketchcn component, hand-drawn and ready to copy."}
				</p>
			</header>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{COMPONENT_SHOWCASES.map(({ slug, title, description }) => (
					<Link key={slug} to="/components/$name" params={{ name: slug }}>
						<Card className="h-full transition-transform hover:-translate-y-1">
							<CardHeader>
								<CardTitle className="flex items-center justify-between gap-2 text-xl">
									{title}
									<ArrowRight className="size-4" />
								</CardTitle>
								<CardDescription>{description}</CardDescription>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
