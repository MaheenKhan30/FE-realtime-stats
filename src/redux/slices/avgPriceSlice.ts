import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formatPrecision } from "../../utils/formatPrecision";
import { calculateDifferenceInPercentage } from "../../utils/calculateDifferenceInPercentage";

interface AvgPriceStateInterface {
  eventType: string;
  symbol: string;
  lastTradeTime: string;
  avgPriceInterval: string;
  avgPriceUSD: number;
  avgPriceEUR: number;
  avgPricePKR: number;
  eventTime: string;
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

interface StatsValuesInterface {
  pricesHistory: number[];
  highestPrice: number;
  lowestPrice: number;
}

interface InitialStateInterface {
  currentAvgPrice: AvgPriceStateInterface;
  previousPrices: AvgPriceStateInterface[];
  sparkLineChartValues: SparkLineChartValuesInterface;
  statsValues: StatsValuesInterface;
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
    eventTime: "",
  },
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
  statsValues: {
    pricesHistory: [],
    highestPrice: 0,
    lowestPrice: 0,
  },
};

const updateSparkLineChartValues = (
  prevValues: {
    change: number;
    values: number[];
  },
  data: AvgPriceStateInterface
) => {
  const newValues = { ...prevValues };
  if (newValues.values.length >= 10) {
    newValues.values.shift();
  }
  newValues.values.push(formatPrecision(data.avgPriceUSD, 2));
  newValues.change = calculateDifference(newValues.values);
  return newValues;
};

const addToSparkLineChartValues = (
  prevState: SparkLineChartValuesInterface,
  data: AvgPriceStateInterface
) => {
  const newState = { ...prevState };

  newState.usdPrices = updateSparkLineChartValues(newState.usdPrices, data);
  newState.eurPrices = updateSparkLineChartValues(newState.eurPrices, data);
  newState.pkrPrices = updateSparkLineChartValues(newState.pkrPrices, data);

  return newState;
};

const calculateDifference = (values: number[]): number => {
  if (values.length < 2) return 0;
  const currentPrice = values[values.length - 1];
  const previousPrice = values[values.length - 2];
  return calculateDifferenceInPercentage(currentPrice, previousPrice);
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
    setHighestandLowestPrice: (state, action: PayloadAction<number>) => {
      if (state.statsValues.pricesHistory.length >= 288) {
        state.statsValues.pricesHistory.shift();
      }
      state.statsValues.pricesHistory.push(action.payload);
      const highestPrice = state.statsValues.pricesHistory.reduce((a, b) =>
        Math.max(a, b)
      );
      const lowestPrice = state.statsValues.pricesHistory.reduce((a, b) =>
        Math.min(a, b)
      );

      state.statsValues.highestPrice = parseFloat(highestPrice.toFixed(2));
      state.statsValues.lowestPrice = parseFloat(lowestPrice.toFixed(2));
    },
  },
});

export const {
  setCurrentAvgPrice,
  addToPriceHistory,
  setHighestandLowestPrice,
} = avgPriceSlice.actions;
export default avgPriceSlice.reducer;
