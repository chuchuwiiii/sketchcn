import { Check, Copy } from "@boxicons/react";
import { cn } from "cn";
import { type ComponentType, useState } from "react";
import { Button } from "../../registry/components/ui/button";

export function CopyButton({
	value,
	icon: Icon = Copy,
	label = "Copy to clipboard",
	className,
}: {
	value: string | (() => string);
	icon?: ComponentType<{ className?: string }>;
	label?: string;
	className?: string;
}) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(
			typeof value === "function" ? value() : value,
		);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<Button
			type="button"
			variant="ghost"
			size="icon-sm"
			aria-label={copied ? "Copied" : label}
			className={cn("shrink-0", className)}
			onClick={handleCopy}
		>
			<span className="relative size-3.5">
				<Check
					className={cn(
						"absolute inset-0 size-3.5 scale-75 text-primary opacity-0 transition-all duration-200",
						copied && "scale-100 opacity-100",
					)}
				/>
				<Icon
					className={cn(
						"absolute inset-0 size-3.5 scale-100 opacity-100 transition-all duration-200",
						copied && "scale-75 opacity-0",
					)}
				/>
			</span>
		</Button>
	);
}
