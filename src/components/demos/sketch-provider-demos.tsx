import { Button } from "../../../registry/components/ui/button";
import { Input } from "../../../registry/components/ui/input";
import { SketchProvider } from "../../../registry/components/ui/sketch-provider";
import { Switch } from "../../../registry/components/ui/switch";
import { Demo } from "../demo";

const SEEDS = [42, 1234];

export function SketchProviderComponentsDemo() {
	return (
		<Demo>
			{SEEDS.map((seed) => (
				<SketchProvider key={seed} seed={seed}>
					<div className="flex flex-wrap items-center gap-3">
						<span className="text-muted-foreground text-xs">{`seed ${seed}`}</span>
						<Input
							className="w-44"
							placeholder="you@example.com"
							readOnly
							value=""
						/>
						<Switch defaultChecked />
						<Button size="sm">Sign up</Button>
					</div>
				</SketchProvider>
			))}
		</Demo>
	);
}
