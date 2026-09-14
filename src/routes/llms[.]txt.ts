import { createFileRoute } from "@tanstack/react-router";
import { COMPONENT_DOCS } from "../lib/docs/component-docs";
import { canonicalUrl, SITE } from "../lib/seo";

export const Route = createFileRoute("/llms.txt")({
	server: {
		handlers: {
			GET: () => {
				const body = [
					`# ${SITE.name}`,
					"",
					`> ${SITE.description}`,
					"",
					"## Components",
					"",
					...COMPONENT_DOCS.map(
						(doc) =>
							`- [${doc.title}](${canonicalUrl(`/components/${doc.slug}/md`)}): ${doc.description}`,
					),
					"",
				].join("\n");

				return new Response(body, {
					headers: { "content-type": "text/plain; charset=utf-8" },
				});
			},
		},
	},
});
