import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';

const initialState = {
  isVisible: false,
};

export const sliderMenuSlice = createSlice({
  name: 'slider-menu',
  initialState,
  reducers: {
    setIsVisible: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setIsVisible } = sliderMenuSlice.actions;
export const selectIsVisible = (state: RootState) => state.menu.isVisible;
export const sliderMenuReducer = sliderMenuSlice.reducer;
