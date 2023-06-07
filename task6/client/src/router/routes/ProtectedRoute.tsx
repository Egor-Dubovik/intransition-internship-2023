import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router';

interface IProtectedRouteProps {
  redirectPath: string;
  condition: boolean;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ redirectPath, condition }) =>
  condition ? <Navigate to={redirectPath} replace /> : <Outlet />;

export default ProtectedRoute;
