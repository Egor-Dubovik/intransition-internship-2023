import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../router/routes.enum';
import './ActionFormGroup.css';

const LoginForm: FC = () => {
  const { pathname } = useLocation();

  return <div className="d">LoginForm</div>;
};

export default LoginForm;
