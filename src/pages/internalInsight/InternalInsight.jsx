import React from "react";
import Navbar from "../../components/navbar/Navbar";

const InternalInsight = () => {
  return (
    <div className="bg-gray-300 h-screen w-screen overflow-hidden ">
      <Navbar />
      <div className="grid grid-cols-4 p-2 my-6 gap-1 h-full overflow-hidden ">
        <div class=" block col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 ">
          <form class="max-w-md mx-auto">
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                class="block w-full p-4 ps-10 text-sm text-gray-100 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-100  dark:placeholder-gray-400 dark:text-white  "
                placeholder="New Search"
                required
              />
            </div>
          </form>
          <h1 className="mt-4 text-3xl font-bold ">Library</h1>
          <p className="mt-4 ml-6 font-thin text-gray-500 ">
            Nothing here yet...
          </p>
        </div>

        <div class="col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 ">
          <div class="flex items-center gap-2">
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
  );
};

export default InternalInsight;
