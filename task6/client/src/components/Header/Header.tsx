import React, { FC, useEffect } from 'react';
import { Button, Layout, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { setIsVisible } from '../../features/SliderMenu/sliderMenuSlice';
import { selectUser, setUserData } from '../../features/LoginForm/userSlice';
import Logo from '../logos/Logo/Logo';
import './Header.css';

interface IHeaderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ collapsed, setCollapsed }) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const sliderIcon = collapsed ? (
    <MenuUnfoldOutlined rev="icon" />
  ) : (
    <MenuFoldOutlined rev="icon" />
  );

  const handleLogout = () => {
    dispatch(setUserData(null));
    localStorage.removeItem('user');
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
          onClick={() => setCollapsed(!collapsed)}
        />
        <Logo className="header__logo" />
        {user && (
          <Button onClick={handleLogout} size="middle">
            logout
          </Button>
        )}
      </div>
    </Layout.Header>
  );
};

export default Header;
