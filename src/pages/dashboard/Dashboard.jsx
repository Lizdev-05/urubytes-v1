import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-300 h-screen w-screen ">
      <form className="bg-white">
        <div className="relative p-4 flex  ">
          <div className="absolute inset-y-0 start-20 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block ms-12 ps-24 text-sm text-gray-200 border border-gray-300 rounded-full bg-gray-50 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white-500 w-4/5 focus:ring-2 focus:outline-none focus:ring-blue-200"
            placeholder="Search"
            required
          />

          <button
            type="button"
            class="relative inline-flex items-center ml-10 p-3 text-sm font-medium text-center text-white"
          >
            <svg
              class="w-8 h-8 text-blue-600 animate-wiggle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
              />
            </svg>
            <div class=" bg-red-500 px-1.5 rounded-full text-center text-white text-sm absolute -top-1 end-1">
              6
              <div class="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-red-200 w-full h-full"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
