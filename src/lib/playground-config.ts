import type { CSSProperties } from "react";
import type { PaperVariant } from "../../registry/components/ui/sketch-provider";

export const FILL_STYLES = [
	"solid",
	"hachure",
	"cross-hatch",
	"zigzag",
	"dots",
	"dashed",
	"zigzag-line",
] as const;

export type FillStyle = (typeof FILL_STYLES)[number];

export type PlaygroundTheme = "light" | "dark";

export const THEME_COLOR_TOKENS = [
	"background",
	"foreground",
	"primary",
	"primary-foreground",
	"secondary",
	"muted",
	"muted-foreground",
	"accent",
	"border",
	"destructive",
] as const;

export type ThemeColorToken = (typeof THEME_COLOR_TOKENS)[number];

/*
	A colour input cannot display the oklch tokens in styles.css, so these hex
	approximations only seed the picker. An untouched token stays out of the
	config entirely, leaving the real theme value to apply.
*/
export const THEME_COLOR_SWATCHES: Record<
	PlaygroundTheme,
	Record<ThemeColorToken, string>
> = {
	dark: {
		accent: "#434343",
		background: "#252525",
		border: "#454545",
		destructive: "#ff6467",
		foreground: "#fbfbfb",
		muted: "#434343",
		"muted-foreground": "#b5b5b5",
		primary: "#ebebeb",
		"primary-foreground": "#343434",
		secondary: "#434343",
	},
	light: {
		accent: "#f7f7f7",
		background: "#ffffff",
		border: "#ebebeb",
		destructive: "#e7000b",
		foreground: "#252525",
		muted: "#f7f7f7",
		"muted-foreground": "#8e8e8e",
		primary: "#343434",
		"primary-foreground": "#fbfbfb",
		secondary: "#f7f7f7",
	},
};

export type PlaygroundConfig = {
	seed: number;
	theme: PlaygroundTheme;
	roughness: number;
	bowing: number;
	strokeWidth: number;
	fillStyle: FillStyle;
	disableMultiStroke: boolean;
	preserveVertices: boolean;
	stroke: string;
	bgFill: string;
	bgFillStyle: FillStyle;
	bgFillWeight: number;
	bgHachureGap: number;
	bgHachureAngle: number;
	bgOpacity: number;
	paper: PaperVariant;
	paperOpacity: number;
	paperPattern: string;
	colors: Partial<Record<ThemeColorToken, string>>;
};

export const CURRENT_COLOR = "currentColor";

export const DEFAULT_PLAYGROUND_CONFIG: PlaygroundConfig = {
	seed: 20_260_828,
	theme: "light",
	roughness: 1.1,
	bowing: 1.4,
	strokeWidth: 1.6,
	fillStyle: "solid",
	disableMultiStroke: true,
	preserveVertices: true,
	stroke: CURRENT_COLOR,
	bgFill: CURRENT_COLOR,
	bgFillStyle: "hachure",
	bgFillWeight: 0.4,
	bgHachureGap: 4,
	bgHachureAngle: -45,
	bgOpacity: 0.5,
	paper: "default",
	paperOpacity: 0.4,
	paperPattern: "#9c92ac",
	colors: {},
};

const CSS_VAR_NAMES = {
	bgFill: "--sketch-bg-fill",
	bgFillStyle: "--sketch-bg-fill-style",
	bgFillWeight: "--sketch-bg-fill-weight",
	bgHachureAngle: "--sketch-bg-hachure-angle",
	bgHachureGap: "--sketch-bg-hachure-gap",
	bgOpacity: "--sketch-bg-opacity",
	bowing: "--sketch-bowing",
	disableMultiStroke: "--sketch-disable-multi-stroke",
	fillStyle: "--sketch-fill-style",
	paperOpacity: "--paper-opacity",
	paperPattern: "--paper-pattern",
	preserveVertices: "--sketch-preserve-vertices",
	roughness: "--sketch-roughness",
	seed: "--sketch-seed",
	stroke: "--sketch-stroke",
	strokeWidth: "--sketch-stroke-width",
} as const;

type CssVarKey = keyof typeof CSS_VAR_NAMES;

function toCssVars(config: PlaygroundConfig): Record<string, string> {
	const vars: Record<string, string> = {};

	for (const [key, name] of Object.entries(CSS_VAR_NAMES)) {
		vars[name] = String(config[key as CssVarKey]);
	}

	/*
		Quoted so CSS minifiers cannot round the seed to six significant digits,
		which would redraw every outline between dev and production.
	*/
	vars["--sketch-seed"] = `"${config.seed}"`;

	return vars;
}

function getColorVars(config: PlaygroundConfig): [string, string][] {
	return Object.entries(config.colors).map(([token, value]) => [
		`--${token}`,
		value,
	]);
}

export function toPreviewStyle(config: PlaygroundConfig): CSSProperties {
	return {
		...toCssVars(config),
		...Object.fromEntries(getColorVars(config)),
	} as CSSProperties;
}

function getChangedCssVars(config: PlaygroundConfig): [string, string][] {
	const current = toCssVars(config);
	const defaults = toCssVars(DEFAULT_PLAYGROUND_CONFIG);

	return Object.entries(current).filter(
		([name, value]) => defaults[name] !== value,
	);
}

function declarationBlock(selector: string, vars: [string, string][]): string {
	const declarations = vars.map(([name, value]) => `  ${name}: ${value};`);

	return [`${selector} {`, ...declarations, "}"].join("\n");
}

export function buildCssSnippet(config: PlaygroundConfig): string {
	const sketchVars = getChangedCssVars(config);
	const colorVars = getColorVars(config);

	if (sketchVars.length === 0 && colorVars.length === 0) {
		return "/* Every value still matches the Sketchcn default — nothing to override. */";
	}

	const blocks: string[] = [];

	if (sketchVars.length > 0) {
		blocks.push(declarationBlock(":root", sketchVars));
	}

	// Colour tokens are per-theme in a shadcn setup, unlike the sketch variables.
	if (colorVars.length > 0) {
		blocks.push(
			declarationBlock(config.theme === "dark" ? ".dark" : ":root", colorVars),
		);
	}

	if (config.paper !== DEFAULT_PLAYGROUND_CONFIG.paper) {
		blocks.push(
			`/* Paper pattern: add data-paper="${config.paper}" to the element you want it behind. */`,
		);
	}

	return blocks.join("\n\n");
}

export function createRandomSeed(): number {
	return Math.floor(Math.random() * 2_147_483_646) + 1;
}
