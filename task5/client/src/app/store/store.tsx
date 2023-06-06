import { configureStore } from '@reduxjs/toolkit';
import { randomUsersReducer } from '../../reducers/randomUsersSlice';

export const store = configureStore({
  reducer: {
    randomUsers: randomUsersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
