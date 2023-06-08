import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import MenuSlider from '../features/SliderMenu/SliderMenu';
import Footer from '../modules/Footer/Footer';
import Header from '../modules/Header/Header';

const Root: FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MenuSlider collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout.Content style={{ margin: '24px 16px 0', minHeight: 280 }}>
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Root;
