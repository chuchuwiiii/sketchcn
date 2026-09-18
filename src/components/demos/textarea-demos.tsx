import { useId, useState } from "react";
import { Button } from "../../../registry/components/ui/button";
import { Textarea } from "../../../registry/components/ui/textarea";
import { Demo } from "../demo";

const FEEDBACK_LIMIT = 120;

function FeedbackFieldPreview() {
	const [feedback, setFeedback] = useState("");

	return (
		<div className="flex w-full flex-col gap-1.5">
			<Textarea
				value={feedback}
				maxLength={FEEDBACK_LIMIT}
				onChange={(event) => setFeedback(event.target.value)}
				placeholder="What did you think?"
			/>
			<span className="self-end text-muted-foreground text-xs">
				{`${feedback.length}/${FEEDBACK_LIMIT}`}
			</span>
		</div>
	);
}

function CommentFormPreview() {
	const id = useId();

	return (
		<form className="flex w-full flex-col gap-2">
			<label htmlFor={id} className="text-sm">
				Leave a note
			</label>
			<Textarea id={id} rows={4} placeholder="Sketch a longer thought" />
			<div className="flex justify-end gap-2">
				<Button variant="ghost" type="reset">
					Clear
				</Button>
				<Button type="submit">Post</Button>
			</div>
		</form>
	);
}

export function TextareaCounterDemo() {
	return (
		<Demo>
			<FeedbackFieldPreview />
		</Demo>
	);
}

export function TextareaCommentFormDemo() {
	return (
		<Demo>
			<CommentFormPreview />
		</Demo>
	);
}
