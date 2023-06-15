import React, { FC } from 'react';
import { IChat } from '../../common/types/messagner';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes.enum';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { setOpenChat } from '../../pages/Chat/chatSlice';
import './ListItem.css';
import { useGetUsersByIdQuery } from '../../features/LoginForm/userAPI';
import { selectUser } from '../../features/LoginForm/userSlice';
import { getDateFromString } from '../../helpers/getDateFromString';

interface IListItemProps {
  chat: IChat;
}

const ListItem: FC<IListItemProps> = ({ chat }) => {
  const { data } = useGetUsersByIdQuery(chat.members);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hndleOpenChat = (): void => {
    dispatch(setOpenChat(chat));
    navigate(`${ROUTES.CHAT}/${chat.id}`);
  };

  return (
    <div className="list__item chat-item" onClick={hndleOpenChat}>
      <div className="chat-item__content">
        <ul className="chat-item__members">
          {data?.map((member, index) => (
            <li key={member.id}>
              {user.data?.nickName === member.nickName ? 'me' : member.nickName}
              {index !== data.length - 1 && ','}
            </li>
          ))}
        </ul>
        <p>topic: {chat.topic}</p>
        <div>{getDateFromString(chat.createdAt)}</div>
      </div>
    </div>
  );
};

export default ListItem;
