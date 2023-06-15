import { configureStore } from '@reduxjs/toolkit';
import { chatAPI } from '../../features/ChatList/chatAPI';
import { userAPI } from '../../features/LoginForm/userAPI';
import { userReducer } from '../../features/LoginForm/userSlice';
import { messageAPI } from '../../features/MessageList/messageAPI';
import { sliderMenuReducer } from '../../features/SliderMenu/sliderMenuSlice';
import { chatReducer } from '../../features/Chat/chatSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: sliderMenuReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [chatAPI.reducerPath]: chatAPI.reducer,
    [messageAPI.reducerPath]: messageAPI.reducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(userAPI.middleware)
      .concat(chatAPI.middleware)
      .concat(messageAPI.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
