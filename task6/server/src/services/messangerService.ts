import { Op } from "sequelize";
import { Chat } from "../models/Chat";
import Message from "../models/Message";

class MessangerService {
  async getChats(userId: number) {
    const chats = await Chat.findAll({
      where: {
        members: { [Op.like]: `%${userId}%` },
      },
    });
    return chats;
  }

  async getMessages(chatid: number) {
    const messages = await Message.findAll({ where: { chatid } });
    return messages;
  }
}

export default new MessangerService();
