import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMessaaageResInfo, IReqMessageProps } from '../../common/types/messagner';
import { API, API_URL } from '../../common/constant/api';

export const messageAPI = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getMessages: builder.query<IMessaaageResInfo, IReqMessageProps>({
      query: ({ chatid, limit, offset }) => ({
        url: `${API.messages}?chatid=${chatid}&limit=${limit}&offset=${offset}`,
        headers: { 'Content-Type': 'application/json' },
      }),
    }),
  }),
});

export const { useGetMessagesQuery } = messageAPI;
