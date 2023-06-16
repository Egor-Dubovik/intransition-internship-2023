import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import MenuSlider from '../features/SliderMenu/SliderMenu';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Root: FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MenuSlider collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Outlet />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Root;
