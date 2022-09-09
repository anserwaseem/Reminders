import React, { useState } from "react";
import Reminder from "../models/Reminder";

interface ReminderListProps {
  reminders: Reminder[];
  onRemoveReminder: (id: number) => void;
  onUpdateReminder: (reminder: Reminder) => void;
}

const onEditReminder = (
  editedReminder: Reminder,
  onUpdateReminder: (reminder: Reminder) => void
) => {
  onUpdateReminder(editedReminder);
};

function ReminderList(props: ReminderListProps) {
  const [isEditable, setIsEditable] = useState(false);
  const [editButtonName, setEditButtonName] = useState("Edit");

  return (
    <ul className="list-group">
      {props.reminders.map((reminder) => (
        <li key={reminder.id} className="list-group-item">
          {!isEditable ? (
            reminder.title
          ) : (
            <input
              type="text"
              value={reminder.title}
              onChange={(e) =>
                props.onUpdateReminder(
                  new Reminder(reminder.id, e.target.value)
                )
              }
            />
          )}
          <button
            className="btn btn-outline-danger mx-2 rounded-pill"
            onClick={() => props.onRemoveReminder(reminder.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setIsEditable(true);
              setEditButtonName("Update");
            }}
          >
            {editButtonName}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
