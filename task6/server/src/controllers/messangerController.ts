import { Request, Response, NextFunction } from "express";
import messangerService from "../services/messangerService";
import ApiError from "../exceptions/ApiError";
import { messages } from "../common/constant/messages";

class MessangerController {
  async getAllChats(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.body.id as number;
      if (!userId) return next(ApiError.badRequest(messages.invalidProps));
      const chats = await messangerService.getChats(userId);
      return res.json(chats);
    } catch (err) {
      next(err);
    }
  }
}

export default new MessangerController();
