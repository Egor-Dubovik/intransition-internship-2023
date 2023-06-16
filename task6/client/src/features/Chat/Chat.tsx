import React, { useRef } from 'react';
import { Layout } from 'antd';
import WriterTools from '../../components/WriterTools/WriterTools';
import MessageList from '../MessageList/MessageList';
import './Chat.css';

const Chat = (): JSX.Element => {
  const chatRef = useRef<HTMLDivElement | null>(null);

  return (
    <Layout.Content className="chat-page">
      <div className="chat" ref={chatRef}>
        <MessageList chatRef={chatRef} />
        <WriterTools />
      </div>
    </Layout.Content>
  );
};

export default Chat;
