import React from 'react';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { NAVS, ROUTES } from '../../router/routes.enum';
import { Link } from 'react-router-dom';

export const menuItems = [
  {
    key: '1',
    icon: <VideoCameraOutlined rev="icon" />,
    label: <Link to={ROUTES.MAIN}>{NAVS.MAIN}</Link>,
  },
  {
    key: '2',
    icon: <UserOutlined rev="icon" />,
    label: <Link to={ROUTES.LOGIN}>{NAVS.LOGIN}</Link>,
  },
];
