import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store/store';
import { INITIAL_PROPS } from '../common/constant/initialProps';
import { IUserData, IUserParams } from '../common/types/user';

const initialState = {
  users: [] as IUserData[],
  params: {
    locale: INITIAL_PROPS.LOCALE,
    seed: INITIAL_PROPS.SEED,
    errorCount: INITIAL_PROPS.ERR_COUNT,
    page: INITIAL_PROPS.PAGE,
  } as IUserParams,
  isFirstFetch: false,
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

    setIsFirstFetch: (state, action: PayloadAction<boolean>) => {
      state.isFirstFetch = action.payload;
    },
  },
});

export const { setUsers, addUsers, setParams, setIsFirstFetch } = randomUsersSlice.actions;
export const selectUsers = (state: RootState) => state.randomUsers.users;
export const selectIsFirstFetch = (state: RootState) => state.randomUsers.isFirstFetch;
export const selectParams = (state: RootState) => state.randomUsers.params;
export const randomUsersReducer = randomUsersSlice.reducer;
