import React from "react";

const Formats = ({ selectedFormat, handleFormatClick }) => {
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
            <div className="mt-4 border-gray-500 border-2 border-dotted rounded-xl p-8 flex flex-col items-center m-auto w-3/4">
              <p>Click add drive from google drive</p>
            </div>
          )}
          {selectedFormat === "map" && (
            <div className="mt-4 items-start w-3/4">
              <h2 className="font font-medium text-xl">Add a link below</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Formats;
