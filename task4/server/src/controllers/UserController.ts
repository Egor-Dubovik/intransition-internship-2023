import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import ApiError from "../exceptions/ApiError";
import userService from "../services/userService";
import { IUser } from "../common/types/user";
import { messages } from "../common/constant/messages";
import { Status } from "../common/constant/user";

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequest(messages.validationError, errors.array()));
      }
      const registrData = req.body as IUser;
      const userData = await userService.registration(registrData);
      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      return userData.toJSON().status === Status.Blocked
        ? next(ApiError.badRequest(messages.blocked))
        : res.json(userData);
    } catch (err) {
      next(err);
    }
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getUser(Number(req.params.id));
      return res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, status } = req.body;
      const user = await userService.updateStatus(id, status);
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.query.id);
      const number = await userService.delete(id);
      return !!number ? res.json({ isDeleted: true, id }) : res.json({ isDeleted: false });
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
