import type { MDXComponents } from "mdx/types";
import { isValidElement, type ReactNode } from "react";
import { Card, CardContent } from "../../registry/components/ui/card";
import type { CodeLanguage } from "../lib/highlighter";
import { CodeBlock } from "./code-block";
import { InstallTabs, REGISTRY_URL } from "./install-tabs";

const REGISTRY_ITEM = new RegExp(`${REGISTRY_URL}/([a-z-]+)\\.json`);

type CodeProps = { className?: string; children?: string };

function MdxPre({ children }: { children?: ReactNode }) {
	if (!isValidElement<CodeProps>(children)) {
		return null;
	}

	const code = String(children.props.children ?? "").trimEnd();
	const registryItem = code.match(REGISTRY_ITEM);

	if (registryItem) {
		return <InstallTabs name={registryItem[1]} />;
	}

	const lang = children.props.className?.replace("language-", "").toLowerCase();

	return <CodeBlock code={code} lang={lang as CodeLanguage} />;
}

function DocSection({ children }: { children?: ReactNode }) {
	return (
		<Card className="[--card-spacing:--spacing(6)]">
			<CardContent className="flex flex-col gap-4">{children}</CardContent>
		</Card>
	);
}

export const MDX_ELEMENTS: MDXComponents = {
	h1: (props) => <h1 className="text-4xl" {...props} />,
	h2: (props) => <h2 className="mt-4 text-2xl" {...props} />,
	h3: (props) => <h3 className="mt-2 text-xl" {...props} />,
	p: (props) => (
		<p className="text-muted-foreground leading-relaxed" {...props} />
	),
	a: (props) => (
		<a
			className="underline decoration-dashed underline-offset-4 transition-colors hover:text-foreground"
			{...props}
		/>
	),
	ul: (props) => (
		<ul
			className="flex list-disc flex-col gap-1 pl-5 text-muted-foreground"
			{...props}
		/>
	),
	ol: (props) => (
		<ol
			className="flex list-decimal flex-col gap-1 pl-5 text-muted-foreground"
			{...props}
		/>
	),
	code: (props) => (
		<code
			className="rounded bg-muted/60 px-1 py-0.5 font-mono text-sm"
			{...props}
		/>
	),
	pre: MdxPre,
	DocSection,
	table: (props) => (
		<div className="overflow-x-auto">
			<table
				className="w-full min-w-lg border-collapse text-left text-sm"
				{...props}
			/>
		</div>
	),
	thead: (props) => (
		<thead className="text-muted-foreground text-xs" {...props} />
	),
	tr: (props) => (
		<tr className="border-border/60 border-t align-top" {...props} />
	),
	th: (props) => <th className="pr-4 pb-2 font-normal" {...props} />,
	td: (props) => <td className="py-2 pr-4 text-muted-foreground" {...props} />,
};
