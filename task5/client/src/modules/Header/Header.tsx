import React from 'react';
import Logo from '../../components/logos/Logo/Logo';
import Container from 'react-bootstrap/Container';
import './Header.css';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Container className="header__container">
        <Logo className="header__logo " />
      </Container>
    </header>
  );
};

export default Header;
