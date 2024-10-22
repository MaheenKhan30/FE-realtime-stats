import { configureStore } from '@reduxjs/toolkit';
import countReducer from './slices/countSlice'; 
import avgPriceReducer from './slices/avgPriceSlice';

export const store = configureStore({
  reducer: {
    count: countReducer,
    avgPrice: avgPriceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
