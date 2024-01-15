import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import lineChart from "./_config";

function LineChart() {
  return (
    <div className="w-full rounded-xl bg-input p-4">
      <ReactApexChart
        options={lineChart.options}
        series={lineChart.series}
        type="line"
        height={450}
        width={"100%"}
      />
    </div>
  );
}

export default LineChart;
