import { Skeleton } from "../../../registry/components/ui/skeleton";
import { Demo } from "../demo";

const LIST_ROWS = [0, 1, 2];

export function SkeletonProfileDemo() {
	return (
		<Demo>
			<div className="flex items-center gap-3">
				<Skeleton className="size-10 rounded-full" />
				<div className="flex flex-col gap-2">
					<Skeleton className="h-4 w-32" />
					<Skeleton className="h-3 w-20" />
				</div>
			</div>
		</Demo>
	);
}

export function SkeletonListDemo() {
	return (
		<Demo>
			<ul className="flex w-full flex-col gap-3">
				{LIST_ROWS.map((row) => (
					<li key={row} className="flex flex-col gap-2">
						<Skeleton className="h-4 w-1/2" />
						<Skeleton className="h-3 w-full" />
					</li>
				))}
			</ul>
		</Demo>
	);
}

export function SkeletonCalmDemo() {
	return (
		<Demo>
			<Skeleton className="h-24 w-full [--sketch-bg-hachure-gap:8]" />
		</Demo>
	);
}

export function SkeletonAngleDemo() {
	return (
		<Demo>
			<Skeleton className="h-24 w-full [--sketch-bg-hachure-angle:90]" />
		</Demo>
	);
}
