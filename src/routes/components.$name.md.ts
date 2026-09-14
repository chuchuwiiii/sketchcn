import { createFileRoute } from "@tanstack/react-router";
import { findComponentDoc } from "../lib/docs/component-docs";

export const Route = createFileRoute("/components/$name/md")({
	server: {
		handlers: {
			GET: ({ params }) => {
				const doc = findComponentDoc(params.name);

				if (!doc) {
					return new Response("Not found", { status: 404 });
				}

				return new Response(doc.markdown, {
					headers: { "content-type": "text/markdown; charset=utf-8" },
				});
			},
		},
	},
});
