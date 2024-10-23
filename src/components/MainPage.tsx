import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import Header from "./Header";
import SparklineChartCard from "./SparklineChartCard";
import StatsCard from "./StatsCard";
import LineChartCard from "./LineChartCard";
import Card from "./reusableComponents/Card";

import { currencies } from "../utils/constants";

const MainPage : React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: "#ededed",
        minHeight: "100vh",
        px:3
      }}
    >
      <Header />

      <Box sx={{ pt: 15 }}>
        <Grid container spacing={2}>
          {currencies &&
            currencies?.map((currency, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card>
                  <SparklineChartCard
                    cardTitle="Bitcoin - BTC"
                    cardIcon="/assets/bitcoin.png"
                    currency={currency}
                  />
                </Card>
              </Grid>
            ))}
          <Grid size={{ xs: 12, md: 12, lg: 8 }}>
            <Card>
              <LineChartCard />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 12, lg: 4 }}>
            <Card>
              <StatsCard />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainPage;
