import { Router } from "express";
import messangerRouter from "./apiRouters/messangerRouter";
import authRouter from "./apiRouters/userRouter";

const router: Router = Router({});
router.use("/user", authRouter);
router.use("/messanger", messangerRouter);

export default router;
