import { configureStore } from '@reduxjs/toolkit';
import { loginAPI } from '../../features/LoginForm/loginAPI';
import { userReducer } from '../../features/LoginForm/userSlice';
import { sliderMenuReducer } from '../../features/SliderMenu/sliderMenuSlice';
import { socketReducer } from '../../socketio/socketSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: sliderMenuReducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    socketio: socketReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(loginAPI.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
