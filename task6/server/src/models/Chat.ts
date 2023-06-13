import { Models } from "../common/constant/db";
import { DataTypes } from "sequelize";
import sequelize from "../db";

export interface IChat {
  id: number;
  topic: string;
  isRead: boolean;
  members: string[];
}

export const Chat = sequelize.define(Models.Chat, {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  topic: { type: DataTypes.STRING, allowNull: false },
  isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
  onlineMembers: { type: DataTypes.STRING(500), defaultValue: "[]" },
});

export const UserChat = sequelize.define(Models.UserChat, {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
});
