import { DiceRoll, RefreshCcw, X } from "@boxicons/react";
import { useId } from "react";
import { Button } from "../../registry/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";
import {
	NativeSelect,
	NativeSelectOption,
} from "../../registry/components/ui/native-select";
import { PAPER_VARIANTS } from "../../registry/components/ui/sketch-provider";
import { Switch } from "../../registry/components/ui/switch";
import {
	CURRENT_COLOR,
	createRandomSeed,
	DEFAULT_PLAYGROUND_CONFIG,
	FILL_STYLES,
	type PlaygroundConfig,
	THEME_COLOR_SWATCHES,
	THEME_COLOR_TOKENS,
	type ThemeColorToken,
} from "../lib/playground-config";

type ConfigPatch = Partial<PlaygroundConfig>;

type ControlsProps = {
	config: PlaygroundConfig;
	onChange: (patch: ConfigPatch) => void;
	onReset: () => void;
};

function ControlGroup({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<Card size="sm">
			<CardHeader>
				<CardTitle className="text-muted-foreground text-xs uppercase tracking-wide">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">{children}</CardContent>
		</Card>
	);
}

function SliderField({
	label,
	value,
	min,
	max,
	step,
	onChange,
}: {
	label: string;
	value: number;
	min: number;
	max: number;
	step: number;
	onChange: (value: number) => void;
}) {
	const id = useId();

	return (
		<div className="flex flex-col gap-1.5">
			<div className="flex items-baseline justify-between gap-2">
				<label htmlFor={id} className="text-sm">
					{label}
				</label>
				<span className="font-mono text-muted-foreground text-xs tabular-nums">
					{value}
				</span>
			</div>
			<input
				id={id}
				type="range"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={(event) => onChange(Number(event.target.value))}
				className="h-1 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
			/>
		</div>
	);
}

function SelectField<Value extends string>({
	label,
	value,
	options,
	onChange,
}: {
	label: string;
	value: Value;
	options: readonly Value[];
	onChange: (value: Value) => void;
}) {
	const id = useId();

	return (
		<div className="flex items-center justify-between gap-2">
			<label htmlFor={id} className="text-sm">
				{label}
			</label>
			<NativeSelect
				id={id}
				size="sm"
				value={value}
				onChange={(event) => onChange(event.target.value as Value)}
			>
				{options.map((option) => (
					<NativeSelectOption key={option} value={option}>
						{option}
					</NativeSelectOption>
				))}
			</NativeSelect>
		</div>
	);
}

function SwitchField({
	label,
	checked,
	onChange,
}: {
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
}) {
	const id = useId();

	return (
		<div className="flex items-center justify-between gap-2">
			<label htmlFor={id} className="text-sm">
				{label}
			</label>
			<Switch id={id} checked={checked} onCheckedChange={onChange} />
		</div>
	);
}

function ColorField({
	label,
	value,
	fallbackColor,
	allowCurrentColor = false,
	onChange,
}: {
	label: string;
	value: string;
	fallbackColor: string;
	allowCurrentColor?: boolean;
	onChange: (value: string) => void;
}) {
	const id = useId();
	const inheritsColor = value === CURRENT_COLOR;

	return (
		<div className="flex items-center justify-between gap-2">
			<label htmlFor={id} className="text-sm">
				{label}
			</label>
			<div className="flex items-center gap-2">
				{allowCurrentColor ? (
					<Button
						type="button"
						variant={inheritsColor ? "secondary" : "ghost"}
						size="xs"
						onClick={() =>
							onChange(inheritsColor ? fallbackColor : CURRENT_COLOR)
						}
					>
						inherit
					</Button>
				) : null}
				<input
					id={id}
					type="color"
					value={inheritsColor ? fallbackColor : value}
					disabled={inheritsColor}
					onChange={(event) => onChange(event.target.value)}
					className="size-7 cursor-pointer rounded-md border border-border bg-transparent p-0.5 disabled:cursor-not-allowed disabled:opacity-40"
				/>
			</div>
		</div>
	);
}

function ThemeColorField({
	token,
	config,
	onChange,
}: {
	token: ThemeColorToken;
	config: PlaygroundConfig;
	onChange: (patch: ConfigPatch) => void;
}) {
	const id = useId();
	const override = config.colors[token];
	const swatch = override ?? THEME_COLOR_SWATCHES[config.theme][token];

	const setColor = (value: string | undefined) => {
		const colors = { ...config.colors };

		if (value === undefined) {
			delete colors[token];
		} else {
			colors[token] = value;
		}

		onChange({ colors });
	};

	return (
		<div className="flex items-center gap-2">
			<input
				id={id}
				type="color"
				value={swatch}
				onChange={(event) => setColor(event.target.value)}
				className="size-6 shrink-0 cursor-pointer rounded-md border border-border bg-transparent p-0.5"
			/>
			<label htmlFor={id} className="min-w-0 truncate text-xs" title={token}>
				{token}
			</label>
			{override ? (
				<Button
					type="button"
					variant="ghost"
					size="icon-sm"
					aria-label={`Reset ${token}`}
					className="ml-auto"
					onClick={() => setColor(undefined)}
				>
					<X />
				</Button>
			) : null}
		</div>
	);
}

