import React, { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useLoginMutation } from '../features/LoginForm/loginAPI';
import { useLogin } from '../hooks/useLogin';
import useRouter from '../router/useRouter';
import Loader from '../components/Loader/Loader';
import SocketIO from '../socketio/SocketIO';
import { notification } from 'antd';
import { IMessageProps } from '../common/types/messagner';
import openNotification from '../helpers/openNotification';
import './App.css';

const App: FC = () => {
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();
  const [api, notificationElement] = notification.useNotification();
  const router = useRouter();

  useLogin(isSuccess, data);
  useEffect(() => {
    const user = localStorage.getItem('user');
    user ? login(JSON.parse(user)) : localStorage.removeItem('user');
  }, []);

  useEffect(() => {
    SocketIO.value?.on('notification', (data: IMessageProps) => {
      const { from, text } = data;
      openNotification(api, from, text);
      console.log(`new message`, data);
    });
  }, [SocketIO.value]);

  return (
    <div className="App">
      {notificationElement}
      {!isLoading ? <RouterProvider router={router} /> : <Loader />}
    </div>
  );
};

export default App;
