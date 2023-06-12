import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API } from '../../common/constant/api';
import { IUser } from '../../common/types/user';
import { ILoginProps } from '../../pages/LoginPage/types';

export const loginAPI = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<IUser, ILoginProps>({
      query: (data: ILoginProps) => ({
        url: API.login,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginAPI;
