import { Server } from "socket.io";
import { IMessageProps } from "../common/types/messanger";
import { IUser } from "../common/types/user";
import { IUserStore } from "../index";
import { Chat } from "../models/Chat";
import Message from "../models/Message";
import User from "../models/User";

class socketService {
  sendNotification(names: string[], users: IUserStore, io: Server) {
    names.forEach((name) => {
      const socketId = users[name];
      if (socketId) {
        io.to(socketId).emit("notification", data);
      }
    });
  }
}

export default new socketService();
