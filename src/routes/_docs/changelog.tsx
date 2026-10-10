import { createFileRoute } from "@tanstack/react-router";
import Changelog from "../../../CHANGELOG.md";
import { MDX_ELEMENTS } from "../../components/mdx-components";
import { seo } from "../../lib/seo";

export const Route = createFileRoute("/_docs/changelog")({
	head: () =>
		seo({
			title: "Changelog — Sketchcn",
			description:
				"Every notable change to Sketchcn: new components, fixes, and updates to the sketch styles.",
			path: "/changelog",
		}),
	component: ChangelogPage,
});

function ChangelogPage() {
	return (
		<article className="mx-auto flex w-full max-w-4xl flex-col gap-4 p-8">
			<Changelog components={MDX_ELEMENTS} />
		</article>
	);
}
