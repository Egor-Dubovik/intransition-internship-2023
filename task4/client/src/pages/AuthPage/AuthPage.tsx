import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <main className="auth-page">
      <Container>
        <div className="background"></div>
        <Outlet />
        <div className="register-link">
          Don&apost have an account? <NavLink to="/register">Register</NavLink>
        </div>
      </Container>
    </main>
  );
};

export default AuthPage;
