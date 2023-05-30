import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import ApiError from "../exceptions/ApiError";
import userService from "../services/userService";
import { IUser } from "../common/types/user";

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.badRequest("Validation error check email and password", errors.array())
        );
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
      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      // const data = await userService.logout();
      // return res.json(data);
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
