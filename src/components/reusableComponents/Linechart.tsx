import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";


export default function Linechart(props: any) {

    const { xAxisValues, yAxisValues } = props;

  return (
    <LineChart
      xAxis={[{ data: xAxisValues }]}
      series={[
        {
          data: yAxisValues,
        },
      ]}
      width={900}
      height={230}
    />
  );
}
