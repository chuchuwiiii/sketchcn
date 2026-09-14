import { createHighlighterCoreSync } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import bash from "shiki/langs/bash.mjs";
import css from "shiki/langs/css.mjs";
import tsx from "shiki/langs/tsx.mjs";
import darkPlus from "shiki/themes/dark-plus.mjs";
import lightPlus from "shiki/themes/light-plus.mjs";

export type CodeLanguage = "tsx" | "bash" | "css";

/*
	The sync highlighter keeps CodeBlock a plain component: no await, no effect,
	and the same markup on the server and the client. It needs every grammar and
	theme bundled up front, which is why languages are a closed set.
*/
const highlighter = createHighlighterCoreSync({
	engine: createJavaScriptRegexEngine(),
	langs: [tsx, bash, css],
	themes: [lightPlus, darkPlus],
});

export function highlight(code: string, lang: CodeLanguage): string {
	return highlighter.codeToHtml(code, {
		defaultColor: false,
		lang,
		themes: { dark: "dark-plus", light: "light-plus" },
	});
}
