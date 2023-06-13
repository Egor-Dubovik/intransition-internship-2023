import { Request, Response, NextFunction } from "express";
import messangerService from "../services/messangerService";
import ApiError from "../exceptions/ApiError";
import { messages } from "../common/constant/messages";

class MessangerController {
  async getAllChats(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, limit, offset } = req.query;
      if (!id || !limit || !offset) return next(ApiError.badRequest(messages.invalidProps));
      const chats = await messangerService.getChats(+id, +limit, +offset);
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
}

export default new MessangerController();
