import React, { FC } from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Header.module.css';

const Header: FC = () => {
  return (
    <div className={'header'}>
      <div className={classes.Container}>
        <div className={classes.Logo}>logo</div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
