import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import useRouter from '../router/useRouter';
import './App.css';
import { io } from 'socket.io-client';
import { BASE_URL } from '../common/constant/api';

const socket = io(BASE_URL);
socket.connect();

const App: FC = () => {
  const router = useRouter();
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
