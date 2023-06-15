import React, { FC, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { SendOutlined } from '@ant-design/icons';
import SocketIO from '../../socketio/SocketIO';
import { useAppSelector } from '../../app/store/hooks';
import { selectChat } from '../../pages/Chat/chatSlice';
import { selectUser } from '../../features/LoginForm/userSlice';
import './WriterTools.css';

const WriterTools: FC = () => {
  const [messageText, setMessageText] = useState('');
  const { members, id } = useAppSelector(selectChat);
  const user = useAppSelector(selectUser);

  const handleSubmit = () => {
    const userId = (JSON.parse(members) as number[]).filter((id) => id !== user.data?.id)[0];
    setMessageText('');
    SocketIO.value?.emit('newMessage', {
      text: messageText,
      from: user.data?.nickName as string,
      chatId: id,
      userId,
    });
  };

  return (
    <div className="chat__writer-tools writer-tools">
      <TextArea
        className="writer-tools__input"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Your message"
        autoSize
      />
      {!!messageText.length && (
        <SendOutlined className="button" onClick={handleSubmit} rev="icon" />
      )}
    </div>
  );
};

export default WriterTools;
