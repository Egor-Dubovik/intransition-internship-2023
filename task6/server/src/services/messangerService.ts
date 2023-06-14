import { Op } from "sequelize";
import { Chat } from "../models/Chat";
import Message from "../models/Message";

class MessangerService {
  async getChats(userId: number, limit: number, offset: number) {
    const chats = await Chat.findAll({
      where: { members: { [Op.like]: `%${userId}%` } },
      limit,
      offset,
    });
    const hasMoreChats = chats.length === limit;
    return { chats, hasMoreChats };
  }

  async getMessages(chatid: number, limit: number, offset: number) {
    const messages = await Message.findAll({ where: { chatid }, limit, offset });
    const hasMoreMessages = messages.length === limit;
    return { messages, hasMoreMessages };
  }
}

export default new MessangerService();
