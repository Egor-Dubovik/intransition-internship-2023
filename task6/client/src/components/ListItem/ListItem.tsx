import React, { FC } from 'react';
import { IChat } from '../../common/types/messagner';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes.enum';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { addSelectedChat, removeSelectedChat, setOpenChat } from '../../features/Chat/chatSlice';
import { useGetUsersByIdQuery } from '../../features/LoginForm/userAPI';
import { selectUser } from '../../features/LoginForm/userSlice';
import { getDateFromString } from '../../helpers/getDateFromString';
import { useGetLastMessageQuery } from '../../features/ChatList/chatAPI';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Checkbox, Skeleton } from 'antd';
import './ListItem.css';

interface IListItemProps {
  chat: IChat;
}

const ListItem: FC<IListItemProps> = ({ chat }) => {
  const { data: chatMembers, isLoading: isMemLoading } = useGetUsersByIdQuery(chat.members);
  const { data: lastMessage, isLoading: isMessLoading } = useGetLastMessageQuery(chat.id, {
    refetchOnMountOrArgChange: true,
  });
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hndleOpenChat = (): void => {
    dispatch(setOpenChat(chat));
    navigate(`${ROUTES.CHAT}/${chat.id}`);
  };

  const handleSelectChat = (event: CheckboxChangeEvent) => {
    event.target.checked ? dispatch(addSelectedChat(chat)) : dispatch(removeSelectedChat(chat));
  };

  return (
    <div className="list__item chat-item" onClick={hndleOpenChat}>
      <div className="chat-item__content content">
        <div className="content__item" onClick={(event) => event.stopPropagation()}>
          <Checkbox className="content__input" onChange={handleSelectChat} />
        </div>
        {!isMemLoading ? (
          <ul className="content__item">
            {chatMembers?.map((member, index) => (
              <li key={member.id}>
                {user.data?.nickName === member.nickName ? 'me' : member.nickName}
                {index !== chatMembers.length - 1 && ','}
              </li>
            ))}
          </ul>
        ) : (
          <Skeleton.Input style={{ width: '90%', height: '20px', marginRight: '10px' }} active />
        )}
        {!isMessLoading ? (
          <p className="content__item _message-info">
            {chat.topic} - {lastMessage?.text}
          </p>
        ) : (
          <Skeleton.Input style={{ width: '90%', height: '20px', marginRight: '10px' }} active />
        )}
        <div className="content__item _date">{getDateFromString(chat.createdAt)}</div>
      </div>
    </div>
  );
};

export default ListItem;
