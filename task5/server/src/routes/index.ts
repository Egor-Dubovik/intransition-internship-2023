import { Router } from "express";
import generatorRouter from "./apiRouters/generatorRouter";

const router: Router = Router({});
router.use("/generator", generatorRouter);
// router.use("/csv", "");

export default router;
