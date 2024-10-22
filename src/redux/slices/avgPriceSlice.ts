import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import data from "../../dummy.json";

interface AvgPriceStateInterface {
  eventType: string;
  symbol: string;
  lastTradeTime: string;
  avgPriceInterval: string;
  avgPriceUSD: number;
  avgPriceEUR: number;
  avgPricePKR: number;
}

interface InitialStateInterface {
  currentAvgPrice: AvgPriceStateInterface;
  previousPrices: AvgPriceStateInterface[];
  sparkLineChartValues: SparkLineChartValuesInterface;
}
interface SparkLineChartValuesInterface {
  usdPrices: number[];
  eurPrices: number[];
  pkrPrices: number[];
}

const initialState: InitialStateInterface = {
  currentAvgPrice: {
    eventType: "avgPrice",
    symbol: "BTCUSDT",
    lastTradeTime: "",
    avgPriceInterval: "5m",
    avgPriceUSD: 0,
    avgPriceEUR: 0,
    avgPricePKR: 0,
  },
// currentAvgPrice: data.currentAvgPrice,
  previousPrices: [],
  sparkLineChartValues: {
    usdPrices: [],
    eurPrices: [],
    pkrPrices: [],
  },
//   sparkLineChartValues: {
//     usdPrices: data.usdPrices,
//     eurPrices: data.eurPrices,
//     pkrPrices: data.pkrPrices,
//   },
};

const addToSparkLineChartValues = (
  prevState: SparkLineChartValuesInterface,
  data: AvgPriceStateInterface
) => {
  const newState = { ...prevState };

  if (newState.usdPrices.length >= 10) {
    newState.usdPrices.shift();
  }
  if(newState.eurPrices.length >= 10) {
    newState.eurPrices.shift();
  }
  if(newState.pkrPrices.length >= 10) {
    newState.pkrPrices.shift();
  }
  newState.usdPrices.push(parseFloat(data.avgPriceUSD.toFixed(2)));
  newState.eurPrices.push(parseFloat(data.avgPriceEUR.toFixed(2)));
  newState.pkrPrices.push(parseFloat(data.avgPricePKR.toFixed(2)));
  return newState;
};

const avgPriceSlice = createSlice({
  name: "avgPrice",
  initialState,
  reducers: {
    setCurrentAvgPrice: (
      state,
      action: PayloadAction<AvgPriceStateInterface>
    ) => {
      state.currentAvgPrice = action.payload;
      const newSparkLineChartValues = addToSparkLineChartValues(
        state.sparkLineChartValues,
        action.payload
      );

      state.sparkLineChartValues = newSparkLineChartValues;
    },
    addToPriceHistory: (state, action) => {
      if (state.previousPrices.length >= 50) {
        state.previousPrices.shift();
      }
      state.previousPrices.push(action.payload);
    },
  },
});

export const { setCurrentAvgPrice, addToPriceHistory } = avgPriceSlice.actions;
export default avgPriceSlice.reducer;
