import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import MainPage from '../pages/MainPage/MainPage';
import Root from './Root';
import { ROUTES } from './routes.enum';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTES.PROFILE,
        element: <div>PROFILE</div>,
      },
    ],
  },
]);

export default router;
