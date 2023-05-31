import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import ActionFormGroup from '../../components/auth/ActionFormGroup/ActionFormGroup';
import AuthTitle from '../../components/auth/AuthTitle/AuthTitle';
import './AuthPage.css';

const AuthPage = (): JSX.Element => {
  return (
    <main className="auth-page">
      <Container className="auth-page_container">
        <AuthTitle />
        <Outlet />
        <ActionFormGroup />
      </Container>
    </main>
  );
};

export default AuthPage;
