import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.css';

const Loader = (): JSX.Element => {
  return (
    <div className="loader">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
