import { IMessageProps } from "./messanger";

export interface IMessageNotification extends IMessageProps {
  chatId: number;
}

export interface IMessage {
  from: string;
  text: string;
  userId: number;
  chatId: number;
}
