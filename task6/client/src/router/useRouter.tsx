import React from 'react';
import { createHashRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import MainPage from '../pages/MainPage/MainPage';
import LoginForm from '../components/LoginForm/LoginForm';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { ROUTES } from './routes.enum';
import Root from './Root';

const useRouter = () => {
  const routes = createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<Root />}>
      <Route element={<ProtectedRoute redirectPath={ROUTES.LOGIN} condition={!true} />}>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Route>
      <Route element={<ProtectedRoute redirectPath={ROUTES.MAIN} condition={!!false} />}>
        <Route path={ROUTES.LOGIN} element={<LoginForm />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTES.BAD} element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
    </Route>
  );
  return createHashRouter(routes);
};

export default useRouter;
