import { Search } from "@boxicons/react";
import { useId, useState } from "react";
import { Button } from "../../../registry/components/ui/button";
import { Input } from "../../../registry/components/ui/input";
import { Demo } from "../demo";

function LabelledFieldPreview() {
	const id = useId();

	return (
		<div className="flex w-full flex-col gap-1.5">
			<label htmlFor={id} className="text-sm">
				Email
			</label>
			<Input id={id} type="email" placeholder="hello@chuwii.com" />
			<span className="text-muted-foreground text-xs">
				{"We only use this to send you sketches."}
			</span>
		</div>
	);
}

function SearchBarPreview() {
	const [term, setTerm] = useState("");

	return (
		<div className="flex w-full items-center gap-2">
			<Input
				value={term}
				onChange={(event) => setTerm(event.target.value)}
				placeholder="Search sketches"
			/>
			<Button size="icon" aria-label="Search">
				<Search />
			</Button>
		</div>
	);
}

function UsernameFieldPreview() {
	const [username, setUsername] = useState("");
	const isTooShort = username.length > 0 && username.length < 3;

	return (
		<div className="flex w-full flex-col gap-1.5">
			<Input
				value={username}
				aria-invalid={isTooShort}
				onChange={(event) => setUsername(event.target.value)}
				placeholder="Username"
			/>
			{isTooShort && (
				<span className="text-destructive text-xs">
					{"Usernames need at least 3 characters."}
				</span>
			)}
		</div>
	);
}

export function InputLabelledDemo() {
	return (
		<Demo>
			<LabelledFieldPreview />
		</Demo>
	);
}

export function InputSearchDemo() {
	return (
		<Demo>
			<SearchBarPreview />
		</Demo>
	);
}

export function InputValidationDemo() {
	return (
		<Demo>
			<UsernameFieldPreview />
		</Demo>
	);
}
