import { cn } from "cn";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";

function ShowcaseCardRoot({
	title,
	description,
	className,
	children,
}: {
	title: string;
	description: string;
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle className="text-xl">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-5">{children}</CardContent>
		</Card>
	);
}

function ShowcaseCardRow({
	label,
	labelClassName,
	note,
	children,
}: {
	label: string;
	labelClassName?: string;
	note?: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between gap-2">
				<span className={cn("text-muted-foreground text-xs", labelClassName)}>
					{label}
				</span>
				{note ? (
					<span className="text-muted-foreground text-xs">{note}</span>
				) : null}
			</div>
			<div className="flex flex-wrap items-center gap-2 p-4">{children}</div>
		</div>
	);
}

function ShowcaseCardNote({
	href,
	linkLabel,
	children,
}: {
	href: string;
	linkLabel: string;
	children?: React.ReactNode;
}) {
	return (
		<>
			{children}
			<a href={href} target="_blank" rel="noreferrer" className="underline">
				{linkLabel}
			</a>
		</>
	);
}

export const ShowcaseCard = Object.assign(ShowcaseCardRoot, {
	Row: ShowcaseCardRow,
	Note: ShowcaseCardNote,
});
