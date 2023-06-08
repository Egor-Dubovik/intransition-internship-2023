import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { useAppSelector } from '../../app/store/hooks';
import { selectIsVisible } from './sliderMenuSlice';
import { menuItems } from './menuItems';
import './MenuSlider.css';

interface IMenuSliderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuSlider: FC<IMenuSliderProps> = ({ collapsed, setCollapsed }) => {
  const isMenuVisible = useAppSelector(selectIsVisible);

  const handleCloseMenu = (): void => {
    setCollapsed(true);
  };

  return (
    <Layout.Sider
      className={!isMenuVisible ? 'menu-slider _visible' : 'menu-slider'}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        onClick={handleCloseMenu}
        defaultSelectedKeys={['1']}
        items={menuItems}
      />
    </Layout.Sider>
  );
};

export default MenuSlider;
