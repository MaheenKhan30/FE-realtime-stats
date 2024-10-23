import { Box, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SparklineChart from "./reusableComponents/SparklineChart";
import { useAppSelector } from "../redux/hook";
import { formatPrecision } from "../utils/formatPrecision";

interface SparklineChartCardPropsInterface {
  cardTitle: string;
  cardIcon: string;
  currency: string;
}
const SparklineChartCard: React.FC<SparklineChartCardPropsInterface> = (props) => {
  const theme = useTheme();
  const isMediumOrBelow = useMediaQuery(theme.breakpoints.down("lg"));
  const { cardTitle, cardIcon, currency } = props;
  const sparkLineChartValues = useAppSelector(
    (state) => state.avgPrice.sparkLineChartValues
  );
  const currentAvgPrice = useAppSelector(
    (state) => state.avgPrice.currentAvgPrice
  );
  const currencyPrice =
    currency === "PKR"
      ? sparkLineChartValues.pkrPrices
      : currency === "USD"
      ? sparkLineChartValues.usdPrices
      : sparkLineChartValues.eurPrices;

  const currencyAvgPrice =
    currency === "PKR"
      ? formatPrecision(currentAvgPrice.avgPricePKR, 2)
      : currency === "USD"
      ? formatPrecision(currentAvgPrice.avgPriceUSD, 2)
      : formatPrecision(currentAvgPrice.avgPriceEUR, 2);
  return (
    <>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 3 }}>
        <Box
          component="img"
          src={cardIcon}
          alt="Logo"
          sx={{ height: 30, display: { xs: "none", sm: "block" } }}
        />
        <Typography sx={{ color: "#000", fontSize: 18 }}>
          Currency: <b>{currency}</b>{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMediumOrBelow ? "column" : "row",
          gap: isMediumOrBelow ? 1 : 3,
          alignItems: isMediumOrBelow ? "start" : "center",
          justifyContent: isMediumOrBelow ? "center" : "space-between",
          mb: 3,
        }}
      >
        <Typography sx={{ color: "#000", fontWeight: "bold", fontSize: 30 }}>
          {currencyAvgPrice}
        </Typography>
        <Box sx={{ display: "flex", gap: 0.4 }}>
          {currencyPrice?.change > 0 ? (
            <TrendingUpIcon htmlColor="green" />
          ) : (
            <TrendingDownIcon htmlColor="red" />
          )}
          <Typography
            sx={{ color: currencyPrice?.change > 0 ? "green" : "red" }}
          >
            {currencyPrice?.change}%
          </Typography>
        </Box>
      </Box>

      <SparklineChart values={currencyPrice?.values} />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Typography>{cardTitle}</Typography>
      </Box>
    </>
  );
};

export default SparklineChartCard;
