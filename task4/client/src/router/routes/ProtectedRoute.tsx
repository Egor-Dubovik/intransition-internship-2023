import React, { FC, useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import { UserContext } from '../../context/UserContext';

interface IProtectedRouteProps {
  redirectPath: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ redirectPath }) => {
  const { user } = useContext(UserContext);
  return !user ? <Navigate to={redirectPath} replace /> : <Outlet />;
};

export default ProtectedRoute;
