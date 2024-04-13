import React from "react";
import Navbar from "../../components/navbar/Navbar";

import IntegrationCards from "../../components/integrationCards/IntegrationCards";

import UploadForm from "./upload/UploadForm";

const AddSources = () => {
  const TABLE_HEAD = ["Type", "Title", "Status", "Date Added", "Last Updated"];

  const TABLE_ROWS = [
    {
      type: "PDF",
      title: "January 2024 Sales",
      status: "Complete",
      dateAdded: "23/04/18",
      dateUpdated: "23/04/18",
    },
    {
      type: "Docx",
      title: "FebruaryMarketing Report,",
      status: "Complete",
      dateAdded: "23/04/18",
      dateUpdated: "23/04/18",
    },
    {
      type: "PPT",
      title: "January 2024 Sales",
      status: "Deleted",
      dateAdded: "05/03/2024",
      dateUpdated: "05/03/2024",
    },
  ];

  return (
    <div className="bg-grey-bg h-screen w-screen overflow-hidden ">
      <Navbar />
      <div className=" p-6 px-12 m-4 h-full bg-white border border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300">
        <div className=" ">
          <h1 className="text-3xl font-semibold">Internal Insight</h1>
          <p className="text-sm font-semi-bold my-4 ">
            Get started extracting byte-sized insights from your business data.
            Just tell us where to look <br /> first and you can ask any question
            about your business.
          </p>
          <div className="cursor-pointer">
            <UploadForm />
          </div>
          <div className="text-center cursor-pointer ">
            <p className="p-2 font-semi-bold text-2xl">OR</p>
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <IntegrationCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSources;

// import React, { useState, useEffect } from "react";
// import Navbar from "../../components/navbar/Navbar";
// import IntegrationCards from "../../components/integrationCards/IntegrationCards";
// import UploadForm from "./upload/UploadForm";
// import axios from "axios";

// const AddSources = () => {
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/?orgID=UBOBHVU917"
//         );
//         setTableData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const TABLE_HEAD = ["Type", "Title", "Status", "Date Added", "Last Updated"];

//   return (
//     <div className="bg-grey-bg h-screen w-screen">
//       <Navbar />
//       <div className="p-6 px-12 m-4 h-[658px] bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
//         <div>
//           <h1 className="text-3xl font-semibold">Internal Insight</h1>
//           <p className="text-sm font-semi-bold my-4">
//             Get started extracting byte-sized insights from your business data.
//             Just tell us where to look <br /> first and you can ask any question
//             about your business.
//           </p>
//           <div className="cursor-pointer">
//             <UploadForm />
//           </div>
//           <div className="text-center cursor-pointer">
//             <p className="p-2 font-semi-bold text-2xl">OR</p>
//           </div>
//           <div className="flex justify-center items-center cursor-pointer">
//             <IntegrationCards />
//           </div>
//         </div>
//       </div>
//       <div className="p-6 px-12 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
//         <h2 className="text-2xl font-semibold mb-4">Document List</h2>
//         <table className="table-auto w-full">
//           <thead>
//             <tr>
//               {TABLE_HEAD.map((header, index) => (
//                 <th key={index} className="px-4 py-2">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((row, index) => (
//               <tr key={index}>
//                 <td className="border px-4 py-2">{row.type}</td>
//                 <td className="border px-4 py-2">{row.title}</td>
//                 <td className="border px-4 py-2">{row.status}</td>
//                 <td className="border px-4 py-2">{row.dateAdded}</td>
//                 <td className="border px-4 py-2">{row.dateUpdated}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddSources;
