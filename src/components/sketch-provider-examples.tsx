import { Button } from "../../registry/components/ui/button";
import { Input } from "../../registry/components/ui/input";
import { SketchProvider } from "../../registry/components/ui/sketch-provider";
import { Switch } from "../../registry/components/ui/switch";
import { CodeBlock } from "./code-block";
import { ShowcaseCard } from "./showcase-card";

const SETUP_SNIPPET = `import { SketchProvider } from "@/components/ui/sketch-provider";

export function App({ children }: { children: React.ReactNode }) {
  return <SketchProvider>{children}</SketchProvider>;
}`;

const COMPONENTS_SNIPPET = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SketchProvider } from "@/components/ui/sketch-provider";
import { Switch } from "@/components/ui/switch";

export function SignUpForm() {
  return (
    <SketchProvider seed={42}>
      <Input placeholder="you@example.com" />
      <Switch defaultChecked />
      <Button>Sign up</Button>
    </SketchProvider>
  );
}`;

const OUTLINE_SNIPPET = `import { useSketchOutline } from "@/components/ui/sketch-provider";

export function Panel({ children }: { children: React.ReactNode }) {
  const sketchOutline = useSketchOutline();

  return (
    <div className="relative isolate rounded-lg px-4 py-3">
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        className="-z-10"
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </div>
  );
}`;

const SEEDS = [42, 1234];

export function SketchProviderExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Wiring the provider up and drawing your own elements with it."
		>
			<ShowcaseCard.Row label="Wrap your app once, at the root">
				<CodeBlock code={SETUP_SNIPPET} className="w-full" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Example
				label="Every component inside redraws from the provider seed"
				code={COMPONENTS_SNIPPET}
			>
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
			</ShowcaseCard.Example>
			<ShowcaseCard.Row label="Draw any element with useSketchOutline">
				<CodeBlock code={OUTLINE_SNIPPET} className="w-full" />
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
