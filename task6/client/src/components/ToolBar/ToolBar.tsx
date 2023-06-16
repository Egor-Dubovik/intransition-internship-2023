import React, { ChangeEvent, Dispatch, FC } from 'react';
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useAppSelector } from '../../app/store/hooks';
import { selectedChat } from '../../features/Chat/chatSlice';
import { useDeleteMutation } from '../../features/ChatList/chatAPI';
import { IChat } from '../../common/types/messagner';
import './ToolBar.css';

interface IToolBarProps {
  setTopic: Dispatch<React.SetStateAction<string>>;
  setChats: React.Dispatch<React.SetStateAction<IChat[]>>;
}

const ToolBar: FC<IToolBarProps> = ({ setTopic, setChats }) => {
  const selectedChats = useAppSelector(selectedChat);
  const [deleteChat] = useDeleteMutation();
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  const handleDelete = (): void => {
    selectedChats.forEach((chat) => {
      setChats((prevChats) => prevChats.filter((curentChat) => curentChat.id !== chat.id));
      deleteChat(chat.id);
    });
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      setTopic(event.target.value);
      debounceTimer = null;
    }, 300);
  };

  return (
    <div className="messanger__tool-bar tool-bar">
      <Input
        className="tool-bar__input"
        placeholder="search by topic"
        prefix={<SearchOutlined rev="icon" />}
        onChange={handleSearch}
      />
      <button className="tool-bar__button _delete" onClick={handleDelete}>
        <DeleteOutlined rev="icon" />
      </button>
    </div>
  );
};

export default ToolBar;
