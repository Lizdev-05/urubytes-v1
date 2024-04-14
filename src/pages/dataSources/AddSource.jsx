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
          <h1 className="text-3xl font-semibold">Connect a Data Source</h1>
          <p className="text-sm font-semi-bold my-2 ">
            Want to get insights from your business data? Start by pointing us
            to where the data is.
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
