import React, { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useLoginMutation } from '../features/LoginForm/loginAPI';
import { useLogin } from '../hooks/useLogin';
import { useAppDispatch } from './store/hooks';
import { connectToSocket } from '../socketio/socketSlice';
import useRouter from '../router/useRouter';
import Loader from '../components/Loader/Loader';
import './App.css';

const App: FC = () => {
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useLogin(isSuccess, data);
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      login(userData);
      return;
    }
    localStorage.removeItem('user');
    dispatch(connectToSocket());
  }, []);

  return <div className="App">{!isLoading ? <RouterProvider router={router} /> : <Loader />}</div>;
};

export default App;
