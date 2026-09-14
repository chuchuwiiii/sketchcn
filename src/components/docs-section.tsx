import { cn } from "cn";
import type { ReactNode } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";
import type { PaperVariant } from "../../registry/components/ui/sketch-provider";

export type DocsReferenceRow = {
	name: string;
	type: string;
	defaultValue?: string;
	cssVariable?: string;
	description: string;
};

function DocsSectionRoot({
	id,
	title,
	description,
	variant,
	children,
}: {
	id: string;
	title: string;
	description: string;
	variant?: PaperVariant;
	children: ReactNode;
}) {
	return (
		<Card id={id} variant={variant} className="scroll-mt-8">
			<CardHeader>
				<CardTitle className="text-xl">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-5">{children}</CardContent>
		</Card>
	);
}

function DocsSectionBlock({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<div className="flex flex-col gap-2">
			<span className="text-muted-foreground text-xs">{label}</span>
			{children}
		</div>
	);
}

function DocsSectionReference({ rows }: { rows: readonly DocsReferenceRow[] }) {
	const hasCssVariable = rows.some((row) => row.cssVariable !== undefined);

	return (
		<div className="overflow-x-auto">
			<table
				className={cn(
					"w-full border-collapse text-left text-sm",
					hasCssVariable ? "min-w-2xl" : "min-w-lg",
				)}
			>
				<thead className="text-muted-foreground text-xs">
					<tr>
						<th className="pb-2 pr-4 font-normal">Name</th>
						<th className="pb-2 pr-4 font-normal">Type</th>
						<th className="pb-2 pr-4 font-normal">Default</th>
						{hasCssVariable && (
							<th className="pb-2 pr-4 font-normal">CSS variable</th>
						)}
						<th className="pb-2 font-normal">Description</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr key={row.name} className="border-border/60 border-t align-top">
							<td className="py-2 pr-4 font-mono text-xs">{row.name}</td>
							<td className="py-2 pr-4 font-mono text-muted-foreground text-xs">
								{row.type}
							</td>
							<td className="py-2 pr-4 font-mono text-muted-foreground text-xs">
								{row.defaultValue ?? "—"}
							</td>
							{hasCssVariable && (
								<td className="whitespace-nowrap py-2 pr-4 font-mono text-muted-foreground text-xs">
									{row.cssVariable ?? "—"}
								</td>
							)}
							<td className="py-2 text-muted-foreground">{row.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export const DocsSection = Object.assign(DocsSectionRoot, {
	Block: DocsSectionBlock,
	Reference: DocsSectionReference,
});
