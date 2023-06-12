import React from 'react';
import ChatList from '../../components/ChatList/ChatList';
import ToolBar from '../../components/ToolBar/ToolBar';

const MessengerPage = (): JSX.Element => {
  return (
    <>
      <ToolBar />
      <ChatList />
    </>
  );
};

export default MessengerPage;
