import React, { FC, useEffect, useState, useRef } from 'react';
import { Divider, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import VirtualList from 'rc-virtual-list';
import './ChatList.css';
import { IChat } from '../../common/types/messagner';
import { useAppSelector } from '../../app/store/hooks';
import { selectUser } from '../../features/LoginForm/userSlice';
import { useGetChatsQuery } from './chatAPI';
import Loader from '../Loader/Loader';

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
    <div ref={containerRef} style={{ height: '95%', overflow: 'auto' }}>
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
                  <List.Item key={chat.id}>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{chat.topic}</a>}
                      description={chat.id}
                    />
                    <div>Content</div>
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
