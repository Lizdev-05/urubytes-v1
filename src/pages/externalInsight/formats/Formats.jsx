import React from "react";
import Charts from "./Charts";
import StackChart from "./StackChart";

const Formats = ({ selectedFormat, handleFormatClick }) => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <div className="card py-4 px-8">
      {selectedFormat && (
        <div>
          {selectedFormat === "text" && (
            <div className="">
              <p>
                The market share of the major players in the fintech space in
                Ghana are:
              </p>
              <ul className="m-4 list-decimal">
                <li> MTN Mobile Money (40%)</li>
                <li> Vodafone Cash (30%)</li>
                <li> AirtelTigo Money (15%)</li>
                <li> Ecobank Mobile App (10%)</li>
                <li> Zeepay (3%)</li>
                <li> Slydepay(2%)</li>
              </ul>
            </div>
          )}
          {selectedFormat === "chart" && (
            <div className="">
              <p>
                The market share of the major players in the fintech space in
                Ghana are:
              </p>

              <Charts
                options={options}
                series={series}
                type="bar"
                width="500"
              />
            </div>
          )}
          {selectedFormat === "line-chart" && (
            <div className="">
              <p>
                The market share of the major players in the fintech space in
                Ghana are:
              </p>

              <Charts
                options={options}
                series={series}
                type="line"
                width="500"
              />
            </div>
          )}

          {selectedFormat === "stack-chart" && (
            <div className="">
              <p>
                The market share of the major players in the fintech space in
                Ghana are:
              </p>

              <StackChart />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Formats;
