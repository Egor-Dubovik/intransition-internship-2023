import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API } from '../../common/constant/api';
import { IUser } from '../../common/types/user';
import { ILoginProps } from '../../pages/LoginPage/types';

export const userAPI = createApi({
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

    getUsersById: builder.query<IUser[], string>({
      query: (usersId: string) => ({
        url: `${API.usersById}?usersId=${usersId}`,
        headers: { 'Content-Type': 'application/json' },
      }),
    }),

    getAllUsers: builder.query<IUser[], void>({
      query: () => ({
        url: API.users,
        headers: { 'Content-Type': 'application/json' },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUsersByIdQuery, useGetAllUsersQuery } = userAPI;
