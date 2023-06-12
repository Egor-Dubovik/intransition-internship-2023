import React from 'react';
import { Spin } from 'antd';
import './Loader.css';

const Loader = (): JSX.Element => {
  return (
    <div className="loader">
      <Spin />
    </div>
  );
};

export default Loader;
