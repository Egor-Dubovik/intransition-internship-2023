import React, { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IChat, IMessage } from '../../common/types/messagner';
import { useGetMessagesQuery } from './messageAPI';
import Loader from '../../components/Loader/Loader';
import SocketIO from '../../socketio/SocketIO';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { selectChat, setOpenChat } from '../Chat/chatSlice';
import { getMessageDateFromString } from '../../helpers/getDateFromString';
import { selectUser } from '../LoginForm/userSlice';
import { CHAT } from '../../common/constant/chat';
import './MessageList.css';

interface IMessageListProps {
  chatRef: React.MutableRefObject<HTMLDivElement | null>;
}

const MessageList: FC<IMessageListProps> = ({ chatRef }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [maxHeight, setMaxHeight] = useState(400);
  const [offset, setOffset] = useState(0);
  const messageListRef = useRef<HTMLUListElement | null>(null);
  const user = useAppSelector(selectUser);
  const activeChat = useAppSelector(selectChat);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { data, isLoading } = useGetMessagesQuery(
    {
      chatid: Number(params.id),
      limit: CHAT.MESS_LIMIT,
      offset,
    },
    { refetchOnMountOrArgChange: true }
  );

  const getMessageClasses = (nickName: string) => {
    const classes = 'message-list__item message';
    return user.data?.nickName !== nickName ? classes : classes + ' _user';
  };

  const scrollMessageListToBottom = () => {
    if (messageListRef.current) {
      const { scrollHeight, clientHeight } = messageListRef.current;
      messageListRef.current.scrollTop = scrollHeight - clientHeight;
    }
  };

  useEffect(() => {
    if (data) setMessages(data.messages);
  }, [data]);

  useEffect(() => {
    scrollMessageListToBottom();
  }, [messages]);

  useEffect(() => {
    if (chatRef.current) setMaxHeight(chatRef.current.clientHeight - 60);
    SocketIO.value?.on('newMessage', (newMemberMessage: IMessage) => {
      if (activeChat.id === newMemberMessage.chatId) {
        setMessages((prevMessages) => [...prevMessages, newMemberMessage]);
      }
    });
    return () => {
      dispatch(setOpenChat({} as IChat));
    };
  }, []);

  return (
    <>
      {!isLoading ? (
        <ul
          className="chat__message-list message-list"
          style={{ maxHeight: `${maxHeight}px` }}
          ref={messageListRef}
        >
          {messages.map((message) => (
            <li key={message.id} className={getMessageClasses(message.from)}>
              <div className="message__info">
                <p className="message__author">{message.from}</p>
                <p className="message__time">
                  {getMessageDateFromString(message.createdAt as string)}
                </p>
              </div>
              <p className="message__text">{message.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MessageList;
