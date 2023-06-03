import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../router/router';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
