import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store/store';
import { INITIAL_PAGE } from '../common/constant/inputData';
import { IUserData, IUserParams } from '../common/types/user';

const initialState = {
  users: [] as IUserData[],
  params: {
    page: INITIAL_PAGE,
  } as IUserParams,
};

const randomUsersSlice = createSlice({
  name: 'all- random-users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUserData[]>) => {
      state.users = action.payload;
    },
    addUsers: (state, action: PayloadAction<IUserData[]>) => {
      state.users = [...state.users, ...action.payload];
    },
    setParams: (state, action: PayloadAction<IUserParams>) => {
      state.params = action.payload;
    },
  },
});

export const { setUsers, addUsers, setParams } = randomUsersSlice.actions;
export const selectUsers = (state: RootState) => state.randomUsers.users;
export const selectParams = (state: RootState) => state.randomUsers.params;
export const randomUsersReducer = randomUsersSlice.reducer;
