export interface IMessageProps {
  to: string[];
  from: string;
  topic: string;
  text: string;
  chatId?: number;
}

export interface IMessage {
  id?: number;
  to?: string;
  from: string;
  text: string;
  userId: number;
  chatId: number;
}

interface ILimitation {
  limit?: number;
  offset?: number;
  topic?: string;
}

export interface IReqChatsProps extends ILimitation {
  id: number;
}

export interface IReqMessageProps extends ILimitation {
  chatid: number;
}

export interface IChat {
  id: number;
  topic: string;
  isRead: boolean;
  members: string;
  createdAt: string;
  updatedAt: string;
}

export interface IChatResInfo {
  chats: IChat[];
  hasMoreChats: boolean;
}

export interface IMessaaageResInfo {
  messages: IMessage[];
  hasMoreChats: boolean;
}
