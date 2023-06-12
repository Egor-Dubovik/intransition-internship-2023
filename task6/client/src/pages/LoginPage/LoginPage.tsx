import React from 'react';
import LoginForm from '../../features/LoginForm/LoginForm';
import { Typography } from 'antd';
import './LoginPage.css';

const LoginPage = (): JSX.Element => {
  return (
    <div className="login-page">
      <Typography.Title className="login-page__title" level={1}>
        login
      </Typography.Title>
      <Typography.Text className="login-page__text" strong>
        Hello, enter your name to start chatting
      </Typography.Text>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
