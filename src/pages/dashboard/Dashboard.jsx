// import React from "react";
// import dashboardLens from "../../assets/dashboard-lens.png";
// import internalInsights from "../../assets/ic_baseline-insights2.png";
// import marketInsights from "../../assets/market-research2.png";
// import { FaPlus } from "react-icons/fa";
// import Navbar from "../../components/navbar/Navbar";

// const Dashboard = () => {
//   return (
//     <div className="bg-grey-bg h-full w-screen ">
//       <Navbar />
//       {/* <div className=" p-6 px-16 m-3  bg-white border border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300 "> */}
//       <div className="p-6 px-4 sm:px-8 md:px-16 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
//         <div className=" ">
//           <h1 className="text-3xl font-semibold ">Welcome To Urubytes</h1>
//           <div className=" px-2 py-2 my-6 border border-gray-200 rounded-lg shadow  bg-primary-blue dark:border-gray-300 dark:hover:bg-blue-500">
//             <div className="flex justify-between px-8">
//               <div className="my-8 leading-10 text-white">
//                 <h2 className="text-3xl font-semibold mb-4">
//                   Let's help you get properly set up for Urubytes
//                 </h2>
//                 <p className="leading-6">
//                   Start by connecting your data sources to <br />
//                   Urubytes or take the guided tour
//                 </p>
//                 <button className="bg-yellow-color hover:bg-yellow-600 text-white font-bold py-1 px-10 rounded mt-6">
//                   Take The Tour
//                 </button>
//               </div>
//               <div>
//                 <img src={dashboardLens} alt="dashboard-lens" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="flex justify-between py-2 my-6 gap-6 "> */}
//         <div className="flex flex-col sm:flex-row justify-between py-2 my-6 gap-6">
//           <div class="block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
//             <div className="flex items-center gap-2">
//               <img
//                 src={internalInsights}
//                 alt="internal insight"
//                 className="w-12 h-12"
//               />
//               <h5 class="mb-2 text-xl font-bold tracking-tight  dark:text-gray-700 flex mt-2">
//                 Internal Insights
//               </h5>
//             </div>
//             <p class="font-normal text-gray-900 dark:text-gray-700 mb-4">
//               Ask any question about your business and receive answers and
//               insights in seconds
//             </p>
//             <div className="flex justify-between">
//               <button className=" text-dark font-semi-bold py-1 px-4 rounded mt-6 border border-gray-600 flex items-center gap-2 ">
//                 <FaPlus />
//                 Add Data Source
//               </button>
//               <button className=" text-white font-semi-bold py-1 px-10 bg-grey-color rounded mt-6 border flex items-center gap-2 shadow">
//                 Explore
//               </button>
//             </div>
//           </div>

//           <div class="block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
//             <div class="flex items-center gap-2">
//               <img
//                 src={marketInsights}
//                 alt="internal insight"
//                 className="w-12 h-12"
//               />
//               <h5 class="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700  ">
//                 Internal Insights
//               </h5>
//             </div>
//             <p class="font-normal text-gray-900 dark:text-gray-700 mb-4 ">
//               Ask any question about your business and receive answers and
//               insights in seconds
//             </p>
//             <div class="flex justify-end">
//               <button class="text-white font-semi-bold py-1 px-10 bg-grey-color rounded mt-6 border flex items-center gap-2 shadow">
//                 Ask A Question
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import dashboardLens from "../../assets/dashboard-lens.png";
import internalInsights from "../../assets/ic_baseline-insights2.png";
import marketInsights from "../../assets/market-research2.png";
import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="bg-grey-bg h-full w-screen">
      <Navbar />
      <div className="p-6 sm:px-16 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
        <div className="">
          <h1 className="text-3xl font-semibold">Welcome To Urubytes</h1>
          <div className="px-2 py-2 my-6 border border-gray-200 rounded-lg shadow bg-primary-blue dark:border-gray-300 dark:hover:bg-blue-500">
            <div className="flex flex-col-reverse sm:flex-row justify-between px-8">
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
        <div className="flex flex-col sm:flex-row justify-between py-2 my-6 gap-6">
          <div className="block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
            <div className="flex items-center gap-2">
              <img
                src={internalInsights}
                alt="internal insight"
                className="w-12 h-12"
              />
              <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-gray-700 flex mt-2">
                Internal Insights
              </h5>
            </div>
            <p className="font-normal text-gray-900 dark:text-gray-700 mb-4">
              Ask any question about your business and receive answers and
              insights in seconds
            </p>
            <div className="flex justify-between">
              <button className="text-dark font-semi-bold py-2 px-4 rounded-xl mt-6 border border-gray-600 flex items-center gap-2">
                <FaPlus />
                Add Data Source
              </button>
              <button className="text-white font-semi-bold py-2 px-10 bg-grey-color rounded mt-6 border flex items-center gap-2 shadow">
                Explore
              </button>
            </div>
          </div>

          <div className="block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
            <div className="flex items-center gap-2">
              <img
                src={marketInsights}
                alt="internal insight"
                className="w-12 h-12"
              />
              <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700  ">
                Market Insights
              </h5>
            </div>
            <p className="font-normal text-gray-900 dark:text-gray-700 mb-4 ">
              Ask any question about any industry of choice in the African
              Landscape
            </p>
            <div className="flex justify-end">
              <button className="text-white font-semi-bold py-2 px-6 bg-grey-color rounded mt-6 border flex items-center gap-2 shadow">
                Ask A Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
