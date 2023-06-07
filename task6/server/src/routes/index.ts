import { Router } from "express";
import authRouter from "./apiRouters/userRouter";

const router: Router = Router({});
router.use("/user", authRouter);

export default router;
