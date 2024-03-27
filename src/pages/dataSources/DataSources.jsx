import React, { useState } from "react";
import internalInsights from "../../assets/ic_baseline-insights.png";
import marketInsights from "../../assets/market-research2.png";
import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import { Typography } from "@material-tailwind/react";
import DefaultPagination from "./Pagination";

const DataSources = () => {
  const TABLE_HEAD = [
    // "",
    "Type",
    "Title",
    "Status",
    "Date Added",
    "Last Updated",
  ];

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
    <div className="bg-gray-300 h-set-height w-screen  ">
      <Navbar />
      <div className=" p-6 px-12 m-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300">
        <div className=" ">
          <div className="flex justify-between ">
            <h1 className="text-3xl font-semibold ">Data Sources</h1>
            <div className="flex justify-between gap-2">
              <button className=" text-dark font-semi-bold py-2 px-8 rounded-lg  border border-gray-600 flex items-center gap-2 ">
                <FaPlus />
                Add Source
              </button>
              <button className=" text-white font-semi-bold py-2 px-4 bg-yellow-color hover:bg-yellow-600 rounded-lg  border flex items-center gap-2 shadow">
                <img
                  src={internalInsights}
                  alt="internal insight"
                  className="w-8 h-8"
                />
                Explore Insight
              </button>
            </div>
          </div>
          <p className="leading-6 py-4 text-xl">
            Get started extracting byte-sized insights from your business data.
            Just tell us where to look first and you can ask any question about
            your business.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="w-full min-w-max table-auto text-left">
                  <thead className="bg-black-color text-light-white">
                    <tr>
                      <th className="border-b border-blue-gray-100  p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          <input type="checkbox" />
                        </Typography>
                      </th>

                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100  p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none "
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map(
                      (
                        { type, title, dateAdded, status, dateUpdated },
                        index
                      ) => (
                        <tr
                          key={type}
                          className=" even:bg-gray-200 even:text-black-color  odd:bg-white odd:text-black-color  p-4"
                        >
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              <input type="checkbox" />
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {type}
                            </Typography>
                          </td>
                          <td className="p-4 flex items-center">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {title}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {status}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {dateAdded}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {dateUpdated}
                            </Typography>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
                <div className="flex justify-end mt-4">
                  <DefaultPagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSources;
