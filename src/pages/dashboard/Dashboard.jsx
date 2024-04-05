import React from "react";
import dashboardLens from "../../assets/dashboard-lens.png";
import internalInsights from "../../assets/ic_baseline-insights2.png";
import marketInsights from "../../assets/market-research2.png";
import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import ReactPlayer from "react-player";

const Dashboard = () => {
  return (
    <div className="bg-grey-bg h-screen w-screen  overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 my-2 overflow-hidden">
        <div className="sm:col-span-3 py-6 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
          <div className="mt-6 ">
            <h1 className="text-3xl font-semibold">Welcome To Urubytes</h1>
            <div className="px-2 py-2 my-6 border border-gray-200 rounded-lg shadow bg-primary-blue dark:border-gray-300 dark:hover:bg-blue-500">
              <div className="flex flex-col-reverse sm:flex-row justify-between px-8">
                <div className="my-8 leading-10 text-white">
                  <h2 className="text-3xl font-semibold mb-4">
                    Unlock the Power of your Data!
                  </h2>
                  <p className="leading-6">
                    Know what your business is doing and what you can do better
                    by asking the right questions
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
          <div className="flex flex-col sm:flex-row justify-between py-2 my-8 gap-2">
            <div className="block py-4 px-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
              <div className="flex items-center gap-2">
                <img
                  src={internalInsights}
                  alt="internal insight"
                  className="w-12 h-12"
                />
                <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-gray-700 flex mt-2">
                  Get Started{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-900 dark:text-gray-700 mb-4">
                Start by pointing us to a data source.
              </p>
              <div className="flex justify-between">
                <button className="text-dark font-semi-bold py-2 px-4 rounded-xl mt-6 border border-gray-600 flex items-center gap-2">
                  <FaPlus />
                  Add Data Source
                </button>
              </div>
            </div>
            <div className="block py-4 px-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=mUMi9VJmMSg&t=73s"
                height="300"
                width="300"
                controls
                playing
                title="Urubytes"
                className="h-full"
              />
            </div>
          </div>
        </div>
        <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
          <div>
            <h2 className=" text-xl font-semibold">Recent Activity</h2>
            <div className="py-4 px-4 bg-white border border-gray-200 shadow dark:border-gray-10">
              <h2 className="text-sm font-bold">Total Question Asked</h2>
            </div>
            <div className="py-6 px-10 bg-white border border-gray-200 shadow dark:border-gray-10 flex justify-center items-center">
              <span className="font-bold text-2xl">0</span>
            </div>
          </div>
          <div className="my-6">
            <div className="py-4 px-4 bg-white border border-gray-200 shadow dark:border-gray-10">
              <h2 className="text-sm font-bold">Total Sources Connected</h2>
            </div>
            <div className="py-6 px-10 bg-white border border-gray-200 shadow dark:border-gray-10 flex justify-center items-center">
              <span className="font-bold text-2xl">0</span>
            </div>
          </div>

          <h1 className="mt-4 text-[16px] font-bold">Recent Search</h1>
          <p className="mt-4 ml-6 font-thin text-gray-500">
            Nothing here yet...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
