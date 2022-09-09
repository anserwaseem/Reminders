import React from "react";
import Reminder from "../models/Reminder";

interface ReminderListProps {
  reminders: Reminder[];
  onRemoveReminder: (id: number) => void;
  onEditReminder: (reminder: Reminder) => void;
}

function ReminderList(props: ReminderListProps) {
  return (
    <ul className="list-group">
      {props.reminders.map((reminder) => (
        <li key={reminder.id} className="list-group-item">
          {reminder.title}
          <button
            className="btn btn-outline-danger mx-2 rounded-pill"
            onClick={() => props.onRemoveReminder(reminder.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              props.onEditReminder(new Reminder(reminder.id, reminder.title))
            }
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
