import { Model } from "sequelize";
import { IMessageNotification } from "../common/types/message";
import { IUser } from "../common/types/user";
import { io, userStore } from "../index";

class SocketService {
  sendNotification(recipient: Model<IUser>, messag: IMessageNotification) {
    const socketId = userStore[recipient.getDataValue("nickName")];
    if (socketId) io.to(socketId).emit("notification", messag);
  }
}

export default new SocketService();
