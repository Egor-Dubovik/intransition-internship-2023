import React from 'react';
import { createHashRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import { ROUTES } from './routes.enum';
import Root from './Root';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<Root />}>
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.BAD} element={<Navigate to={ROUTES.MAIN} replace />} />
    </Route>
  )
);

export default router;
