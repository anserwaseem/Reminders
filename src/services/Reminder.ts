import axios from "axios";
import Reminder from "../models/Reminder";

class ReminderService {
  https = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    return (await this.https.get<Reminder[]>("todos")).data;
  }

  async addReminder(title: string) {
    return (await this.https.post<Reminder>("todos", { title })).data;
  }

  async removeReminder(id: number) {
    return (await this.https.delete<Reminder>(`todos/${id}`)).data;
  }

  async updateReminder(reminder: Reminder) {
    try {
      const response = await this.https.put<Reminder>(
        `todos/${reminder.id}`,
        reminder
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new ReminderService();
