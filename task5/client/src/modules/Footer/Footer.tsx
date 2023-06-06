import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItransitionLogo from '../../components/logos/ItransitionLogo/ItransitionLogo';
import './Footer.css';

const Footer: FC = () => {
  return (
    <div className="footer">
      <Container className="footer__container">
        <Link className="footer__link_itansition" to="https://www.itransition.com/">
          <ItransitionLogo />
        </Link>
        <p className="footer__info">internship 2023</p>
      </Container>
    </div>
  );
};

export default Footer;
