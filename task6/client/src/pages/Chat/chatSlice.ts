import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';
import { IChat } from '../../common/types/messagner';

const initialState = {} as IChat;

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setOpenChat: (state, action: PayloadAction<IChat>) => action.payload,
  },
});

export const { setOpenChat } = chatSlice.actions;
export const selectChat = (state: RootState) => state.activeChat;
export const chatReducer = chatSlice.reducer;
