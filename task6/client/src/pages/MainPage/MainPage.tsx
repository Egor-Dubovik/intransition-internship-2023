import React from 'react';
import MessageForm from '../../components/form/MessageForm/MessageForm';
import { Typography } from 'antd';
import './MainPage.css';

const MainPage = (): JSX.Element => {
  return (
    <main className="main-page">
      <Typography.Title className="login-page__title" level={1}>
        Write a letter
      </Typography.Title>
      <MessageForm />
    </main>
  );
};

export default MainPage;
