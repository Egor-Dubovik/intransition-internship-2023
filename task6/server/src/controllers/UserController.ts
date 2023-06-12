import { Request, Response, NextFunction } from "express";
import ApiError from "../exceptions/ApiError";
import userService from "../services/userService";
import { ILoginProps } from "../common/types/user";
import { messages } from "../common/constant/messages";
import { validationResult } from "express-validator";

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest(messages.nickNameLength, errors.array()));
      }
      const loginData = req.body as ILoginProps;
      const userData = await userService.login(loginData.nickName);
      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
