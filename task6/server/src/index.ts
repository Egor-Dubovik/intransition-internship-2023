import express from "express";
import sequelize from "./db";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import router from "./routes/index";
import { syncModels } from "./models/index";
import { errorMiddleware } from "./midleware/errorMiddleware";
import { Server } from "socket.io";
import { IMessageProps } from "./common/types/messanger";
import chatService from "./services/chatService";

dotenv.config();
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
  cors: corsOptions,
});

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use("/app", router);
app.use(errorMiddleware);

export interface IUserStore {
  [key: string]: string;
}

export const userStore: IUserStore = {};

io.on("connection", (socket) => {
  const { nickName } = socket.handshake.query;
  userStore[nickName as string] = socket.id;
  console.log(`user ${nickName} with id ${socket.id} connected`);

  socket.on("newChat", async (data: IMessageProps) => {
    await chatService.create(data);
    // io.to(users[data.to[0]]).emit("notification", data);
  });

  socket.on("disconnect", () => {
    console.log(`user with id ${socket.id} disconnected`);
  });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    syncModels();
    server.listen(PORT, () => {
      console.log(`server started in port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
