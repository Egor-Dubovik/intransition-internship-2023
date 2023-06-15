import userController from "../../controllers/UserController";
import { body } from "express-validator";
import { Router } from "express";

const userRouter = Router({});
userRouter.post("/login", body("nickName").isLength({ min: 3, max: 32 }), userController.login);
userRouter.get("/", userController.getUserById);
userRouter.get("/allById", userController.getUsersById);

export default userRouter;
