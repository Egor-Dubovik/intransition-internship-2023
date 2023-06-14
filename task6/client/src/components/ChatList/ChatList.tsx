import React, { FC, useEffect, useState, useRef } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import VirtualList from 'rc-virtual-list';
import { IChat } from '../../common/types/messagner';
import { useAppSelector } from '../../app/store/hooks';
import { selectUser } from '../../features/LoginForm/userSlice';
import { useGetChatsQuery } from './chatAPI';
import Loader from '../Loader/Loader';
import ListItem from '../ListItem/ListItem';
import { List } from 'antd';
import './ChatList.css';

const ChatList: FC = () => {
  const [chats, setChats] = useState<IChat[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const user = useAppSelector(selectUser);
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useGetChatsQuery({
    id: user.data?.id as number,
    limit: 10,
    offset,
  });

  const onScroll = (event: React.UIEvent<HTMLElement, UIEvent>): void => {
    const target = event.currentTarget;
    const scrolledToBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 1;
    if (scrolledToBottom && data?.hasMoreChats) setOffset(offset + 10);
  };

  useEffect(() => {
    if (data) {
      setChats([...chats, ...data.chats]);
    }
    console.log(chats);
    console.log(chats.length);
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
