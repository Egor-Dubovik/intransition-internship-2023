import { Router } from "express";
import csvRouter from "./apiRouters/csvRouter";
import generatorRouter from "./apiRouters/generatorRouter";

const router: Router = Router({});
router.use("/generator", generatorRouter);
router.use("/csv", csvRouter);

export default router;
