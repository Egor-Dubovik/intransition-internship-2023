export interface IMessageProps {
  to: string[];
  from: string;
  topic: string;
  text: string;
  chatId?: number;
}

export interface IReqChatsProps {
  id: number;
  limit: number;
  offset: number;
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
