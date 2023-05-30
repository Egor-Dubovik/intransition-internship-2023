import { DataTypes } from "sequelize";
import sequelize from "../db";

const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(500) },
  email: { type: DataTypes.STRING(500), unique: true },
  password: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: "active" },
});

export default User;
