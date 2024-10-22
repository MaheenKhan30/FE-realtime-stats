import React from "react";
import Linechart from "./reusableComponents/Linechart";
import { Box } from "@mui/material";
import { useAppSelector } from "../redux/hook";

const LineChartCard = () => {
  const previousPrices = useAppSelector(
    (state) => state.avgPrice.previousPrices
  );

  return (
    <Box>
      <Linechart
        xAxisValues={[1,2,3,4,5]}
        yAxisValues={[2.2, 4.2, 5, 10, 4]}
      />
    </Box>
  );
};

export default LineChartCard;
