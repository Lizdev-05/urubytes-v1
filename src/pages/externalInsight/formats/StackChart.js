import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const generateDayWiseTimeSeries = (baseval, count, yrange) => {
  const series = [];
  for (let i = 0; i < count; i++) {
    const x = baseval + i * 86400000;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
  }
  return series;
};

const StackChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: "Sales",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            { min: 10, max: 60 }
          ),
        },
        {
          name: "Tech",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            { min: 10, max: 20 }
          ),
        },
        {
          name: "Products",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            { min: 10, max: 15 }
          ),
        },
      ],
      chart: {
        type: "area",
        height: 350,
        stacked: true,
        events: {
          selection: (chart, e) => {
            console.log(new Date(e.xaxis.min));
          },
        },
      },
      colors: ["#008FFB", "#00E396", "#CED4DC"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
      xaxis: {
        type: "datetime",
      },
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      // Clean up function to destroy the chart when component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div ref={chartRef} id="chart" />;
};

export default StackChart;
