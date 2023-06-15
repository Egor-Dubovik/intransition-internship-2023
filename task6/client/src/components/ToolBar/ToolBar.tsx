import React, { FC, useEffect } from 'react';
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { selectedChat, setIsDelete } from '../../features/Chat/chatSlice';
import './ToolBar.css';
import { useDeleteMutation, useGetChatsQuery } from '../../features/ChatList/chatAPI';

const ToolBar: FC = () => {
  const selectedChats = useAppSelector(selectedChat);
  const [deleteChat, { isLoading, isSuccess }] = useDeleteMutation();
  const dispatch = useAppDispatch();

  const handleDelete = (): void => {
    selectedChats.forEach((chat) => {
      deleteChat(chat.id);
    });
  };

  useEffect(() => {
    if (isSuccess) dispatch(setIsDelete(true));
  }, [isSuccess]);

  return (
    <div className="messanger__tool-bar tool-bar">
      <Input
        className="tool-bar__input"
        placeholder="search"
        prefix={<SearchOutlined rev="icon" />}
      />
      <button className="tool-bar__button _delete" onClick={handleDelete}>
        <DeleteOutlined rev="icon" />
      </button>
    </div>
  );
};

export default ToolBar;
