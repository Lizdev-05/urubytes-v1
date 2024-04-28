import React, { useEffect, useRef } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Banner = () => {
  const options = {
    title: {
      text: "Financial Performance of BIG Logistics Q1",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          { label: "East Legon branch", y: 10 },
          //   { label: "Pram Pram Branch", y: 15 },
          { label: "Takoradi Branch", y: 25 },
          { label: "Accra Branch", y: 30 },
          { label: "Sogakope Branch", y: 28 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Banner;
