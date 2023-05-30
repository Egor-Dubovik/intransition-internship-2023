import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../modules/Footer/Footer';
import Header from '../modules/Header/Header';

const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
