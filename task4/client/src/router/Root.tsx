import React, { FC, useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Footer from '../modules/Footer/Footer';
import Header from '../modules/Header/Header';
import UserService from '../services/UserService';
import { ROUTES } from './routes.enum';

const Root: FC = () => {
  const { user, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGetUser = async (id: number) => {
    const user = await UserService.getUser(id);
    if (!user) {
      navigate(ROUTES.REGISTRATION);
      handleLogout();
    }
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      handleGetUser(user.id);
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
