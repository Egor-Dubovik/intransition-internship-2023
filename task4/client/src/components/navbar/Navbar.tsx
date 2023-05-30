import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/routes.enum';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <ul className={classes.NavbarList}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.ActiveLink : classes.Link)}
            to={ROUTES.MAIN}
          >
            main
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.ActiveLink : classes.Link)}
            to={ROUTES.PROFILE}
          >
            profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
