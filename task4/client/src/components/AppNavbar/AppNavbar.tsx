import React, { FC, useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes.enum';
import { UserContext } from '../../context/UserContext';
import Logo from '../logos/Logo/Logo';
import './AppNavbar.css';

interface NavLinkClassProps {
  isActive: boolean;
}

const AppNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, handleLogout } = useContext(UserContext);

  const getNavLinkClass = ({ isActive }: NavLinkClassProps) => {
    return isActive ? 'nav-list__link_active' : 'nav-list__link';
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const onLogout = () => {
    handleLogout();
    closeMenu();
  };

  return (
    <Navbar className="navbar" expand="md">
      <Navbar.Toggle
        style={{ color: 'white' }}
        className="navbar__burger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <Navbar.Offcanvas
        className="navbar__menu nav-menu bg-dark"
        show={isMenuOpen}
        onHide={closeMenu}
        placement="end"
      >
        <Offcanvas.Header className="nav-menu__header" closeButton>
          <Offcanvas.Title className="nav-menu__title" onClick={closeMenu}>
            <Logo />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="nav-menu__nav">
            <ul className="nav-menu__list nav-list">
              <li className="nav-list__item">
                <NavLink className={getNavLinkClass} onClick={closeMenu} to={ROUTES.MAIN}>
                  main
                </NavLink>
              </li>
              {user ? (
                <li className="nav-list__item">
                  <NavLink className={getNavLinkClass} onClick={onLogout} to={ROUTES.LOGIN}>
                    logout
                  </NavLink>
                </li>
              ) : (
                <li className="nav-menu__item">
                  <NavLink className={getNavLinkClass} onClick={closeMenu} to={ROUTES.LOGIN}>
                    login
                  </NavLink>
                  <span> / </span>
                  <NavLink className={getNavLinkClass} onClick={closeMenu} to={ROUTES.REGISTRATION}>
                    signup
                  </NavLink>
                </li>
              )}
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default AppNavbar;
