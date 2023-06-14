import { configureStore } from '@reduxjs/toolkit';
import { chatAPI } from '../../components/ChatList/chatAPI';
import { loginAPI } from '../../features/LoginForm/loginAPI';
import { userReducer } from '../../features/LoginForm/userSlice';
import { sliderMenuReducer } from '../../features/SliderMenu/sliderMenuSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: sliderMenuReducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    [chatAPI.reducerPath]: chatAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(loginAPI.middleware).concat(chatAPI.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
