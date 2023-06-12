import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';
import { IUser } from '../../common/types/user';

export interface IUserSlice {
  data: IUser | null;
}

const initialState: IUserSlice = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUser | null>) => {
      state.data = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;
