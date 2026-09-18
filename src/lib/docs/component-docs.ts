import type { MDXProps } from "mdx/types";
import type { ComponentType } from "react";
import { COMPONENT_SHOWCASES } from "../../components/component-showcases";

const JSX_ONLY_LINE = /^<[A-Z][^>]*\/>$/;
const FENCE = "```";
const BLANK_RUN = /\n{3,}/g;

function docsBySlug<T>(modules: Record<string, T>) {
	return new Map(
		Object.entries(modules).map(([path, module]) => [
			path.slice(path.lastIndexOf("/") + 1, -".mdx".length),
			module,
		]),
	);
}

const CONTENT_BY_SLUG = docsBySlug(
	import.meta.glob("../../docs/*.mdx", {
		import: "default",
		eager: true,
	}) as Record<string, ComponentType<MDXProps>>,
);

const SOURCE_BY_SLUG = docsBySlug(
	import.meta.glob("../../docs/*.mdx", {
		query: "?raw",
		import: "default",
		eager: true,
	}) as Record<string, string>,
);

/**
 * Strips the JSX an `.mdx` doc renders through, leaving plain markdown.
 *
 * The preamble before the first heading holds the demo imports, and the only
 * JSX in the body is a self-closing component on its own line. Code fences are
 * tracked so a snippet that looks like either survives untouched.
 */
function toMarkdown(source: string) {
	const lines = source.split("\n");
	const body = lines.slice(lines.findIndex((line) => line.startsWith("#")));
	let insideFence = false;

	return body
		.filter((line) => {
			if (line.startsWith(FENCE)) {
				insideFence = !insideFence;
				return true;
			}

			return insideFence || !JSX_ONLY_LINE.test(line.trim());
		})
		.join("\n")
		.replace(BLANK_RUN, "\n\n")
		.trim();
}

export type ComponentDoc = {
	slug: string;
	title: string;
	description: string;
	markdown: string;
};

export const COMPONENT_DOCS: ComponentDoc[] = COMPONENT_SHOWCASES.flatMap(
	(showcase) => {
		const source = SOURCE_BY_SLUG.get(showcase.slug);

		if (!source) {
			return [];
		}

		return [
			{
				slug: showcase.slug,
				title: showcase.title,
				description: showcase.description,
				markdown: `${toMarkdown(source)}\n`,
			},
		];
	},
);

export function findComponentDoc(slug: string) {
	return COMPONENT_DOCS.find((doc) => doc.slug === slug);
}

export function findComponentDocContent(slug: string) {
	return CONTENT_BY_SLUG.get(slug);
}
