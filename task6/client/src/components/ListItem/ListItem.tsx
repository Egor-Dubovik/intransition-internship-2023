import React, { FC } from 'react';
import { IChat } from '../../common/types/messagner';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes.enum';
import { useAppDispatch } from '../../app/store/hooks';
import { setOpenChat } from '../../pages/Chat/chatSlice';
import './ListItem.css';

interface IListItemProps {
  chat: IChat;
}

const ListItem: FC<IListItemProps> = ({ chat }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hndleOpenChat = (): void => {
    dispatch(setOpenChat(chat));
    navigate(`${ROUTES.CHAT}/${chat.id}`);
  };

  return (
    <div className="list__item" onClick={hndleOpenChat}>
      <div>
        {chat.topic} {chat.id}
      </div>
      <div>Content</div>
    </div>
  );
};

export default ListItem;