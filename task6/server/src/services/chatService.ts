import { Model } from "sequelize";
import { IMessageProps } from "../common/types/messanger";
import { IUser } from "../common/types/user";
import { io, userStore } from "../index";
import { Chat } from "../models/Chat";
import { syncModels } from "../models/index";
import Message from "../models/Message";
import User from "../models/User";
import socketService from "./socketService";
import userService from "./userService";

class ChatService {
  async create(data: IMessageProps) {
    try {
      const { to, topic, text, from } = data;
      const senderId = (await userService.findByNickName(from))?.getDataValue("id");
      const recipients = await userService.findOrCreate(to);

      recipients.forEach(async (recipient) => {
        const recipientId = recipient.getDataValue("id");
        const chat = await Chat.create({ members: JSON.stringify([recipientId, senderId]), topic });
        const chatId = chat.getDataValue("id");
        await Message.create({ from, text, chatId, userId: recipientId });
        socketService.sendNotification(recipient, { ...data, chatId });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatService();
