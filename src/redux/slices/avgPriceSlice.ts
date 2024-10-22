import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import data from "../../dummy.json";

interface AvgPriceStateInterface {
  eventType: string;
  symbol: string;
  lastTradeTime: string;
  avgPriceInterval: string;
  avgPriceUSD: number;
  avgPriceEUR: number;
  avgPricePKR: number;
  eventTime: string
}

interface InitialStateInterface {
  currentAvgPrice: AvgPriceStateInterface;
  previousPrices: AvgPriceStateInterface[];
  sparkLineChartValues: SparkLineChartValuesInterface;
}
interface SparkLineChartValuesInterface {
  usdPrices: {
    change: number;
    values: number[];
  };
  eurPrices: {
    change: number;
    values: number[];
  };
  pkrPrices: {
    change: number;
    values: number[];
  };
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
    eventTime: ""
  },
  // currentAvgPrice: data.currentAvgPrice,
  previousPrices: [],
  sparkLineChartValues: {
    usdPrices: {
      change: 0,
      values: [],
    },
    eurPrices: {
      change: 0,
      values: [],
    },
    pkrPrices: {
      change: 0,
      values: [],
    },
  },
  // sparkLineChartValues: {
  //   usdPrices: data.usdPrices,
  //   eurPrices: data.eurPrices,
  //   pkrPrices: data.pkrPrices,
  // },
};

const addToSparkLineChartValues = (
  prevState: SparkLineChartValuesInterface,
  data: AvgPriceStateInterface
) => {
  const newState = { ...prevState };

  if (newState.usdPrices.values.length >= 10) {
    newState.usdPrices.values.shift();
  }
  newState.usdPrices.values.push(parseFloat(data.avgPriceUSD.toFixed(2)));

  if (newState.eurPrices.values.length >= 10) {
    newState.eurPrices.values.shift();
  }
  newState.eurPrices.values.push(parseFloat(data.avgPriceEUR.toFixed(2)));

  if (newState.pkrPrices.values.length >= 10) {
    newState.pkrPrices.values.shift();
  }
  newState.pkrPrices.values.push(parseFloat(data.avgPricePKR.toFixed(2)));

  newState.usdPrices.change = calculateDifference(newState.usdPrices.values);
  newState.eurPrices.change = calculateDifference(newState.eurPrices.values);
  newState.pkrPrices.change = calculateDifference(newState.pkrPrices.values);

  return newState;
};

const calculateDifference = (values: number[]): number => {
  if (values.length < 2) return 0;
  const currentPrice = values[values.length - 1];
  const previousPrice = values[values.length - 2];
  return calculateDifferenceInPercentage(currentPrice, previousPrice);
};

const calculateDifferenceInPercentage = (
  currentPrice: number,
  previousPrice: number
): number => {
  const diff = currentPrice - previousPrice;
  const percentage = (diff / previousPrice) * 100;
  return parseFloat(percentage.toFixed(7));
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
      if (state.previousPrices.length >= 20) {
        state.previousPrices.shift();
      }
      state.previousPrices.push(action.payload);
    },
  },
});

export const { setCurrentAvgPrice, addToPriceHistory } = avgPriceSlice.actions;
export default avgPriceSlice.reducer;
