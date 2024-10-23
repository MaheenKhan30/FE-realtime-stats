import { LineChart } from "@mui/x-charts/LineChart";

const Linechart = (props: any) => {
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
