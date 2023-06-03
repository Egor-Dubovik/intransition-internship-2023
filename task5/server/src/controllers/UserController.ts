import { Request, Response, NextFunction } from "express";
import ApiError from "../exceptions/ApiError";
import userService from "../services/userService";

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = req;
      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
