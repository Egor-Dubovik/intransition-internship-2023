import React from 'react';
import Logo from '../../components/logos/Logo/Logo';
import AppNavbar from '../../components/AppNavbar/AppNavbar';
import './Header.css';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Logo className="header__logo " />
      <AppNavbar />
    </header>
  );
};

export default Header;
