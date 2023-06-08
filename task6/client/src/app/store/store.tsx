import { configureStore } from '@reduxjs/toolkit';
import { sliderMenuReducer } from '../../features/SliderMenu/sliderMenuSlice';

export const store = configureStore({
  reducer: {
    menu: sliderMenuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
