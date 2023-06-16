import React, { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useLoginMutation } from '../features/LoginForm/userAPI';
import { useLogin } from '../hooks/useLogin';
import useRouter from '../router/useRouter';
import Loader from '../components/Loader/Loader';
import './App.css';

const App: FC = () => {
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();
  const router = useRouter();

  useLogin(isSuccess, data);
  useEffect(() => {
    const user = localStorage.getItem('user');
    user ? login(JSON.parse(user)) : localStorage.removeItem('user');
  }, []);

  return <div className="App">{!isLoading ? <RouterProvider router={router} /> : <Loader />}</div>;
};

export default App;
