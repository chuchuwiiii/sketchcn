import { Button } from "../../../registry/components/ui/button";
import { Input } from "../../../registry/components/ui/input";
import { Separator } from "../../../registry/components/ui/separator";
import { Demo } from "../demo";

export function SeparatorSignInDemo() {
	return (
		<Demo>
			<form className="flex w-full max-w-sm flex-col gap-3">
				<Input type="email" placeholder="you@sketch.app" />
				<Button type="submit">Continue with email</Button>
				<Separator>or</Separator>
				<Button variant="outline" type="button">
					Continue with GitHub
				</Button>
			</form>
		</Demo>
	);
}

export function SeparatorToolbarDemo() {
	return (
		<Demo>
			<div className="flex h-6 items-center gap-3 text-muted-foreground text-sm">
				<span>12 sketches</span>
				<Separator orientation="vertical" />
				<span>3 drafts</span>
				<Separator orientation="vertical" />
				<span>Updated today</span>
			</div>
		</Demo>
	);
}

export function SeparatorSectionDemo() {
	return (
		<Demo>
			<section className="flex w-full flex-col gap-4">
				<p className="text-sm">Everything above is the rough draft.</p>
				<Separator variant="double" />
				<p className="text-sm">Everything below is the inked version.</p>
			</section>
		</Demo>
	);
}
