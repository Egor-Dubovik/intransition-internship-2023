import { Op } from "sequelize";
import { Chat } from "../models/Chat";

class MessangerService {
  async getChats(userId: number) {
    const chats = await Chat.findAll({
      where: {
        members: { [Op.like]: `%${userId}%` },
      },
    });
    return chats;
  }
}

export default new MessangerService();
