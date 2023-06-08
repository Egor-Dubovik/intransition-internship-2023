import React, { FC } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import ItransitionLogo from '../../components/logos/ItransitionLogo/ItransitionLogo';
import './Footer.css';

const Footer: FC = () => {
  return (
    <Layout.Footer className="footer">
      <div className="footer__container">
        <Link className="footer__link_itansition" to="https://www.itransition.com" target="_blank">
          <ItransitionLogo />
        </Link>
        <p className="footer__info">internship 2023</p>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
