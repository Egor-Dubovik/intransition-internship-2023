import React, { FC, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { SendOutlined } from '@ant-design/icons';
import './WriterTools.css';

const WriterTools: FC = () => {
  const [newMessage, setNewMessage] = useState('');

  const handk = () => {};

  return (
    <div className="chat__writer-tools writer-tools">
      <TextArea
        className="writer-tools__input"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Your message"
        autoSize
      />
      {!!newMessage.length && <SendOutlined className="button" rev="icon" />}
    </div>
  );
};

export default WriterTools;
