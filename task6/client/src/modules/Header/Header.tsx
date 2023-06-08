import React, { FC, useEffect } from 'react';
import { Button, Layout, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../app/store/hooks';
import { setIsVisible } from '../../features/SliderMenu/sliderMenuSlice';
import Logo from '../../components/logos/Logo/Logo';
import './Header.css';

interface IHeaderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ collapsed, setCollapsed }) => {
  const dispatch = useAppDispatch();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const sliderIcon = collapsed ? (
    <MenuUnfoldOutlined rev="icon" />
  ) : (
    <MenuFoldOutlined rev="icon" />
  );

  const handleShowMenu = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    dispatch(setIsVisible(collapsed));
  }, [collapsed]);

  return (
    <Layout.Header className="header" style={{ background: colorBgContainer }}>
      <div className="header__container">
        <Button
          type="text"
          icon={sliderIcon}
          className="header__button_slider"
          onClick={handleShowMenu}
        />
        <Logo className="header__logo" />
      </div>
    </Layout.Header>
  );
};

export default Header;
