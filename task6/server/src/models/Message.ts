import { Models } from "../common/constant/db";
import { DataTypes } from "sequelize";
import { IMessageProps } from "../common/types/messanger";
import sequelize from "../db";

export interface IMessage extends IMessageProps {
  chatId: number;
}

const Message = sequelize.define(Models.Message, {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  from: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.STRING, allowNull: false },
});

export default Message;
