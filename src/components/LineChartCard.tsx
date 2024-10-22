import React from "react";
import Linechart from "./reusableComponents/Linechart";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../redux/hook";

const LineChartCard = () => {
  const previousPrices = useAppSelector(
    (state) => state.avgPrice.previousPrices
  );

  // Prepare xAxisValues and yAxisValues
  const xAxisValues = previousPrices.map((price, index) => index + 1); // 1, 2, 3, ...
  const yAxisValues = previousPrices.map((price) => price.avgPriceUSD); // Use avgPriceUSD or another average price as needed

  return (
    <Box >
        <Box sx={{ display: "flex"}}>
        <Typography sx={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
          Current Statistics
        </Typography>
      </Box>
      <Linechart
        xAxisValues={xAxisValues}
        yAxisValues={yAxisValues}
      />
    </Box>
  );
};

export default LineChartCard;
