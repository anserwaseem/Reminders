import React, { useState } from "react";

export default function NewReminder() {
  const [title, setTitle] = useState("");
  return (
    <form>
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
