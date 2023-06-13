import messangerController from "../../controllers/messangerController";
import { Router } from "express";

const messangerRouter = Router({});
messangerRouter.get("/chats", messangerController.getAllChats);

export default messangerRouter;
