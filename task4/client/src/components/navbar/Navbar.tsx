import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes.enum';
import './Navbar.css';

interface NavLinkClassProps {
  isActive: boolean;
}

const Navbar: FC = () => {
  const getNavLinkClass = ({ isActive }: NavLinkClassProps) => {
    return isActive ? 'nav-list__link_active' : 'nav-list__link';
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list nav-list">
        <li className="nav-list__item">
          <NavLink className={getNavLinkClass} to={ROUTES.MAIN}>
            main
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink className={getNavLinkClass} to={ROUTES.LOGIN}>
            auth
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
