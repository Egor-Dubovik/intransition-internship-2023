import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import ActionFormGroup from '../../components/ActionFormGroup/ActionFormGroup';
import './AuthPage.css';

const AuthPage = (): JSX.Element => {
  return (
    <main className="auth-page">
      <Container>
        <Outlet />
        <ActionFormGroup />
      </Container>
    </main>
  );
};

export default AuthPage;
