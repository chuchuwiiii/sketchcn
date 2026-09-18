import type { Root, RootContent } from "mdast";

function docSection(children: RootContent[]) {
	return {
		type: "mdxJsxFlowElement",
		name: "DocSection",
		attributes: [],
		children,
	} as unknown as RootContent;
}

/**
 * Wraps the body of every `##` section of a component doc in a `<DocSection>`
 * so the page renders it as a card under its heading.
 *
 * Markdown is flat, so a section is everything between its `##` heading and
 * the next one. The heading stays outside the card.
 */
export function remarkDocSections() {
	return (tree: Root) => {
		const children: RootContent[] = [];
		let inSection = false;
		let section: RootContent[] = [];

		function flush() {
			if (inSection && section.length > 0) {
				children.push(docSection(section));
			}

			inSection = false;
			section = [];
		}

		for (const node of tree.children) {
			if (node.type === "heading" && node.depth === 2) {
				flush();
				children.push(node);
				inSection = true;
				continue;
			}

			if (inSection) {
				section.push(node);
			} else {
				children.push(node);
			}
		}

		flush();
		tree.children = children;
	};
}
