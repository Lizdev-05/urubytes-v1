import React from "react";
import dashboardLens from "../../assets/dashboard-lens.png";
import internalInsights from "../../assets/ic_baseline-insights2.png";
import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-grey-bg h-screen w-screen  overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 my-2 overflow-hidden">
        <div className="sm:col-span-3 py-6 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
          <div className="mt-6 ">
            <h1 className="text-3xl font-semibold">Welcome To Urubytes</h1>
            <div className="px-2 py-8 my-10 border border-gray-200 rounded-lg shadow bg-primary-blue dark:border-gray-300 dark:hover:bg-blue-500">
              <div className="flex flex-col-reverse sm:flex-row justify-between px-8">
                <div className="my-8 leading-10 text-white">
                  <h2 className="text-3xl font-semibold mb-4">
                    Unlock the Power of your Data!
                  </h2>
                  <p className="leading-6">
                    Know what your business is doing and what you can do better
                    by asking the right questions
                  </p>
                </div>
                <div>
                  <img src={dashboardLens} alt="dashboard-lens" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between py-2 my-8 gap-2">
            <div className="flex flex-grow flex-col items-start justify-start py-4 pl-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
              <div className="flex items-center gap-2">
                <img
                  src={internalInsights}
                  alt="internal insight"
                  className="w-12 h-12"
                />
                <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-gray-700 flex mt-2">
                  Get Insight{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-900 dark:text-gray-700 mb-4">
                Start by pointing us to a data source.
              </p>

              <div className="flex  justify-between">
                <Link to="/addSource" className="">
                  <button className="text-dark font-semi-bold py-2 px-6 rounded-xl mt-6 border border-gray-600 flex items-center gap-2">
                    <FaPlus />
                    Add Source
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-grow flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
              <div class="border-b-2 border-neutral-500 px-8 py-3 dark:border-black/10 ">
                <h2 className="font-semibold"> Total Question Asked</h2>
              </div>
              <div class="p-6 flex items-center m-auto ">
                <span className="font-bold text-2xl text-center">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:col-span-1 py-4  px-2 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
          <div className="block w-[280px] h-[200px] overflow-hidden bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-100 transition-transform transform hover:scale-105">
            <iframe
              src="https://www.youtube.com/embed/mUMi9VJmMSg"
              width="100%"
              height="100%"
              loading="lazy"
              title="Custom title"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
          <div className="my-6 border border-gradient rounded-xl ">
            <div className="py-4 pb-8 px-4  border  border-gradient ">
              <h2 className="text-sm font-bold">Sources Connected</h2>
              <p className="mt-4 ml-6 font-thin text-gray-600">
                Nothing here yet...
              </p>
            </div>
          </div>

          <h1 className="mt-4 text-[16px] font-bold">Recent Search</h1>
          <p className="mt-4 ml-6 font-thin text-gray-600">
            Nothing here yet...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
