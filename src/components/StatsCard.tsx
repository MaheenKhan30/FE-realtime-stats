import { Box, Divider, Typography } from "@mui/material";

import { useAppSelector } from "../redux/hook";

const StatsCard = () => {
  const currentAvgPrice = useAppSelector(
    (state) => state.avgPrice.currentAvgPrice
  );
  const highestPrice = useAppSelector((state) => state.stats.highestPrice);
  const lowestPrice = useAppSelector((state) => state.stats.lowestPrice);
  return (
    <Box>
      <Box sx={{ display: "flex", mb: 3 }}>
        <Typography sx={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
          Bitcoin - BTC Statistics{" "}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", position: "relative", gap: "-20px" }}>
        <Divider
          sx={{ height: "205px", backgroundColor: "#4e4d4f" }}
          orientation="vertical"
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              left: "-5px", // Adjust the value as needed to overlap the divider
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#ffc107",
              }}
            />
            <Box sx={{ display: "flex", gap: 1 }}></Box>
            <Typography sx={{ color: "#555657", fontSize: "large" }}>
              Last Trade Time:
            </Typography>
            <Typography sx={{ color: "#2d6aed", fontSize: "large" }}>
              {currentAvgPrice?.lastTradeTime}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              left: "-5px", // Adjust the value as needed to overlap the divider
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#ffc107",
              }}
            />
            <Box sx={{ display: "flex", gap: 1 }}></Box>
            <Typography sx={{ color: "#555657", fontSize: "large" }}>
              Highest Price:
            </Typography>
            <Typography sx={{ color: "#2d6aed", fontSize: "large" }}>
              {highestPrice} USD
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              left: "-5px", 
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#ffc107",
              }}
            />
            <Box sx={{ display: "flex", gap: 1 }}></Box>
            <Typography sx={{ color: "#555657", fontSize: "large" }}>
              Lowest Price:
            </Typography>
            <Typography sx={{ color: "#2d6aed", fontSize: "large" }}>
              {lowestPrice} USD
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              left: "-5px", // Adjust the value as needed to overlap the divider
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#ffc107",
              }}
            />
            <Box sx={{ display: "flex", gap: 1 }}></Box>
            <Typography sx={{ color: "#555657", fontSize: "large" }}>
              Average Price Interval:
            </Typography>
            <Typography sx={{ color: "#2d6aed", fontSize: "large" }}>
              {currentAvgPrice?.avgPriceInterval}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StatsCard;
