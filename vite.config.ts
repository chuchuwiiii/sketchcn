import mdx from "@mdx-js/rollup";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";
import { remarkDocSections } from "./src/lib/mdx/remark-doc-sections.ts";

const mdxPlugin = mdx({ remarkPlugins: [remarkGfm, remarkDocSections] });

/*
  @mdx-js/rollup drops the query before filtering, so it would compile
  `*.mdx?raw` too. The docs read that raw source to serve plain markdown at
  /components/$name/md, so queried ids have to pass through untouched.
*/
const mdxSkippingRawImports = {
	...mdxPlugin,
	enforce: "pre" as const,
	transform(this: unknown, value: string, id: string) {
		if (id.includes("?")) {
			return;
		}

		return mdxPlugin.transform.call(this, value, id);
	},
};

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		nitro({ rollupConfig: { external: [/^@sentry\//] } }),
		tailwindcss(),
		tanstackStart(),
		mdxSkippingRawImports,
		viteReact({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
		babel({ presets: [reactCompilerPreset()] }),
	],
});

export default config;
