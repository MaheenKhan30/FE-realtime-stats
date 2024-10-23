import { configureStore } from "@reduxjs/toolkit";
import avgPriceReducer from "./slices/avgPriceSlice";
import statsReducer from "./slices/statsSlice";

export const store = configureStore({
  reducer: {
    avgPrice: avgPriceReducer,
    stats: statsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
