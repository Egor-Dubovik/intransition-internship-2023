import { Request, Response, NextFunction } from "express";
import messangerService from "../services/messangerService";
import ApiError from "../exceptions/ApiError";
import { messages } from "../common/constant/messages";

class MessangerController {
  async getAllChats(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, limit, offset, topic } = req.query;
      if (!id || !limit || !offset) return next(ApiError.badRequest(messages.invalidProps));
      const chats = await messangerService.getChats(+id, +limit, +offset, topic as string);
      return res.json(chats);
    } catch (err) {
      next(err);
    }
  }

  async getChatMessages(req: Request, res: Response, next: NextFunction) {
    try {
      const { chatid, limit, offset } = req.query;
      if (!chatid || !limit || !offset) return next(ApiError.badRequest(messages.invalidProps));
      const chatMessages = await messangerService.getMessages(+chatid, +limit, +offset);
      return res.json(chatMessages);
    } catch (err) {
      next(err);
    }
  }

  async getLastChatMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { chatId } = req.query;
      if (!chatId) return next(ApiError.badRequest(messages.invalidProps));
      const lastMessage = await messangerService.getLastMessage(Number(chatId));
      return res.json(lastMessage);
    } catch (err) {
      next(err);
    }
  }

  async deleteChat(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      if (!id) return next(ApiError.badRequest(messages.invalidProps));
      const chat = await messangerService.deleteChat(id);
      return res.json(chat);
    } catch (err) {
      next(err);
    }
  }
}

export default new MessangerController();
