"use client";
import { useActionState } from "react";
import { updateMessage } from "../app/actions";

export default function ActionStateForm() {
  const [message, formAction] = useActionState(updateMessage, "");
  return (
    <form action={formAction} style={{ marginBottom: 24 }}>
      <input name="message" placeholder="Type something..." />
      <button type="submit">Send</button>
      <div>Message: {message}</div>
    </form>
  );
} 