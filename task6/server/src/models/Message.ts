import { Models } from "../common/constant/db";
import { DataTypes } from "sequelize";

import sequelize from "../db";

const Message = sequelize.define(Models.Message, {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  from: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.STRING, allowNull: false },
});

export default Message;
