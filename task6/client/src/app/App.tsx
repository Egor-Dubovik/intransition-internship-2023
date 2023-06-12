import React, { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import useRouter from '../router/useRouter';
import { io } from 'socket.io-client';
import { BASE_URL } from '../common/constant/api';
import { useLoginMutation } from '../features/LoginForm/loginAPI';
import Loader from '../components/Loader/Loader';
import { useLogin } from '../hooks/useLogin';
import './App.css';

const socket = io(BASE_URL);
socket.connect();

const App: FC = () => {
  const router = useRouter();
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();

  useLogin(isSuccess, data);
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      login(userData);
      return;
    }
    localStorage.removeItem('user');
  }, []);

  return <div className="App">{!isLoading ? <RouterProvider router={router} /> : <Loader />}</div>;
};

export default App;
