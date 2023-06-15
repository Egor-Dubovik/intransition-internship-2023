import React from 'react';
import ChatList from '../../features/ChatList/ChatList';
import ToolBar from '../../components/ToolBar/ToolBar';

const MessengerPage = (): JSX.Element => {
  return (
    <section className="messanger">
      <ToolBar />
      <ChatList />
    </section>
  );
};

export default MessengerPage;
