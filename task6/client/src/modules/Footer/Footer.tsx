import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ItransitionLogo from '../../components/logos/ItransitionLogo/ItransitionLogo';
import './Footer.css';

const Footer: FC = () => {
  return (
    <div className="footer">
      <Link className="footer__link_itansition" to="https://www.itransition.com/">
        <ItransitionLogo />
      </Link>
      <p className="footer__info">internship 2023</p>
    </div>
  );
};

export default Footer;
