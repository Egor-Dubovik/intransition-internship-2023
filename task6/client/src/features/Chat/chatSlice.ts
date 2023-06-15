import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';
import { IChat } from '../../common/types/messagner';

const initialState = {
  active: {} as IChat,
  selected: [] as IChat[],
  isDelteted: false,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setOpenChat: (state, action: PayloadAction<IChat>) => {
      state.active = action.payload;
    },
    addSelectedChat: (state, action: PayloadAction<IChat>) => {
      state.selected.push(action.payload);
    },
    removeSelectedChat: (state, action: PayloadAction<IChat>) => {
      state.selected = state.selected.filter((chat) => chat.id !== action.payload.id);
    },
    setIsDelete: (state, action: PayloadAction<boolean>) => {
      state.isDelteted = action.payload;
    },
  },
});

export const { setOpenChat, addSelectedChat, removeSelectedChat, setIsDelete } = chatSlice.actions;
export const selectChat = (state: RootState) => state.chat.active;
export const selectedChat = (state: RootState) => state.chat.selected;
export const selectIsDeleted = (state: RootState) => state.chat.isDelteted;
export const chatReducer = chatSlice.reducer;
