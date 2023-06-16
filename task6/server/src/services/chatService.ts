import { IChatMessage, INewChatMessageProps } from "../common/types/message";
import { Chat } from "../models/Chat";
import messageService from "./messageService";
import socketService from "./socketService";
import userService from "./userService";

class ChatService {
  async create(data: INewChatMessageProps) {
    try {
      const { to, topic, text, from } = data;
      const senderId = (await userService.findByNickName(from))?.getDataValue("id");
      const recipients = await userService.findOrCreate(to);
      recipients.forEach(async (recipient) => {
        const userId = recipient.getDataValue("id") as number;
        const userNick = recipient.getDataValue("nickName");
        const chat = await Chat.create({ members: JSON.stringify([userId, senderId]), topic });
        const chatId = chat.getDataValue("id") as number;
        await messageService.create({ from, text, chatId, userId });
        socketService.sendNotification({ to: userNick, text, from, chatId, userId });
        socketService.chatCreated(from);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async sendMessage(data: IChatMessage) {
    try {
      const { text, from, userId, chatId } = data;
      const userNick = (await userService.findById(userId))?.getDataValue("nickName") as string;
      const newMessage = await messageService.create({ from, text, userId, chatId });
      socketService.sendNotification({ ...data, to: userNick });
      if (from !== userNick) {
        socketService.sendMessage(newMessage, userNick);
        socketService.sendMessage(newMessage, from);
      } else {
        socketService.sendMessage(newMessage, from);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatService();
