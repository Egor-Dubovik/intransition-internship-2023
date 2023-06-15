import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IChatResInfo, IMessage, IReqChatsProps } from '../../common/types/messagner';
import { API, API_URL } from '../../common/constant/api';

export const chatAPI = createApi({
  reducerPath: 'chats',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getChats: builder.query<IChatResInfo, IReqChatsProps>({
      query: ({ id, limit, offset, topic }) => ({
        url: `${API.chats}?id=${id}&limit=${limit}&offset=${offset}&topic=${topic}`,
      }),
    }),

    getLastMessage: builder.query<IMessage, number>({
      query: (chatId: number) => ({
        url: `${API.lastMessage}?chatId=${chatId}`,
      }),
    }),

    delete: builder.mutation<number, number>({
      query: (id: number) => ({
        url: API.chat,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: { id },
      }),
    }),
  }),
});

export const { useGetChatsQuery, useGetLastMessageQuery, useDeleteMutation } = chatAPI;
