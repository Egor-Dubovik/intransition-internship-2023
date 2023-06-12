import { configureStore } from '@reduxjs/toolkit';
import { loginAPI } from '../../components/form/LoginForm/loginAPI';
import { sliderMenuReducer } from '../../features/SliderMenu/sliderMenuSlice';

export const store = configureStore({
  reducer: {
    menu: sliderMenuReducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(loginAPI.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
