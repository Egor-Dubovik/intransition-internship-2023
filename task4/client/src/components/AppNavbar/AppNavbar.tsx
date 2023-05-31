import React, { FC, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes.enum';
import Logo from '../logos/Logo/Logo';
import './AppNavbar.css';

interface NavLinkClassProps {
  isActive: boolean;
}

const AppNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }: NavLinkClassProps) => {
    return isActive ? 'nav-list__link_active' : 'nav-list__link';
  };

  const switchMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar className="navbar" expand="md">
      <Navbar.Toggle style={{ color: 'white' }} className="navbar__burger" onClick={switchMenu} />

      <Navbar.Offcanvas
        className="navbar__menu nav-menu bg-dark"
        show={isMenuOpen}
        onHide={closeMenu}
        placement="end"
      >
        <Offcanvas.Header className="nav-menu__header" closeButton>
          <Offcanvas.Title className="nav-menu__title">
            <Logo />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="navbar__list nav-list">
            <NavLink className={getNavLinkClass} onClick={closeMenu} to={ROUTES.MAIN}>
              main
            </NavLink>
            <NavLink className={getNavLinkClass} onClick={closeMenu} to={ROUTES.LOGIN}>
              auth
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;
