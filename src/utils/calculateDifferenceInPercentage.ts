export const calculateDifferenceInPercentage = (
    currentValue: number,
    previousValue: number
  ): number => {
    const diff = currentValue - previousValue;
    const percentage = (diff / previousValue) * 100;
    return parseFloat(percentage.toFixed(7));
  };