import { Router } from "express";
import generatorController from "../../controllers/generatorController";

const generatorRouter = Router({});
generatorRouter.get("/users", generatorController.generateFakeData);

export default generatorRouter;
