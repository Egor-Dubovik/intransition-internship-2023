import { Router } from "express";
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
userRouter.put("/", userController.updateStatus);
userRouter.get("/", userController.getAllUsers);
userRouter.delete("/", userController.delete);

export default userRouter;
