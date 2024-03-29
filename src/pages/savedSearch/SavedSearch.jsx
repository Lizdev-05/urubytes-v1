import React from "react";
import internalInsights from "../../assets/ic_baseline-insights.png";
import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import { Typography } from "@material-tailwind/react";
import IntegrationCards from "../../components/integrationCards/IntegrationCards";
import { Link } from "react-router-dom";
import DefaultPagination from "../dataSources/Pagination";

const SavedSearch = () => {
  const TABLE_HEAD = [
    // "",
    "QUESTION",
    "ANSWER",
    "DATE",
  ];

  const TABLE_ROWS = [
    {
      question: "Give me some insight about the orders from Company XYZ",
      answer:
        "The orders from Company XYZ has increased by 150% in the last 2 weeks. However, generally...",
      date: "05/03/2024",
    },

    {
      question: "Give me some insight about the orders from Company XYZ",
      answer:
        "The orders from Company XYZ has increased by 150% in the last 2 weeks. However, generally...",
      date: "05/03/2024",
    },
  ];

  return (
    // <div className="bg-grey-bg h-[982px] w-screen  ">

    <div className="bg-grey-bg h-screen w-screen overflow-hidden ">
      <Navbar />
      {/* <div className=" p-6 px-12 m-4 h-[833px] bg-white border border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300"> */}
      <div className=" p-4 px-12 m-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300">
        <div className=" ">
          <div className="flex justify-between ">
            <h1 className="text-3xl font-semibold ">Data Sources</h1>
            <div className="flex justify-between gap-2">
              <Link
                to="/addSource"
                className=" border border-gray-600 rounded-lg  flex items-center "
              >
                <button className=" text-dark font-semi-bold py-2 px-8   flex items-center gap-2 ">
                  <FaPlus />
                  Add Source
                </button>
              </Link>
              <button className=" text-white font-semi-bold py-2 px-4 bg-yellow-color hover:bg-yellow-600 rounded-lg  border flex items-center gap-2 shadow">
                <img
                  src={internalInsights}
                  alt="internal insight"
                  className="w-8 h-8"
                />
                Saved Search
              </button>
            </div>
          </div>
          <p className="leading-6 py-4 text-[18]">
            Here are some of the questions you have saved from previous sessions
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
                    {TABLE_ROWS.map(({ question, answer, date, index }) => (
                      <tr
                        key={index}
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
                            {question}
                          </Typography>
                        </td>
                        <td className="p-4 flex items-center max-w-[500px] ">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {answer}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end mt-2">
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

export default SavedSearch;
