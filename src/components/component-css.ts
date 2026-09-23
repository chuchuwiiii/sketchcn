import { sketchCssBlocks } from "../lib/docs/sketch-css";

const DASH_WIRING = "[data-sketch-outline] path";
const ICON_WIGGLE = "@keyframes sketch-icon-wiggle";
const FILL_TRANSITION = '[data-sketch-outline] path[fill]:not([fill="none"])';
const PAPER_LAYER =
	'[data-paper]:not([data-paper="default"])::before,\n[data-slot="card"][data-variant]:not([data-variant="default"])::before';

const SKETCH_CSS_BLOCKS: Record<string, readonly string[]> = {
	button: [
		DASH_WIRING,
		"@keyframes sketch-dash-boil",
		ICON_WIGGLE,
		FILL_TRANSITION,
	],
	input: [DASH_WIRING, "@keyframes sketch-dash-boil"],
	toggle: [DASH_WIRING, "@keyframes sketch-dash-alternate", FILL_TRANSITION],
	switch: [FILL_TRANSITION],
	checkbox: [FILL_TRANSITION, "@keyframes sketch-check-boil"],
	avatar: ["@keyframes sketch-avatar-wobble"],
	alert: [ICON_WIGGLE, PAPER_LAYER],
	toast: [ICON_WIGGLE, PAPER_LAYER],
	card: [PAPER_LAYER],
	tooltip: [PAPER_LAYER],
	skeleton: [
		"@property --sketch-bg-reveal-lead",
		"@property --sketch-bg-reveal-trail",
		"[data-sketch-reveal] [data-sketch-bg]",
		"@keyframes sketch-hatch-reveal",
	],
};

/**
 * Returns the `sketch.css` rules a component relies on, or an empty string when
 * it draws through the shared outline alone and needs no rules of its own.
 *
 * @param slug Component slug, matching its entry in `COMPONENT_SHOWCASES`.
 */
export function componentSketchCss(slug: string) {
	const preludes = SKETCH_CSS_BLOCKS[slug];

	if (!preludes) {
		return "";
	}

	return sketchCssBlocks(preludes);
}
