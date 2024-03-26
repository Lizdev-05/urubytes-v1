import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaArrowUpLong } from "react-icons/fa6";

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
          <div className="flex justify-end">
            <button className="bg-yellow-color hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded mt-6">
              View Data Source
            </button>
          </div>
          <div className="flex flex-col items-center text-center p-8">
            <h1 className="m-4 text-3xl font-bold">Ask Urubytes A Question</h1>
            <p className="px-32 text-gray-600">
              Get started extracting bytes-sized nsights from your business
              data. Just tell us where to look first and you can ask any
              question about your business.
            </p>
          </div>

          <form class="p-2  mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
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
                class="block w-full p-4 ps-10 text-sm text-gray-900 border  rounded-lg   dark:placeholder-gray-400 dark:text-white  "
                placeholder="Type Here..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-grey-color hover:bg-gray-500  font-medium rounded-lg text-sm px-2 py-2  "
              >
                <FaArrowUpLong size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InternalInsight;
