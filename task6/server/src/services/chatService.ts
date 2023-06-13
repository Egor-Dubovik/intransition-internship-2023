import { Model } from "sequelize";
import { IMessageProps } from "../common/types/messanger";
import { IUser } from "../common/types/user";
import { io, userStore } from "../index";
import { Chat } from "../models/Chat";
import Message from "../models/Message";
import User from "../models/User";

class ChatService {
  async create(data: IMessageProps) {
    try {
      const { to, topic, text, from } = data;
      const chat = await Chat.create({ topic });
      const ChatId = chat.getDataValue("id");

      const users = await Promise.all(
        to.map(async (recipient) => {
          const [user] = await User.findOrCreate<Model<IUser>>({ where: { nickName: recipient } });
          return user;
        })
      );

      const messagePromises = await Promise.all(
        users.map(async (user) => {
          const UserId = user.getDataValue("id");
          const message = await Message.create({ from, text, ChatId, UserId });
          return message;
        })
      );

      users.forEach((user) => {
        const socketId = userStore[user.getDataValue("nickName")];
        if (socketId) {
          io.to(socketId).emit("notification", { ...data, ChatId });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatService();
