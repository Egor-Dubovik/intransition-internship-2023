import React, { FC } from 'react';
import WriterTools from '../../components/WriterTools/WriterTools';
import MessageList from '../../features/MessageList/MessageList';
import './Chat.css';

const Chat: FC = () => {
  return (
    <div className="chat">
      <MessageList />
      <WriterTools />
    </div>
  );
};

export default Chat;
