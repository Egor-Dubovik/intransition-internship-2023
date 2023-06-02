import { DataTypes } from "sequelize";
import { StringLength, Models } from "../common/constant/db";
import { Status } from "../common/constant/user";
import sequelize from "../db";

const User = sequelize.define(Models.User, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(StringLength.Medium) },
  email: { type: DataTypes.STRING(StringLength.Medium), allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: Status.Active },
  lastLoginAt: { type: DataTypes.DATE },
});

export default User;
