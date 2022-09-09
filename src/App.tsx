import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import ReminderService from "./services/Reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = async (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminder(title);
    newReminder.id =
      Math.max(...reminders.map((reminder) => reminder.id), 1) + 1;
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <header>
        <h1>Reminders</h1>
      </header>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList reminders={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
