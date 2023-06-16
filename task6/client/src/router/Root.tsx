import React, { FC, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, notification } from 'antd';
import MenuSlider from '../features/SliderMenu/SliderMenu';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import openNotification from '../helpers/openNotification';
import SocketIO from '../socketio/SocketIO';
import { useAppSelector } from '../app/store/hooks';
import { IMessageProps } from '../common/types/messagner';
import { selectChat } from '../features/Chat/chatSlice';

const Root: FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [api, notificationElement] = notification.useNotification();
  const chat = useAppSelector(selectChat);
  const chatRef = useRef(chat);

  useEffect(() => {
    SocketIO.value?.on('notification', (data: IMessageProps) => {
      const { from, text, chatId } = data;
      if (!chatRef.current?.id || chatRef.current?.id !== chatId) {
        openNotification(api, from, text, chatId as number);
      }
    });
  }, [SocketIO.value]);

  useEffect(() => {
    chatRef.current = chat;
  }, [chat]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {notificationElement}
      <MenuSlider collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Outlet />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Root;
