import sketchCss from "../../../registry/components/ui/sketch.css?raw";

export const SKETCH_CSS = sketchCss;

const LEADING_COMMENTS = /^(?:\s*\/\*[\s\S]*?\*\/)*\s*/;
const BLOCKS_BY_PRELUDE = new Map(parseTopLevelBlocks(sketchCss));

function parseTopLevelBlocks(css: string): [string, string][] {
	const blocks: [string, string][] = [];
	let depth = 0;
	let start = 0;

	for (let index = 0; index < css.length; index += 1) {
		const character = css[index];

		if (character === "{") {
			depth += 1;
			continue;
		}

		if (character !== "}") {
			continue;
		}

		depth -= 1;

		if (depth > 0) {
			continue;
		}

		const block = css.slice(start, index + 1).trim();
		const rule = block.replace(LEADING_COMMENTS, "");

		blocks.push([rule.slice(0, rule.indexOf("{")).trim(), block]);
		start = index + 1;
	}

	return blocks;
}

/**
 * Returns the named top-level blocks of `sketch.css`, in the order asked for.
 *
 * @param preludes Block preludes, the text before the first brace, such as `@keyframes sketch-dash-boil`.
 * @returns The blocks joined by a blank line, or an empty string when none matched.
 */
export function sketchCssBlocks(preludes: readonly string[]) {
	return preludes
		.map((prelude) => BLOCKS_BY_PRELUDE.get(prelude))
		.filter((block) => block !== undefined)
		.join("\n\n");
}
