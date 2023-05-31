import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../router/routes.enum';
import './ActionFormGroup.css';

const ActionFormGroup: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="auth-page__form-group form-group">
      <Button className="auth-page__button" variant="primary" type="submit">
        {pathname === ROUTES.LOGIN ? 'Login' : 'Signup'}
      </Button>
      {pathname === ROUTES.LOGIN ? (
        <p className="auth__prompt">
          Don&apos;t have an account? <NavLink to={ROUTES.REGISTRATION}>Signup</NavLink>
        </p>
      ) : (
        <p className="auth-page__prompt">
          Already registered? <NavLink to={ROUTES.LOGIN}>Login</NavLink>
        </p>
      )}
    </div>
  );
};

export default ActionFormGroup;
