import { Router } from "express";
import authRouter from "./apiRouters/authRouter";

const router: Router = Router({});
router.use("/user", authRouter);

export default router;
