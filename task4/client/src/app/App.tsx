import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import useRouter from '../router/useRouter';
import './App.css';

const App: FC = () => {
  const router = useRouter();
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
