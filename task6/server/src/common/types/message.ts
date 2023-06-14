interface IMainMessageProps {
  from: string;
  text: string;
}

export interface INewChatMessageProps extends IMainMessageProps {
  to: string[];
  topic: string;
}

export interface IMessage extends IMainMessageProps {
  userId: number;
  chatId: number;
}

export interface IChatMessage extends IMessage {
  to: string;
}
