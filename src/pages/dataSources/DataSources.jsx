import React, { useEffect, useState } from "react";
import internalInsights from "../../assets/ic_baseline-insights.png";
import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import { Typography } from "@material-tailwind/react";
import DefaultPagination from "./Pagination";
import IntegrationCards from "../../components/integrationCards/IntegrationCards";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const DataSources = () => {
  // const [tableData, setTableData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/datasources/static/?orgID=UBOCASY436"
  //       );
  //       setTableData(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  const [tableData, setTableData] = useState([]);

  const orgId = useSelector((state) => state.login.orgID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://urubytes-backend-v2-r6wnv.ondigitalocean.app/datasources/static/?orgID=${orgId}`
        );
        setTableData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [orgId]);

  const TABLE_HEAD = ["Type", "Title", "Status", "Date Added", "Last Updated"];

  return (
    // <div className="bg-grey-bg h-[982px] w-screen  ">
    <div className="bg-grey-bg h-screen w-screen overflow-hidden">
      <Navbar />
      {/* <div className=" p-6 px-12 m-4 h-[833px] bg-white border border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300"> */}
      <div className=" p-8 px-12 m-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300 h-full">
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

              <Link to="/internalInsight" className="flex items-center ">
                <button className=" text-white font-semi-bold py-2 px-4 bg-yellow-color hover:bg-yellow-600 rounded-lg  border flex items-center gap-2 shadow">
                  <img
                    src={internalInsights}
                    alt="internal insight"
                    className="w-8 h-8"
                  />
                  Explore Insight
                </button>
              </Link>
            </div>
          </div>

          <p className="leading-6 pb-4 text-[18]">
            {/* Get started extracting byte-sized insights from your business data.
            Just tell us where to look first and you can ask any question about
            your business. */}
            Here are the files you have uploaded from your device
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
                    {tableData.map(
                      ({ type, name, status, created_at, updated_at }) => (
                        <tr
                          key={name}
                          className="even:bg-gray-200 odd:bg-white p-4"
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
                              {name}
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
                              {created_at}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {updated_at}
                            </Typography>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
                <p className="py-4">No upload yet</p>
                {/* <div className="flex justify-end mt-2">
                  <DefaultPagination />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">My Integrations</h1>
          {/* <p className="text-xl font-medium leading-10 ">
            Do you currently use these apps? Integrate now to get a unified view
            of your data
          </p> */}
          {/* <IntegrationCards /> */}
          <p>There is nothing here</p>
        </div>
      </div>
    </div>
  );
};

export default DataSources;
