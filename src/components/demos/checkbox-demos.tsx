import { useId, useState } from "react";
import { Checkbox } from "../../../registry/components/ui/checkbox";
import { Demo } from "../demo";

const TODOS = ["Sharpen pencils", "Sketch wireframes", "Ink the final lines"];

function TermsPreview() {
	const id = useId();

	return (
		<div className="flex items-center gap-2">
			<Checkbox id={id} />
			<label htmlFor={id} className="text-sm">
				Accept terms and conditions
			</label>
		</div>
	);
}

function TodoListPreview() {
	const id = useId();
	const [done, setDone] = useState<string[]>([TODOS[0]]);

	const toggleTodo = (todo: string, checked: boolean) => {
		setDone((current) => {
			if (checked) {
				return [...current, todo];
			}

			return current.filter((item) => item !== todo);
		});
	};

	return (
		<div className="flex flex-col gap-3">
			{TODOS.map((todo, index) => (
				<div key={todo} className="flex items-center gap-2">
					<Checkbox
						id={`${id}-${index}`}
						checked={done.includes(todo)}
						onCheckedChange={(checked) => toggleTodo(todo, checked)}
					/>
					<label htmlFor={`${id}-${index}`} className="text-sm">
						{todo}
					</label>
				</div>
			))}
		</div>
	);
}

export function CheckboxWithLabelDemo() {
	return (
		<Demo>
			<TermsPreview />
		</Demo>
	);
}

export function CheckboxTodoListDemo() {
	return (
		<Demo>
			<TodoListPreview />
		</Demo>
	);
}
