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

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.query;
      if (!id) return next(ApiError.badRequest(messages.invalidProps));
      const user = await userService.findById(Number(id));
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async getUsersById(req: Request, res: Response, next: NextFunction) {
    try {
      const { usersId } = req.query;
      if (!usersId) return next(ApiError.badRequest(messages.invalidProps));
      const user = await userService.findAllById(JSON.parse(usersId as string));
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAll();
      return res.json(users);
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
