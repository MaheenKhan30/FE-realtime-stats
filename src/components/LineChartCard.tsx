import { Box, Typography } from "@mui/material";

import Linechart from "./reusableComponents/Linechart";

import { useAppSelector } from "../redux/hook";

const LineChartCard: React.FC = () => {
  const previousPrices = useAppSelector(
    (state) => state.avgPrice.previousPrices
  );

  const xAxisValues = previousPrices.map((price, index) => index + 1);
  const yAxisValues = previousPrices.map((price) => price.avgPriceUSD);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
          Current Statistics
        </Typography>
      </Box>
      <Linechart xAxisValues={xAxisValues} yAxisValues={yAxisValues} />
    </Box>
  );
};

export default LineChartCard;
