import messangerController from "../../controllers/messangerController";
import { Router } from "express";

const messangerRouter = Router({});
messangerRouter.get("/chats", messangerController.getAllChats);
messangerRouter.get("/messages", messangerController.getChatMessages);
messangerRouter.get("/lastMessage", messangerController.getLastChatMessage);
messangerRouter.delete("/chat", messangerController.deleteChat);

export default messangerRouter;
