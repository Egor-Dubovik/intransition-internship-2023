import { Model } from "sequelize";
import { IUser } from "../common/types/user";
import { io, userStore } from "../index";
import { IMessage } from "../models/Message";

class SocketService {
  sendNotification(recipient: Model<IUser>, messag: IMessage) {
    const socketId = userStore[recipient.getDataValue("nickName")];
    if (socketId) io.to(socketId).emit("notification", messag);
  }
}

export default new SocketService();
