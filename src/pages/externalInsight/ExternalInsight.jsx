// import React from "react";
// import Navbar from "../../components/navbar/Navbar";
// import { FaArrowUpLong } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const ExternalInsight = () => {
//   return (
//     <div className="bg-grey-bg h-screen w-screen overflow-hidden ">
//       <Navbar />
//       <div className="grid grid-cols-4 p-2 my-1 gap-1 h-full overflow-hidden ">
//         <div class=" block col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-100 ">
//           <form class="max-w-md mx-auto">
//             <div class="relative">
//               <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg
//                   class="w-4 h-4 text-gray-500 dark:text-gray-400"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 id="default-search"
//                 class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300  dark:bg-gray-100  dark:placeholder-gray-400 dark:text-gray-900  "
//                 placeholder="New Search"
//                 required
//               />
//             </div>
//           </form>
//           <h1 className="mt-4 text-3xl font-bold ">Library</h1>
//           <p className="mt-4 ml-6 font-thin text-gray-500 ">
//             Nothing here yet...
//           </p>
//         </div>

//         <div class="col-span-3 block py-4 px-12 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-100 ">
//           <div className="flex flex-col items-center text-center p-8">
//             <p className=" text-3xl  px-12 text-gray-700 font-bold">
//               Ask about anything, either in your Source Documents or about any
//               industry
//             </p>
//           </div>

//           <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-16 ">
//             <div class="block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300 ">
//               <div className="flex items-center gap-2">
//                 <h5 class="mb-8 text-xl font-bold tracking-tight  dark:text-gray-700 flex mt-2">
//                   Ask about market sizes
//                 </h5>
//               </div>
//               <p class="  text-gray-900 font-normal dark:text-gray-700 mb-4">
//                 What is the market share of the major players in the fintech
//                 space in Ghana?
//               </p>
//             </div>
//             <div class="block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300 ">
//               <div className="flex items-center gap-2">
//                 <h5 class="mb-2 text-xl font-bold tracking-tight  dark:text-gray-700 flex mt-2">
//                   Ask about products
//                 </h5>
//               </div>
//               <p class="font-normal text-gray-900 dark:text-gray-700 mb-4">
//                 What features does Flutterwave have?
//               </p>
//             </div>
//             <div class="block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300 ">
//               <div className="flex items-center gap-2">
//                 <h5 class="mb-2 text-xl font-bold tracking-tight  dark:text-gray-700 flex mt-2">
//                   Ask about security
//                 </h5>
//               </div>
//               <p class="font-normal text-gray-900 dark:text-gray-700 mb-4">
//                 Is it safe to start a fintech in Nigeria?
//               </p>
//             </div>

//             <div class="block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300 ">
//               <div class="flex items-center gap-2">
//                 <h5 class="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700  ">
//                   Ask about regulations
//                 </h5>
//               </div>
//               <p class="font-normal text-gray-900 dark:text-gray-700 mb-4 ">
//                 What are crypto regulations in Nigeria?
//               </p>
//             </div>
//           </div>
//           <form class="p-2  mx-auto">
//             <label
//               for="default-search"
//               class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//             >
//               Search
//             </label>
//             <div class="relative">
//               <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg
//                   class="w-4 h-4 text-gray-500 dark:text-gray-400"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 id="default-search"
//                 class="block w-full p-4 ps-10 text-sm text-gray-900 border  rounded-lg   dark:placeholder-gray-400 dark:text-white  "
//                 placeholder="Type Here..."
//                 required
//               />
//               <Link to="/marketInsightResult">
//                 <button
//                   type="submit"
//                   class="text-white absolute end-2.5 bottom-2.5 bg-grey-color hover:bg-gray-500  font-medium rounded-lg text-sm px-2 py-2  "
//                 >
//                   <FaArrowUpLong size={20} />
//                 </button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExternalInsight;

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./ExternalInsight.css";

const ExternalInsight = () => {
  return (
    <div className="bg-grey-bg min-h-screen w-screen overflow-hidden main">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 my-1 gap-1 h-full">
        <div className="sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
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

        <div className="sm:col-span-3 py-4 px-4 sm:px-12 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 marketInsight">
          <div className="flex flex-col items-center text-center p-8">
            <p className="text-3xl px-4 sm:px-12 text-gray-700 font-bold">
              Ask about anything, either in your Source Documents or about any
              industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 ">
            <div className="py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300">
              <div className="flex items-center">
                <h5 className="mb-8 text-xl font-bold tracking-tight dark:text-gray-700 mt-2">
                  Ask about market sizes
                </h5>
              </div>
              <p className="text-gray-900 font-normal dark:text-gray-700 mb-4">
                What is the market share of the major players in the fintech
                space in Ghana?
              </p>
            </div>
            <div className="py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300">
              <div className="flex items-center">
                <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-gray-700 mt-2">
                  Ask about products
                </h5>
              </div>
              <p className="font-normal text-gray-900 dark:text-gray-700 mb-4">
                What features does Flutterwave have?
              </p>
            </div>
            <div className="py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300">
              <div className="flex items-center">
                <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-gray-700 mt-2">
                  Ask about security
                </h5>
              </div>
              <p className="font-normal text-gray-900 dark:text-gray-700 mb-4">
                Is it safe to start a fintech in Nigeria?
              </p>
            </div>
            <div className="py-4 px-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300">
              <div className="flex items-center">
                <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                  Ask about regulations
                </h5>
              </div>
              <p className="font-normal text-gray-900 dark:text-gray-700 mb-4">
                What are crypto regulations in Nigeria?
              </p>
            </div>
          </div>
          <form className="p-2 mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
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
                className="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg dark:placeholder-gray-400 dark:text-white markInput"
                placeholder="Type Here..."
                required
              />
              <Link to="/marketInsightResult">
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-grey-color hover:bg-gray-500 font-medium rounded-lg text-sm px-2 py-2"
                >
                  <FaArrowUpLong size={20} />
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExternalInsight;