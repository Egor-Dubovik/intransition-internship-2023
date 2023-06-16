import React from 'react';
import ChatList from '../../features/ChatList/ChatList';
import ToolBar from '../../components/ToolBar/ToolBar';
import { Layout } from 'antd';

const MessengerPage = (): JSX.Element => {
  return (
    <Layout.Content className="messanger-page">
      <section className="messanger">
        <ToolBar />
        <ChatList />
      </section>
    </Layout.Content>
  );
};

export default MessengerPage;
