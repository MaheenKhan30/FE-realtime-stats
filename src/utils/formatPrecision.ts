export const formatPrecision = (value: number, precision: number = 2): number => {
    return parseFloat(value.toFixed(precision));
  };
  