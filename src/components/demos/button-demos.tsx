import { ArrowRight, Plus, Trash } from "@boxicons/react";
import { Link } from "@tanstack/react-router";
import { Button } from "../../../registry/components/ui/button";
import { Demo } from "../demo";

export function ButtonFormActionsDemo() {
	return (
		<Demo>
			<div className="flex w-full justify-end gap-2">
				<Button variant="ghost">Cancel</Button>
				<Button type="submit">
					<Plus />
					Save sketch
				</Button>
			</div>
		</Demo>
	);
}

export function ButtonAsLinkDemo() {
	return (
		<Demo>
			<Button variant="outline" render={<Link to="/docs" />}>
				Read the docs
				<ArrowRight />
			</Button>
		</Demo>
	);
}

export function ButtonConfirmDemo() {
	return (
		<Demo>
			<Button variant="destructive" size="sm">
				<Trash />
				Delete
			</Button>
		</Demo>
	);
}
