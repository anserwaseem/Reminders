import axios from "axios";
import Reminder from "../models/Reminder";

class ReminderService {
  https = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    return await this.https.get("todos");
  }

  async addReminder(reminder: Reminder) {
    return await this.https.post("todos", reminder);
  }

  async removeReminder(id: number) {
    return await this.https.delete(`todos/${id}`);
  }
}

export default new ReminderService();
