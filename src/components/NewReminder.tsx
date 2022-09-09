import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder(title: String): void;
}

export default function NewReminder(props: NewReminderProps) {
  const [title, setTitle] = useState("");

  const submitReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    props.onAddReminder(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitReminder}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary rounded-pill my-2">
        Add Reminder
      </button>
    </form>
  );
}
