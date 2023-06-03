import React, { FC, useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Status } from '../common/constant/user';
import { UserContext } from '../context/UserContext';
import Footer from '../modules/Footer/Footer';
import Header from '../modules/Header/Header';

const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
