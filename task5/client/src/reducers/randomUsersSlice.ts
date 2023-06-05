import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store/store';
import { IUserData } from '../common/types/user';

const initialState = {
  users: [] as IUserData[],
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
  },
});

export const { setUsers } = randomUsersSlice.actions;
export const selectUsers = (state: RootState) => state.randomUsers.users;
export const randomUsersReducer = randomUsersSlice.reducer;
