import { ArrowLeft } from "@boxicons/react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "../../../../registry/components/ui/button";
import { findComponentShowcase } from "../../../components/component-showcases";
import { InstallTabs } from "../../../components/install-tabs";
import { ShowcaseCard } from "../../../components/showcase-card";
import { canonicalUrl, seo } from "../../../lib/seo";

export const Route = createFileRoute("/_docs/components/$name")({
	loader: ({ params }) => {
		if (!findComponentShowcase(params.name)) {
			throw notFound();
		}
	},
	head: ({ params }) => {
		const showcase = findComponentShowcase(params.name);

		if (!showcase) {
			return { meta: [{ name: "robots", content: "noindex" }] };
		}

		const path = `/components/${showcase.slug}`;
		const { meta, links } = seo({
			title: `${showcase.title} — Sketchcn`,
			description: `${showcase.description} Install it with the shadcn CLI and drop it into your React app.`,
			path,
		});

		return {
			links,
			meta,
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{
								"@type": "ListItem",
								position: 1,
								name: "Components",
								item: canonicalUrl("/components"),
							},
							{
								"@type": "ListItem",
								position: 2,
								name: showcase.title,
								item: canonicalUrl(path),
							},
						],
					}),
				},
			],
		};
	},
	component: ComponentPage,
	notFoundComponent: ComponentNotFound,
});

function ComponentPage() {
	const { name } = Route.useParams();
	const showcase = findComponentShowcase(name);

	if (!showcase) {
		return <ComponentNotFound />;
	}

	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8">
			<section id="preview" className="scroll-mt-8">
				<showcase.Showcase />
			</section>
			<section id="installation" className="scroll-mt-8">
				<ShowcaseCard
					title="Installation"
					description={`Add ${showcase.title} with the shadcn CLI.`}
				>
					<InstallTabs name={showcase.slug} />
				</ShowcaseCard>
			</section>
			{showcase.Examples && (
				<section id="examples" className="scroll-mt-8">
					<showcase.Examples />
				</section>
			)}
		</div>
	);
}

function ComponentNotFound() {
	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-4 p-8">
			<h1 className="text-3xl">{"We haven't sketched that one yet"}</h1>
			<p className="text-muted-foreground">
				{"That component does not exist in the Sketchcn registry."}
			</p>
			<Link to="/components">
				<Button variant="outline">
					<ArrowLeft />
					Browse components
				</Button>
			</Link>
		</div>
	);
}
