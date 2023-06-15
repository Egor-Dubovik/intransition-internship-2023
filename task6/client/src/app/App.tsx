import React, { FC, useEffect, useRef } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useLoginMutation } from '../features/LoginForm/userAPI';
import { useLogin } from '../hooks/useLogin';
import useRouter from '../router/useRouter';
import Loader from '../components/Loader/Loader';
import SocketIO from '../socketio/SocketIO';
import { notification } from 'antd';
import { IMessageProps } from '../common/types/messagner';
import openNotification from '../helpers/openNotification';
import { useAppSelector } from './store/hooks';
import { selectChat } from '../features/Chat/chatSlice';
import './App.css';

const App: FC = () => {
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();
  const [api, notificationElement] = notification.useNotification();
  const chat = useAppSelector(selectChat);
  const router = useRouter();
  const chatRef = useRef(chat);

  useLogin(isSuccess, data);
  useEffect(() => {
    const user = localStorage.getItem('user');
    user ? login(JSON.parse(user)) : localStorage.removeItem('user');
  }, []);

  useEffect(() => {
    SocketIO.value?.on('notification', (data: IMessageProps) => {
      const { from, text, chatId } = data;
      console.log(chatRef.current?.id, chatId); // Используем chatRef.current вместо chat?.id
      if (!chatRef.current?.id || chatRef.current?.id !== chatId) {
        openNotification(api, from, text);
      }
    });
  }, [SocketIO.value]);

  useEffect(() => {
    chatRef.current = chat;
  }, [chat]);

  return (
    <div className="App">
      {notificationElement}
      {!isLoading ? <RouterProvider router={router} /> : <Loader />}
    </div>
  );
};

export default App;
