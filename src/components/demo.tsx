import type { ReactNode } from "react";

export function Demo({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-wrap items-center gap-3 p-4">{children}</div>
	);
}
