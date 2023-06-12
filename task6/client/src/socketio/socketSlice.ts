/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';
import { RootState } from '../app/store/store';
import { BASE_URL } from '../common/constant/api';

interface IState {
  socket: Socket;
}

const initialState: IState = {
  socket: io(BASE_URL) as Socket,
};

export const socketSlice = createSlice({
  name: 'socketio',
  initialState,
  reducers: {
    setSocket: (state, action: PayloadAction<Socket>) => {
      state.socket = action.payload as any;
    },
    connectToSocket: (state) => {
      state.socket.connect();
    },
  },
});

export const { connectToSocket, setSocket } = socketSlice.actions;
export const selectSocket = (state: RootState) => state.socketio.socket;
export const socketReducer = socketSlice.reducer;
