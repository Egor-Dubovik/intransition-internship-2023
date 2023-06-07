import { Request, Response, NextFunction } from "express";
import ApiError from "../exceptions/ApiError";
import userService from "../services/userService";
import { IUser } from "../common/types/user";
import { messages } from "../common/constant/messages";

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
