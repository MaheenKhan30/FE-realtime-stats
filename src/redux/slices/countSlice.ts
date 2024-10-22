// src/redux/slices/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountState {
  value: number
}

const initialState: CountState = {
  value: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incrementCount: (state, action: PayloadAction<string>) => {
      state.value = state.value + 1;
    },
  },
});

export const { incrementCount } = countSlice.actions;
export default countSlice.reducer;
