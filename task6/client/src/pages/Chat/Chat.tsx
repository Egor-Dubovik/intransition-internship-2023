import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import WriterTools from '../../components/WriterTools/WriterTools';
import MessageList from '../../features/MessageList/MessageList';
import './Chat.css';

const Chat = (): JSX.Element => {
  return (
    <div className="chat">
      <MessageList />
      <WriterTools />
    </div>
  );
};

export default Chat;
