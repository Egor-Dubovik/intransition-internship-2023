import React, { useContext } from 'react';
import { createHashRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import AuthPage from '../pages/AuthPage/AuthPage';
import MainPage from '../pages/MainPage/MainPage';
import RegistrationForm from '../components/forms/RegistrationForm/RegistrationForm';
import LoginForm from '../components/forms/LoginForm/LoginForm';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { UserContext } from '../context/UserContext';
import { ROUTES } from './routes.enum';
import Root from './Root';

const useRouter = () => {
  const { user } = useContext(UserContext);
  const routes = createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<Root />}>
      <Route element={<ProtectedRoute redirectPath={ROUTES.LOGIN} condition={!user} />}>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Route>
      <Route element={<ProtectedRoute redirectPath={ROUTES.MAIN} condition={!!user} />}>
        <Route path={ROUTES.AUTH} element={<AuthPage />}>
          <Route path={ROUTES.REGISTRATION} element={<RegistrationForm />} />
          <Route path={ROUTES.LOGIN} element={<LoginForm />} />
        </Route>
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTES.BAD} element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
    </Route>
  );
  return createHashRouter(routes);
};

export default useRouter;
