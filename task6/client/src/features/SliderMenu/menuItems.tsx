import React from 'react';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { NAVS, ROUTES } from '../../router/routes.enum';

export const menuItems = [
  {
    key: '1',
    icon: <VideoCameraOutlined rev="icon" />,
    label: NAVS.MAIN,
    link: ROUTES.MAIN,
  },
  {
    key: '2',
    icon: <UserOutlined rev="icon" />,
    label: NAVS.LOGIN,
    link: ROUTES.LOGIN,
  },
];
