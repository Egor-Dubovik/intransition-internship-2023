import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMessage } from '../../common/types/messagner';
import { useGetMessagesQuery } from './messageAPI';

const MessageList: FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { id } = useParams();
  const { data, isLoading } = useGetMessagesQuery({ chatid: Number(id), limit: 20, offset: 0 });

  useEffect(() => {
    if (data) setMessages(data.messages);
  }, [data]);

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          {message.from} {message.text}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
