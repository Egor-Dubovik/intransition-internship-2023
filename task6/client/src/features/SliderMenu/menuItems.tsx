import React from 'react';
import { MessageOutlined, UserOutlined, EditOutlined } from '@ant-design/icons';
import { NAVS, ROUTES } from '../../router/routes.enum';
import { Link } from 'react-router-dom';

export const menuItems = [
  {
    key: '1',
    icon: <EditOutlined rev="icon" />,
    label: <Link to={ROUTES.MAIN}>{NAVS.MAIN}</Link>,
    title: '',
  },
  {
    key: '2',
    icon: <MessageOutlined rev="icon" />,
    label: <Link to={ROUTES.MESSANGER}>{NAVS.MESSANGER}</Link>,
    title: '',
  },
  {
    key: '3',
    icon: <UserOutlined rev="icon" />,
    label: <Link to={ROUTES.LOGIN}>{NAVS.LOGIN}</Link>,
    title: '',
  },
];
