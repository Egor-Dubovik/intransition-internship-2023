import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

if (!dbName || !dbUser || !dbPassword || !dbHost || !dbPort) {
  console.log(dbName);
  console.log(dbUser);
  console.log(dbPassword);
  console.log(dbHost);
  console.log(dbPort);
  throw new Error("Failed to get all environment variables to connect to database");
}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
  port: Number(dbPort),
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
