import { writeFileSync } from "node:fs";
import { RoughGenerator } from "roughjs/bin/generator.js";

const SIZE = 512;
const CENTER = SIZE / 2;
const TURNS = 2;
const SPIRAL_RADIUS = { OUTER: 190, INNER: 46 };
const INK = "#141414";
const PAPER = "#f4f1ea";
const BACKGROUND = "#ffffff";

const gen = new RoughGenerator({});

function spiralPoints(outer, inner, turns, steps = 96) {
	const totalAngle = turns * Math.PI * 2;
	const points = [];
	for (let i = 0; i <= steps; i++) {
		const t = i / steps;
		const angle = -t * totalAngle;
		const radius = outer + (inner - outer) * t;
		points.push([
			CENTER + radius * Math.cos(angle - Math.PI / 2),
			CENTER + radius * Math.sin(angle - Math.PI / 2),
		]);
	}
	return points;
}

function toPaths(drawable) {
	return gen
		.toPaths(drawable)
		.map(
			(p) =>
				`<path d="${p.d}" fill="${p.fill || "none"}" stroke="${p.stroke || "none"}" stroke-width="${p.strokeWidth || 0}" stroke-linecap="round" stroke-linejoin="round"/>`,
		)
		.join("\n\t");
}

function svg(body) {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}" fill="none">
	<rect width="${SIZE}" height="${SIZE}" fill="${BACKGROUND}"/>
	${body}
</svg>
`;
}

const spiralStroke = {
	stroke: INK,
	strokeWidth: 12,
	roughness: 2.4,
	bowing: 2.4,
	seed: 42,
	curveFitting: 0.94,
	disableMultiStroke: true,
};

const variants = {
	logo: () => svg(toPaths(gen.curve(spiralPoints(SPIRAL_RADIUS.OUTER, SPIRAL_RADIUS.INNER, TURNS), spiralStroke))),
	"logo-ring": () =>
		svg(
			[
				toPaths(
					gen.circle(CENTER, CENTER, 484, {
						stroke: INK,
						strokeWidth: 7,
						roughness: 1.6,
						bowing: 1.4,
						seed: 7,
						disableMultiStroke: true,
					}),
				),
				toPaths(gen.curve(spiralPoints(150, 40, TURNS), { ...spiralStroke, strokeWidth: 11 })),
			].join("\n\t"),
		),
	"logo-badge": () =>
		svg(
			[
				toPaths(
					gen.rectangle(14, 14, SIZE - 28, SIZE - 28, {
						fill: PAPER,
						fillStyle: "solid",
						stroke: INK,
						strokeWidth: 7,
						roughness: 2,
						seed: 11,
						disableMultiStroke: true,
					}),
				),
				toPaths(gen.curve(spiralPoints(154, 42, TURNS), { ...spiralStroke, strokeWidth: 11 })),
			].join("\n\t"),
		),
};

for (const [name, build] of Object.entries(variants)) {
	writeFileSync(new URL(`../public/${name}.svg`, import.meta.url), build());
	console.log(`public/${name}.svg`);
}
