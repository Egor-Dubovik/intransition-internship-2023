import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IChatResInfo, IReqChatsProps } from '../../common/types/messagner';
import { API, API_URL } from '../../common/constant/api';

export const chatAPI = createApi({
  reducerPath: 'chats',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getChats: builder.query<IChatResInfo, IReqChatsProps>({
      query: ({ id, limit, offset }) => ({
        url: `${API.chats}?id=${id}&limit=${limit}&offset=${offset}`,
        headers: { 'Content-Type': 'application/json' },
      }),
    }),
  }),
});

export const { useGetChatsQuery } = chatAPI;
