import { Router, Request, Response } from "express";
import { body } from "express-validator";
import userController from "../../controllers/UserController";

const userRouter = Router({});
userRouter.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 1, max: 32 }),
  userController.registration
);
userRouter.post("/login", userController.login);
userRouter.get("/", userController.getAllUsers);

export default userRouter;