export function PlaygroundControls({
	config,
	onChange,
	onReset,
}: ControlsProps) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between gap-2">
				<h2 className="text-lg">Controls</h2>
				<Button type="button" variant="ghost" size="sm" onClick={onReset}>
					<RefreshCcw />
					Reset
				</Button>
			</div>

			<ControlGroup title="Seed & theme">
				<div className="flex items-center justify-between gap-2">
					<span className="text-sm">Seed</span>
					<div className="flex items-center gap-2">
						<span className="font-mono text-muted-foreground text-xs tabular-nums">
							{config.seed}
						</span>
						<Button
							type="button"
							variant="outline"
							size="icon-sm"
							aria-label="Randomise seed"
							onClick={() => onChange({ seed: createRandomSeed() })}
						>
							<DiceRoll />
						</Button>
					</div>
				</div>
				<SelectField
					label="Theme"
					value={config.theme}
					options={["light", "dark"] as const}
					onChange={(theme) => onChange({ theme })}
				/>
			</ControlGroup>

			<ControlGroup title="Stroke">
				<SliderField
					label="Roughness"
					value={config.roughness}
					min={0}
					max={4}
					step={0.1}
					onChange={(roughness) => onChange({ roughness })}
				/>
				<SliderField
					label="Bowing"
					value={config.bowing}
					min={0}
					max={6}
					step={0.1}
					onChange={(bowing) => onChange({ bowing })}
				/>
				<SliderField
					label="Stroke width"
					value={config.strokeWidth}
					min={1}
					max={6}
					step={0.1}
					onChange={(strokeWidth) => onChange({ strokeWidth })}
				/>
				<SelectField
					label="Fill style"
					value={config.fillStyle}
					options={FILL_STYLES}
					onChange={(fillStyle) => onChange({ fillStyle })}
				/>
				<SwitchField
					label="Single stroke"
					checked={config.disableMultiStroke}
					onChange={(disableMultiStroke) => onChange({ disableMultiStroke })}
				/>
				<SwitchField
					label="Preserve vertices"
					checked={config.preserveVertices}
					onChange={(preserveVertices) => onChange({ preserveVertices })}
				/>
			</ControlGroup>

			<ControlGroup title="Background hatching">
				<SelectField
					label="Fill style"
					value={config.bgFillStyle}
					options={FILL_STYLES}
					onChange={(bgFillStyle) => onChange({ bgFillStyle })}
				/>
				<SliderField
					label="Fill weight"
					value={config.bgFillWeight}
					min={0.1}
					max={3}
					step={0.1}
					onChange={(bgFillWeight) => onChange({ bgFillWeight })}
				/>
				<SliderField
					label="Hachure gap"
					value={config.bgHachureGap}
					min={1}
					max={20}
					step={0.5}
					onChange={(bgHachureGap) => onChange({ bgHachureGap })}
				/>
				<SliderField
					label="Hachure angle"
					value={config.bgHachureAngle}
					min={-90}
					max={90}
					step={1}
					onChange={(bgHachureAngle) => onChange({ bgHachureAngle })}
				/>
				<SliderField
					label="Opacity"
					value={config.bgOpacity}
					min={0}
					max={1}
					step={0.05}
					onChange={(bgOpacity) => onChange({ bgOpacity })}
				/>
			</ControlGroup>

			<ControlGroup title="Theme colors">
				<div className="grid grid-cols-1 gap-1">
					{THEME_COLOR_TOKENS.map((token) => (
						<ThemeColorField
							key={token}
							token={token}
							config={config}
							onChange={onChange}
						/>
					))}
				</div>
			</ControlGroup>

			<ControlGroup title="Sketch colors">
				<ColorField
					label="Stroke"
					value={config.stroke}
					fallbackColor="#1c1917"
					allowCurrentColor
					onChange={(stroke) => onChange({ stroke })}
				/>
				<ColorField
					label="Hatch fill"
					value={config.bgFill}
					fallbackColor="#1c1917"
					allowCurrentColor
					onChange={(bgFill) => onChange({ bgFill })}
				/>
				<ColorField
					label="Paper pattern"
					value={config.paperPattern}
					fallbackColor={DEFAULT_PLAYGROUND_CONFIG.paperPattern}
					onChange={(paperPattern) => onChange({ paperPattern })}
				/>
			</ControlGroup>

			<ControlGroup title="Paper">
				<SelectField
					label="Pattern"
					value={config.paper}
					options={PAPER_VARIANTS}
					onChange={(paper) => onChange({ paper })}
				/>
				<SliderField
					label="Opacity"
					value={config.paperOpacity}
					min={0}
					max={1}
					step={0.05}
					onChange={(paperOpacity) => onChange({ paperOpacity })}
				/>
			</ControlGroup>
		</div>
	);
}
