import Box from "@mui/material/Box";
import Header from "./Header";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import SparklineChartCard from "./SparklineChartCard";
import StatsCard from "./StatsCard";
import Linechart from "./reusableComponents/Linechart";
import LineChartCard from "./LineChartCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function MainPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: "#ededed",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box sx={{ pt: 15 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item sx={{ p: 3, m: 1, borderRadius: 5 }}>
              <SparklineChartCard
                cardTitle="Bitcoin - BTC"
                cardIcon="/assets/bitcoin.png"
                currency="USD"
              />
            </Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item sx={{ p: 3, m: 1, borderRadius: 5 }}>
              <SparklineChartCard
                cardTitle="Bitcoin - BTC"
                cardIcon="/assets/bitcoin.png"
                currency="EUR"
              />
            </Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item sx={{ p: 3, m: 1, borderRadius: 5 }}>
              <SparklineChartCard
                cardTitle="Bitcoin - BTC"
                cardIcon="/assets/bitcoin.png"
                currency="PKR"
              />
            </Item>
          </Grid>

          <Grid size={{ xs: 6, md: 8 }}>
            <Item sx={{ p: 3, m: 1, borderRadius: 5 }}>
              <LineChartCard/>
            </Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
          <Item sx={{ p: 3, m: 1, borderRadius: 5 }}><StatsCard/></Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
