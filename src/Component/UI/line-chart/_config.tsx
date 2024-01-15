import { ApexOptions } from "apexcharts";
type LineChart = {
  series: any;
  options: ApexOptions;
};
const lineChart: LineChart = {
  series: [
    {
      name: "Lượt nghe",
      data: [
        923829685, 3071919977, 5197387080, 8739803448, 7049879165, 1921987323,
        2112324098, 6205426520, 5134197721, 8111197222, 5680658876, 6678916075,
        7112389866, 1825987029, 3707425009, 5690032820, 5215362700, 7907680929,
        4011742500, 7834864817, 5317262901, 1228386731, 203710220, 4217911343,
        1621995477, 5614037034, 1935363499, 3925831079, 8014296483, 3504314594,
        2105157208,
      ],
      offsetY: 0,
    },
  ],

  options: {
    markers: {
      colors: ["#ff7506"],
      strokeWidth: [4],
      hover: {
        size: 10,
      },
    },
    grid: {
      borderColor: "#363648",
    },
    theme: {
      mode: "dark",
    },
    chart: {
      width: "100%",
      height: 1000,
      background: "transparent",
      type: "line",
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ["#ff7506"],
      curve: "smooth",
      width: [6],
    },

    yaxis: {
      axisBorder: {
        show: true,
        color: "#363648",
        width: 2,
      },
      tickAmount: 9,
      min: 0,
      max: 9000000000,
      stepSize: 1000000000,
      labels: {
        formatter: function (val, opts) {
          if (val > 0) return val / 1000000000 + " triệu";
          else return val + "";
        },
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: ["#90909d"],
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: Array.from({ length: 100 }, () => "#90909d"),
        },
      },
      axisBorder: {
        show: true,
        color: "#363648",
        strokeWidth: 2,
      },
    },

    tooltip: {
      theme: "dark",
      enabled: true,
      shared: false,
      followCursor: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `
        <div class='relative backdrop-blur-3xl bg-modal p-4 gap-2 justify-center items-center custom-tooltip flex flex-col'>
        <h5 class='text-third'>Lượt nghe</h5>
        <h5 class='text-white font-semibold'>
        ${series[seriesIndex][dataPointIndex]}</h5>
        </div>`;
      },
    },
  },
};

export default lineChart;
