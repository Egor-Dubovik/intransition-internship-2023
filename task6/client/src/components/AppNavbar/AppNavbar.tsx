import React, { FC, useContext, useState } from 'react';
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

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const onLogout = () => {
    closeMenu();
  };

  return <div>navbar</div>;
};

export default AppNavbar;
