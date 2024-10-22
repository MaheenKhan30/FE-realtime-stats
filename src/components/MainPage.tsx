import Box from "@mui/material/Box";
import Header from "./Header";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import SparklineChartCard from "./SparklineChartCard";

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
      }}
    >
      <Header />

      <Box sx={{ pt: 15 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item sx={{ px: 3, m: 2, py: 3, borderRadius: 5 }}>
              <SparklineChartCard
                cardTitle="Bitcoin - BTC"
                cardIcon="/assets/bitcoin.png"
                currency="USD"
              />
            </Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item sx={{ px: 3, m: 2, py: 3, borderRadius: 5 }}>
              <SparklineChartCard
                cardTitle="Bitcoin - BTC"
                cardIcon="/assets/bitcoin.png"
                currency="EUR"
              />
            </Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item sx={{ px: 3, m: 2, py: 3, borderRadius: 5 }}>
              <SparklineChartCard
                cardTitle="Bitcoin - BTC"
                cardIcon="/assets/bitcoin.png"
                currency="PKR"
              />
            </Item>
          </Grid>

          <Grid size={{ xs: 6, md: 8 }}>
            <Item>Line Chart</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item>Stats</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 12 }}>
            <Item>Table</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
