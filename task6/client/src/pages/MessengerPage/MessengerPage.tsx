import React, { useState } from 'react';
import ChatList from '../../features/ChatList/ChatList';
import ToolBar from '../../components/ToolBar/ToolBar';
import { Layout } from 'antd';
import { IChat } from '../../common/types/messagner';

const MessengerPage = (): JSX.Element => {
  const [chats, setChats] = useState<IChat[]>([]);
  const [topic, setTopic] = useState('');

  return (
    <Layout.Content className="messanger-page">
      <section className="messanger">
        <ToolBar setTopic={setTopic} setChats={setChats} />
        <ChatList topic={topic} chats={chats} setChats={setChats} />
      </section>
    </Layout.Content>
  );
};

export default MessengerPage;
