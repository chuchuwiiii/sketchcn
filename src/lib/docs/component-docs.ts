import { COMPONENT_SHOWCASES } from "../../components/component-showcases";

const MARKDOWN_BY_SLUG = new Map(
	Object.entries(
		import.meta.glob("../../../public/docs/*.md", {
			query: "?raw",
			import: "default",
			eager: true,
		}) as Record<string, string>,
	).map(([path, markdown]) => [
		path.slice(path.lastIndexOf("/") + 1, -".md".length),
		markdown,
	]),
);

export type ComponentDoc = {
	slug: string;
	title: string;
	description: string;
	markdown: string;
};

export const COMPONENT_DOCS: ComponentDoc[] = COMPONENT_SHOWCASES.flatMap(
	(showcase) => {
		const markdown = MARKDOWN_BY_SLUG.get(showcase.slug);

		if (!markdown) {
			return [];
		}

		return [
			{
				slug: showcase.slug,
				title: showcase.title,
				description: showcase.description,
				markdown,
			},
		];
	},
);

export function findComponentDoc(slug: string) {
	return COMPONENT_DOCS.find((doc) => doc.slug === slug);
}
