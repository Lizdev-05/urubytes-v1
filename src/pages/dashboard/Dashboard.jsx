import React, { useState } from "react";
import dashboardLens from "../../assets/dashboard-lens.png";
import internalInsights from "../../assets/ic_baseline-insights2.png";
import marketInsights from "../../assets/market-research2.png";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-gray-300 h-full w-screen ">
      <form className="bg-white">
        <div className="relative py-8 px-10 flex justify-between">
          <div className="absolute inset-y-0 start-16 flex items-center ps-3 pointer-events-none">
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
            className="block ps-20 text-sm text-gray-200 border border-gray-300 rounded-full bg-gray-50 dark:bg-gray-150 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white-500 w-11/12 focus:ring-2 focus:outline-none focus:ring-blue-200"
            placeholder="Search"
            required
          />

          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            type="button"
            className="relative inline-flex items-center ml-16 p-3 text-sm font-medium text-center text-white"
            onClick={toggleDropdown}
          >
            <svg
              className="w-8 h-8 text-blue-600 animate-wiggle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
              />
            </svg>
            <div className="bg-red-500 px-1.5 rounded-full text-center text-white text-sm absolute -top-1 end-1">
              6
              <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-red-200 w-full h-full"></div>
            </div>
          </button>
        </div>
        <div
          id="dropdown"
          className={`${
            dropdownOpen ? "block" : "hidden"
          } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-white flex flex-col absolute top-16 end-8`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-500"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </form>
      <div className=" p-6 px-16 m-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white dark:border-gray-300 dark:hover:bg-gray-200">
        <div className=" ">
          <h1 className="text-3xl font-semibold ">Welcome To Urubytes</h1>
          <div className=" px-2 py-2 my-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 bg-primary-blue dark:border-gray-300 dark:hover:bg-blue-500">
            <div className="flex justify-between px-8">
              <div className="my-8 leading-10 text-white">
                <h2 className="text-3xl font-semibold mb-4">
                  Let's help you get properly set up for Urubytes
                </h2>
                <p className="leading-6">
                  Start by connecting your data sources to <br />
                  Urubytes or take the guided tour
                </p>
                <button className="bg-yellow-color hover:bg-yellow-600 text-white font-bold py-1 px-10 rounded mt-6">
                  Take The Tour
                </button>
              </div>
              <div>
                <img src={dashboardLens} alt="dashboard-lens" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-2 my-6 gap-6 ">
          <div>
            <a
              href="#"
              class="block  py-4 px-8 bg-white border border-gray-200 rounded-lg shadow  "
            >
              <div className="flex items-center gap-2">
                <img
                  src={internalInsights}
                  alt="internal insight"
                  className="w-12 h-12"
                />
                <h5 class="mb-2 text-xl font-bold tracking-tight  dark:text-gray-700 flex mt-2">
                  Internal Insights
                </h5>
              </div>
              <p class="font-normal text-gray-900 dark:text-gray-700 mb-4">
                Ask any question about your business and receive answers and
                insights in seconds
              </p>
              <div className="flex justify-between">
                <button className=" text-dark font-semi-bold py-1 px-4 rounded mt-6 border border-gray-600 flex items-center gap-2 ">
                  <FaPlus />
                  Add Data Source
                </button>
                <button className=" text-white font-semi-bold py-1 px-10 bg-grey-color rounded mt-6 border flex items-center gap-2 shadow">
                  Explore
                </button>
              </div>
            </a>
          </div>
          <div>
            <div class="block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100">
              <div class="flex items-center gap-2">
                <img
                  src={marketInsights}
                  alt="internal insight"
                  className="w-12 h-12"
                />
                <h5 class="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700  ">
                  Internal Insights
                </h5>
              </div>
              <p class="font-normal text-gray-900 dark:text-gray-700 mb-4 ">
                Ask any question about your business and receive answers and
                insights in seconds
              </p>
              <div class="flex justify-end">
                <button class="text-white font-semi-bold py-1 px-10 bg-grey-color rounded mt-6 border flex items-center gap-2 shadow">
                  Ask A Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
