import { Op, WhereOptions } from "sequelize";
import { Chat } from "../models/Chat";
import Message from "../models/Message";

class MessangerService {
  async getChats(userId: number, topic: string) {
    const whereCondition: WhereOptions = { members: { [Op.like]: `%${userId}%` } };
    if (topic !== "") whereCondition.topic = { [Op.like]: `%${topic}%` };
    const chats = await Chat.findAll({ where: whereCondition, order: [["updatedAt", "DESC"]] });
    return { chats };
  }

  async getMessages(chatid: number, limit: number, offset: number) {
    const messages = await Message.findAll({ where: { chatid }, limit, offset });
    const hasMoreMessages = messages.length === limit;
    return { messages, hasMoreMessages };
  }

  async getLastMessage(chatid: number) {
    const lastMessage = await Message.findOne({
      where: { chatid },
      order: [["createdAt", "DESC"]],
    });
    return lastMessage;
  }

  async deleteChat(id: number) {
    const chat = await Chat.destroy({ where: { id } });
    return chat;
  }
}

export default new MessangerService();
