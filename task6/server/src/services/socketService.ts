import { Model } from "sequelize";
import { IChatMessage, IMessage } from "../common/types/message";
import { io, userStore } from "../index";

class SocketService {
  sendNotification(message: IChatMessage) {
    const socketId = userStore[message.to];
    if (socketId) io.to(socketId).emit("notification", message);
  }

  sendMessage(message: Model<IMessage>, userNick: string) {
    const socketId = userStore[userNick];
    if (socketId) io.to(socketId).emit("newMessage", message);
  }
  chatCreated(userNick: string) {
    const socketId = userStore[userNick];
    if (socketId) io.to(socketId).emit("chatCreated");
  }
}

export default new SocketService();
