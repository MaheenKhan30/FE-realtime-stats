import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StatsSliceInterface {
  pricesHistory: number[];
  highestPrice: number;
  lowestPrice: number;
}

const initialState: StatsSliceInterface = {
    pricesHistory: [],
    highestPrice: 0,
    lowestPrice: 0
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setHighestPrice: (state, action: PayloadAction<number>) => {
      if (state.pricesHistory.length >= 288) {
        state.pricesHistory.shift();
      }
      state.pricesHistory.push(action.payload);
      const highestPrice = state.pricesHistory.reduce((a, b) => Math.max(a, b))
      const lowestPrice = state.pricesHistory.reduce((a, b) => Math.min(a, b))

      state.highestPrice = parseFloat(highestPrice.toFixed(2))
      state.lowestPrice = parseFloat(lowestPrice.toFixed(2))
      
    }
  },
});

export const { setHighestPrice } = statsSlice.actions;
export default statsSlice.reducer;
