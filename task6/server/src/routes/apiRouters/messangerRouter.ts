import messangerController from "../../controllers/messangerController";
import { Router } from "express";

const messangerRouter = Router({});
messangerRouter.get("/chats", messangerController.getAllChats);
messangerRouter.get("/messages", messangerController.getChatMessages);
messangerRouter.get("/lastMessage", messangerController.getLastChatMessage);

export default messangerRouter;
