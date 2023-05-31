import React from 'react';
import Logo from '../../components/logos/Logo/Logo';
import AppNavbar from '../../components/AppNavbar/AppNavbar';
import Container from 'react-bootstrap/Container';
import './Header.css';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Container className="header__container">
        <Logo className="header__logo " />
        <AppNavbar />
      </Container>
    </header>
  );
};

export default Header;
