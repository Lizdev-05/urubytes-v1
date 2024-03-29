import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Formats from "./formats/Formats";
import BrightImg from "../../assets/bright.png";
import uLogo from "../../assets/u-logo.png";
import frame1 from "../../assets/marketInsight/frame1.png";
import frame2 from "../../assets/marketInsight/frame2.png";
import frame3 from "../../assets/marketInsight/frame3.png";
import frame4 from "../../assets/marketInsight/frame4.png";
import frame5 from "../../assets/marketInsight/frame5.png";
import Paginate from "../../components/Paginate";
import mapImage from "../../assets/marketInsight/map.png";
import textImage from "../../assets/marketInsight/text.png";
import chartImage from "../../assets/marketInsight/chart.png";

const MarketInsightResult = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [selectedFormat, setSelectedFormat] = useState("text");

  const handleFormatSelect = (format) => {
    setSelectedFormat(format);
    setDropdownOpen(false);
  };
  return (
    <div className="bg-grey-bg h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-4 p-2 my-1 gap-1 h-full overflow-hidden">
        <div className="block col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
          <form className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-gray-900"
                placeholder="New Search"
                required
              />
            </div>
          </form>
          <h1 className="mt-4 text-3xl font-bold">Library</h1>
          <p className="mt-4 ml-6 font-thin text-gray-500">
            Nothing here yet...
          </p>
        </div>
        <div className="col-span-3 py-4 px-12 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
          <div className="absolute bottom-2 w-[55%]">
            <div className="card py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300">
              <div className="flex items-center gap-2 my-2">
                <img src={BrightImg} alt={BrightImg} />
                <p className="mb-5 text-sm font-bold tracking-tight dark:text-gray-700 flex mt-2">
                  What is the market share of the major players in the fintech
                  space in Ghana?
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="mb-40">
                  <img src={uLogo} alt={uLogo} />
                </div>
                <div className="">
                  <Formats
                    selectedFormat={selectedFormat}
                    handleFormatClick={handleFormatSelect}
                  />
                </div>
              </div>
              <div>
                <ul className="flex justify-end gap-2">
                  <li>
                    {" "}
                    <img src={frame1} alt={frame1} />{" "}
                  </li>
                  <li>
                    {" "}
                    <img src={frame2} alt={frame2} />{" "}
                  </li>
                  <li>
                    {" "}
                    <img src={frame3} alt={frame3} />{" "}
                  </li>
                  <li>
                    {" "}
                    <img src={frame4} alt={frame4} />{" "}
                  </li>
                  <li>
                    {" "}
                    <img src={frame5} alt={frame5} />{" "}
                  </li>
                </ul>
              </div>
              <div className="my-4">
                <hr className="border-t border-grey-bg w-full" />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[14px]">Reference:</p>
                  <Paginate />
                </div>
                {/* <div className="flex items-center gap-1 ">
                  <p className="text-[14px]">View as</p>
                  <button
                    className="text-yellow-color underline text-[14px] cursor-pointer"
                    onClick={handleFormatClick}
                  >
                    {selectedFormat}
                  </button>
                </div> */}

                <div className="flex items-center gap-1 ">
                  <p className="text-[14px]">View as</p>
                  <span
                    className="text-yellow-color underline text-[14px] cursor-pointer"
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    onClick={toggleDropdown}
                  >
                    Text
                  </span>
                </div>
              </div>
              <div
                id="dropdown"
                className={`${
                  dropdownOpen ? "block" : "hidden"
                } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-white flex flex-col absolute -bottom-4 -end-8`}
              >
                <ul
                  className="p-2 ml-4  text-sm text-gray-700 dark:text-gray-500"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li
                    className="flex justify-start items-center"
                    onClick={() => handleFormatSelect("line-chart")}
                  >
                    <img src={mapImage} alt={mapImage} />
                    <a href="#" className="block px-4 py-2 ">
                      Line Chart
                    </a>
                  </li>
                  <li
                    className="flex justify-start items-center"
                    onClick={() => handleFormatSelect("text")}
                  >
                    <img src={textImage} alt={textImage} />
                    <a href="#" className="block px-4 py-2 ">
                      Text
                    </a>
                  </li>
                  <li
                    className="flex justify-start items-center"
                    onClick={() => handleFormatSelect("chart")}
                  >
                    <img src={chartImage} alt={chartImage} />
                    <a href="#" className="block px-4 py-2 ">
                      Chart
                    </a>
                  </li>
                  <li
                    className="flex justify-start items-center"
                    onClick={() => handleFormatSelect("stack-chart")}
                  >
                    <img src={chartImage} alt={chartImage} />
                    <a href="#" className="block px-4 py-2 ">
                      Stack Chart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsightResult;
