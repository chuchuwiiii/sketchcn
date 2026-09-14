import { createFileRoute } from "@tanstack/react-router";
import { COMPONENT_SHOWCASES } from "../components/component-showcases";
import { canonicalUrl } from "../lib/seo";

const STATIC_PATHS = ["/", "/docs", "/playground", "/components"];

function urlEntry(path: string) {
	return `\t<url><loc>${canonicalUrl(path)}</loc></url>`;
}

export const Route = createFileRoute("/sitemap.xml")({
	server: {
		handlers: {
			GET: () => {
				const paths = [
					...STATIC_PATHS,
					...COMPONENT_SHOWCASES.map(
						(showcase) => `/components/${showcase.slug}`,
					),
				];

				const body = [
					'<?xml version="1.0" encoding="UTF-8"?>',
					'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
					...paths.map(urlEntry),
					"</urlset>",
					"",
				].join("\n");

				return new Response(body, {
					headers: { "content-type": "application/xml; charset=utf-8" },
				});
			},
		},
	},
});
