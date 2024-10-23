import { Box, Typography } from "@mui/material";

import { useAppSelector } from "../redux/hook";
import CustomList from "./reusableComponents/CustomList";

const StatsCard: React.FC = () => {
  const currentAvgPrice = useAppSelector(
    (state) => state.avgPrice.currentAvgPrice
  );
  const highestPrice = useAppSelector((state) => state.avgPrice.statsValues.highestPrice);
  const lowestPrice = useAppSelector((state) => state.avgPrice.statsValues.lowestPrice);
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
          Bitcoin - BTC Statistics
        </Typography>
      </Box>
      <CustomList
        listValues={[
          { name: "Last Trade Time", content: currentAvgPrice?.lastTradeTime },
          { name: "Highest Price", content: highestPrice },
          { name: "Lowest Price", content: lowestPrice },
          {
            name: "Average Price Interval",
            content: currentAvgPrice?.avgPriceInterval,
          },
        ]}
      />
    </Box>
  );
};

export default StatsCard;
