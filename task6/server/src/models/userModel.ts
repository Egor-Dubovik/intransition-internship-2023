import { DataTypes } from "sequelize";
import { StringLength, Models } from "../common/constant/db";
import sequelize from "../db";

const User = sequelize.define(Models.User, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(StringLength.Medium) },
});

export default User;
