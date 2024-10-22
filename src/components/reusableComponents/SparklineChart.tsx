import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
export default function SparklineChart(props: any) {
    const {values}= props
  return (
    <SparkLineChart
      data={values}
      height={100}
      colors={["#7146b3"]}
      showHighlight
      showTooltip
    />
  );
}
