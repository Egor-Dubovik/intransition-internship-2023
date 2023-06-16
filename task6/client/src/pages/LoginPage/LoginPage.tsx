import React from 'react';
import LoginForm from '../../features/LoginForm/LoginForm';
import { Layout, Typography } from 'antd';
import './LoginPage.css';

const LoginPage = (): JSX.Element => {
  return (
    <Layout.Content className="login-page">
      <div className="login">
        <Typography.Title className="login__title" level={1}>
          login
        </Typography.Title>
        <Typography.Text className="login__text" strong>
          Hello, enter your name to start chatting
        </Typography.Text>
        <LoginForm />
      </div>
    </Layout.Content>
  );
};

export default LoginPage;
