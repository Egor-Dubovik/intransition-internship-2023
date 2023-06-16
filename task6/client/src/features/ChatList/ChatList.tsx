import React, { FC, useEffect, useRef } from 'react';
import VirtualList from 'rc-virtual-list';
import { IChat } from '../../common/types/messagner';
import { useAppSelector } from '../../app/store/hooks';
import { selectUser } from '../LoginForm/userSlice';
import { useGetChatsQuery } from './chatAPI';
import Loader from '../../components/Loader/Loader';
import ListItem from '../../components/ListItem/ListItem';
import { List } from 'antd';
import './ChatList.css';

interface IChatListProps {
  topic: string;
  chats: IChat[];
  setChats: React.Dispatch<React.SetStateAction<IChat[]>>;
}

const ChatList: FC<IChatListProps> = ({ topic, chats, setChats }) => {
  const user = useAppSelector(selectUser);
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, refetch } = useGetChatsQuery(
    { id: user.data?.id as number, topic },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    refetch();
  }, [topic]);

  useEffect(() => {
    if (data?.chats) {
      setChats(data.chats);
    }
    console.log(data);
  }, [data]);

  return (
    <div ref={containerRef} className="chat-list">
      {!isLoading ? (
        <>
          <List>
            <VirtualList
              data={chats}
              height={containerRef.current?.clientHeight || 0}
              itemHeight={47}
              itemKey="id"
            >
              {(chat: IChat) => (
                <List.Item key={chat.id} className="chat-list__item">
                  <ListItem chat={chat} />
                </List.Item>
              )}
            </VirtualList>
          </List>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ChatList;
