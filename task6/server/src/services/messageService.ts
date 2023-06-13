import { IMessage } from "../common/types/message";
import Message from "../models/Message";

class MessageService {
  async create(messageData: IMessage) {
    const message = await Message.create({ ...messageData });
    return message;
  }
}

export default new MessageService();
