import React, { FC } from 'react';
import AuthUserInfo from '../../modules/AuthUserInfo/AuthUserInfo';

const MainPage: FC = () => {
  return (
    <main className="main-page">
      <AuthUserInfo />
    </main>
  );
};

export default MainPage;
