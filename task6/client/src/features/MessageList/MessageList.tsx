import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IChat, IMessage } from '../../common/types/messagner';
import { useGetMessagesQuery } from './messageAPI';
import Loader from '../../components/Loader/Loader';
import SocketIO from '../../socketio/SocketIO';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { selectChat, setOpenChat } from '../../pages/Chat/chatSlice';

const MessageList: FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const activeChat = useAppSelector(selectChat);
  const dispatch = useAppDispatch();
  const params = useParams();
  const { data, isLoading } = useGetMessagesQuery({
    chatid: Number(params.id),
    limit: 100,
    offset: 0,
  });

  useEffect(() => {
    if (data) setMessages(data.messages);
  }, [data]);

  useEffect(() => {
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
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              {message.from} {message.text}
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
