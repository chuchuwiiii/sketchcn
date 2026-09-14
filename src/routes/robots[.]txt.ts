import { createFileRoute } from "@tanstack/react-router";
import { canonicalUrl } from "../lib/seo";

export const Route = createFileRoute("/robots.txt")({
	server: {
		handlers: {
			GET: () =>
				new Response(
					[
						"User-agent: *",
						"Allow: /",
						"",
						`Sitemap: ${canonicalUrl("/sitemap.xml")}`,
						"",
					].join("\n"),
					{ headers: { "content-type": "text/plain; charset=utf-8" } },
				),
		},
	},
});
