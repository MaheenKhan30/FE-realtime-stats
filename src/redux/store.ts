import { configureStore } from "@reduxjs/toolkit";
import avgPriceReducer from "./slices/avgPriceSlice";

export const store = configureStore({
  reducer: {
    avgPrice: avgPriceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
