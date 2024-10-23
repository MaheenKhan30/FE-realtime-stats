import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

interface SparklineChartPropsInterface {
  values: number[];
}
const SparklineChart: React.FC<SparklineChartPropsInterface> = (props) => {
  const { values } = props;
  return (
    <SparkLineChart
      data={values}
      height={100}
      colors={["#7146b3"]}
      showHighlight
      showTooltip
    />
  );
};

export default SparklineChart;
