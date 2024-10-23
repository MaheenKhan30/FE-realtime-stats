import { LineChart } from "@mui/x-charts/LineChart";

interface LinechartPropsInterface {
  xAxisValues: number[];
  yAxisValues: number[];
}
const Linechart: React.FC<LinechartPropsInterface> = (props) => {
  const { xAxisValues, yAxisValues } = props;

  return (
    <div style={{ width: "100%" }}>
      <LineChart
        xAxis={[{ data: xAxisValues }]}
        series={[
          {
            data: yAxisValues,
          },
        ]}
        height={230}
      />
    </div>
  );
};

export default Linechart;
