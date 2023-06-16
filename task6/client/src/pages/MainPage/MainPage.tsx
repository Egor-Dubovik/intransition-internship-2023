import React from 'react';
import MessageForm from '../../components/MessageForm/MessageForm';
import { Layout, Typography } from 'antd';
import './MainPage.css';

const MainPage = (): JSX.Element => {
  return (
    <Layout.Content className="main">
      <div className="main-page">
        <section className="main-page__login">
          <Typography.Title className="login-page__title" level={1}>
            Create a new chat
          </Typography.Title>
          <MessageForm />
        </section>
        <section className="main-page__description description">
          <div className="description__image">
            <img src="./public/main.svg" alt="message icon" />
          </div>
        </section>
      </div>
    </Layout.Content>
  );
};

export default MainPage;
