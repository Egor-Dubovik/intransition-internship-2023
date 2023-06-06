import { Router } from "express";
import csvController from "../../controllers/csvController";

const csvRouter = Router({});
csvRouter.get("/users", csvController.createFile);

export default csvRouter;
