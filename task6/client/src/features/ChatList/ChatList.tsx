import React, { FC, useEffect, useState, useRef } from 'react';
import VirtualList from 'rc-virtual-list';
import { IChat } from '../../common/types/messagner';
import { useAppSelector } from '../../app/store/hooks';
import { selectUser } from '../LoginForm/userSlice';
import { useGetChatsQuery } from './chatAPI';
import Loader from '../../components/Loader/Loader';
import ListItem from '../../components/ListItem/ListItem';
import { List } from 'antd';
import { CHAT } from '../../common/constant/chat';
import './ChatList.css';

interface IChatListProps {
  topic: string;
  chats: IChat[];
  setChats: React.Dispatch<React.SetStateAction<IChat[]>>;
}

const ChatList: FC<IChatListProps> = ({ topic, chats, setChats }) => {
  const [offset, setOffset] = useState<number>(0);
  const user = useAppSelector(selectUser);
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, refetch } = useGetChatsQuery(
    {
      id: user.data?.id as number,
      limit: CHAT.LIMIT,
      offset,
      topic,
    },
    { refetchOnMountOrArgChange: true }
  );

  const onScroll = (event: React.UIEvent<HTMLElement, UIEvent>): void => {
    const target = event.currentTarget;
    const scrolledToBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 1;
    if (scrolledToBottom && data?.hasMoreChats) {
      setOffset((prevOffset) => prevOffset + CHAT.LIMIT);
      const newChats = data?.chats || [];
      setChats((prevChats) => [...new Set([...prevChats, ...newChats])]);
    }
  };

  useEffect(() => {
    setOffset(0);
    setChats([]);
    refetch();
  }, [topic]);

  useEffect(() => {
    if (data?.chats) {
      setChats((prevChats) => [...new Set([...prevChats, ...data.chats])]);
    }
  }, [data]);

  return (
    <div ref={containerRef} className="chat-list">
      <>
        {!isLoading ? (
          <>
            <List>
              <VirtualList
                data={chats}
                height={containerRef.current?.clientHeight || 0}
                itemHeight={47}
                itemKey="id"
                onScroll={onScroll}
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
      </>
    </div>
  );
};

export default ChatList;
