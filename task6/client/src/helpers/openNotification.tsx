import React from 'react';
import type { NotificationInstance } from 'antd/es/notification/interface';
import { NavLink } from 'react-router-dom';
import { NOTIFICATION } from '../common/constant/notification';
import { ROUTES } from '../router/routes.enum';

const openNotification = (
  api: NotificationInstance,
  sender: string,
  text: string,
  chatId: number
): void => {
  api.info({
    message: <NavLink to={`${ROUTES.CHAT}/${chatId}`}>New message from {sender}</NavLink>,
    description: text,
    placement: NOTIFICATION.PLACE,
    duration: NOTIFICATION.DURATION,
  });
};

export default openNotification;
