import React, { FC, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, message, notification } from 'antd';
import MenuSlider from '../features/SliderMenu/SliderMenu';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SocketIO from '../socketio/SocketIO';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import { IMessageProps } from '../common/types/messagner';
import { selectChat, setIsCreated } from '../features/Chat/chatSlice';
import { openMessage, openNotification } from '../helpers/openNotification';

const Root: FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [api, notificationElement] = notification.useNotification();
  const [messageApi, messagePopap] = message.useMessage();
  const dispatch = useAppDispatch();
  const chat = useAppSelector(selectChat);
  const chatRef = useRef(chat);

  useEffect(() => {
    SocketIO.value?.on('notification', (data: IMessageProps) => {
      const { from, text, chatId } = data;
      if (!chatRef.current?.id || chatRef.current?.id !== chatId) {
        openNotification(api, from, text, chatId as number);
      }
    });

    SocketIO.value?.on('chatCreated', () => {
      openMessage(messageApi, 'Chat was created');
      dispatch(setIsCreated(true));
    });
  }, [SocketIO.value]);

  useEffect(() => {
    chatRef.current = chat;
  }, [chat]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {notificationElement}
      {messagePopap}
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
