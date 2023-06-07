import express from "express";
import sequelize from "./db";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index";
import { syncModels } from "./models/index";
import { errorMiddleware } from "./midleware/errorMiddleware";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.urlencoded({ extended: true }));
app.use("/auth-app", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    syncModels();
    app.listen(PORT, () => {
      console.log(`server started in port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
