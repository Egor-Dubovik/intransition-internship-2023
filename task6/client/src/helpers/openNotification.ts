import type { NotificationInstance } from 'antd/es/notification/interface';
import { NOTIFICATION } from '../common/constant/notification';

const openNotification = (api: NotificationInstance, sender: string, text: string) => {
  api.info({
    message: `New message from ${sender}`,
    description: text,
    placement: NOTIFICATION.PLACE,
    duration: NOTIFICATION.DURATION,
  });
};

export default openNotification;
