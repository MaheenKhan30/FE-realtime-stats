import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../redux/hook";
import SparklineChart from "./reusableComponents/SparklineChart";

const SparklineChartCard = (props: any) => {
  const { cardTitle, cardIcon, currency } = props;
  const sparkLineChartValues = useAppSelector(
    (state) => state.avgPrice.sparkLineChartValues
  );
  const currentAvgPrice = useAppSelector(
    (state) => state.avgPrice.currentAvgPrice
  );
  return (
    <>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 3 }}>
        <Box
          component="img"
          src={cardIcon}
          alt="Logo"
          sx={{ height: 30, display: { xs: "none", sm: "block" } }}
        />
        <Typography sx={{ color: "#000", }}>
          {cardTitle}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 3 }}>
        <Typography sx={{ color: "#000", fontWeight: "bold", fontSize: 30 }}>
          {/* Current Average Price:{" "} */}
          {currency === "PKR"
            ? parseFloat(currentAvgPrice.avgPricePKR.toFixed(2))
            : currency === "USD"
            ? parseFloat(currentAvgPrice.avgPriceUSD.toFixed(2))
            : parseFloat(currentAvgPrice.avgPriceEUR.toFixed(2))}
        </Typography>
      </Box>

      <SparklineChart
        values={
          currency === "PKR"
            ? sparkLineChartValues.pkrPrices
            : currency === "USD"
            ? sparkLineChartValues.usdPrices
            : sparkLineChartValues.eurPrices
        }
      />
      <Box sx={{ display: "flex", gap: 1, justifyContent: "end" }}>
        <Typography>Currency: {currency}</Typography>
      </Box>
    </>
  );
};

export default SparklineChartCard;
