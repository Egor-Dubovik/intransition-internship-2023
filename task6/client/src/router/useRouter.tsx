import React from 'react';
import { createHashRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { ROUTES } from './routes.enum';
import Root from './Root';
import MessengerPage from '../pages/MessengerPage/MessengerPage';
import Chat from '../pages/Chat/Chat';
import { useAppSelector } from '../app/store/hooks';
import { selectUser } from '../features/LoginForm/userSlice';

const useRouter = () => {
  const user = useAppSelector(selectUser);
  console.log(user.data);

  const routes = createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<Root />}>
      <Route element={<ProtectedRoute redirectPath={ROUTES.LOGIN} condition={!user.data} />}>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Route>
      <Route element={<ProtectedRoute redirectPath={ROUTES.MAIN} condition={!!user.data} />}>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>
      <Route path={ROUTES.MESSANGER} element={<MessengerPage />} />
      <Route path={ROUTES.CHAT + '/:id'} element={<Chat />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTES.BAD} element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
    </Route>
  );
  return createHashRouter(routes);
};

export default useRouter;
