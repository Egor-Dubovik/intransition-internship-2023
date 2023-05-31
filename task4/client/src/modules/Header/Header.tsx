import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../../components/logos/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import './Header.css';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <Container className="header__container">
        <Logo className="header__logo" />
        <Navbar />
      </Container>
    </div>
  );
};

export default Header;
