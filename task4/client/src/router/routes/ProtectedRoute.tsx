import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router';

interface IProtectedRouteProps {
  redirectPath: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ redirectPath }) => {
  if (!true) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
