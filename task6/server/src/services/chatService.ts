import { IMessageProps } from "../common/types/messanger";
import { Chat } from "../models/Chat";
import messageService from "./messageService";
import socketService from "./socketService";
import userService from "./userService";

class ChatService {
  async create(data: IMessageProps) {
    try {
      const { to, topic, text, from } = data;
      const senderId = (await userService.findByNickName(from))?.getDataValue("id");
      const recipients = await userService.findOrCreate(to);
      recipients.forEach(async (recipient) => {
        const recipientId = recipient.getDataValue("id") as number;
        const chat = await Chat.create({ members: JSON.stringify([recipientId, senderId]), topic });
        const chatId = chat.getDataValue("id") as number;
        await messageService.create({ from, text, chatId, userId: recipientId });
        socketService.sendNotification(recipient, { ...data, chatId });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatService();
