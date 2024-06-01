import React, { useEffect, useState } from "react";
import internalInsights from "../../assets/ic_baseline-insights2.png";
import { FaPlus } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateTableData } from "../../reducer/action";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";

const DataSources = () => {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const orgId = useSelector((state) => state.login.orgID);
  const token = useSelector((state) => state.login.token);

  console.log("Org ID:", orgId);
  console.log("Token:", token);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://urubytes-origin.azurewebsites.net/datasources/static/?orgID=${orgId}`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setTableData(response.data);
        dispatch(updateTableData({ data: response.data, isLoading: false }));
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [orgId]);

  const handleDelete = async (sourceID) => {
    try {
      const response = await axios.delete(
        `https://urubytes-origin.azurewebsites.net/datasources/static/${sourceID}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (response.status === 204) {
        setTableData(tableData.filter((item) => item.id !== sourceID));
        toast.success("Data deleted successfully");
      } else {
        console.error("Failed to delete item:", response);
        toast.error("Failed to delete data");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const TABLE_HEAD = [
    "Type",
    "Title",
    "Status",
    "Date Added",
    "Last Updated",
    "Delete",
  ];

  return (
    <>
      <ToastContainer />
      <div className="bg-grey-bg h-screen w-screen overflow-y-auto">
        <Navbar />

        <div className=" p-8 px-12 m-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300 h-full overflow-auto">
          <div className=" ">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-semibold ">Data Sources</h1>
              <div className="flex justify-between gap-2">
                <Link
                  to="/internalInsight"
                  className="flex items-center border-gray-400"
                >
                  <button className=" text-dark font-semi-bold py-2 px-4 rounded-lg  border flex items-center gap-2 shadow">
                    <img
                      src={internalInsights}
                      alt="internal insight"
                      className="w-8 h-8"
                    />
                    Explore Insight
                  </button>
                </Link>

                <Link
                  to="/addSource"
                  className=" border border-gray-200 rounded-lg  flex items-center  bg-yellow-color hover:bg-yellow-600  "
                >
                  <button className=" text-white font-semi-bold py-2 px-8   flex items-center gap-2 ">
                    <FaPlus />
                    Add Source
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                {tableData.length === 0 ? (
                  <p className="py-4">No uploads yet</p>
                ) : (
                  <div className="overflow-hidden">
                    <p className="leading-6 pb-4 text-[18]">
                      Here are the files you have uploaded from your device
                    </p>
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
                          ({
                            id,
                            type,
                            name,
                            status,
                            created_at,
                            updated_at,
                          }) => (
                            <tr
                              key={id}
                              className="even:bg-gray-200 odd:bg-white p-4"
                            >
                              <td className="p-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal "
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
                              <td className="p-4 ">
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
                                  {new Date(created_at).toLocaleDateString()}
                                </Typography>
                              </td>
                              <td className="p-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {new Date(updated_at).toLocaleDateString()}
                                </Typography>
                              </td>
                              <td className="p-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="text-red-600 font-bold text-2xl py-2 cursor-pointer"
                                >
                                  <RiDeleteBin6Line
                                    onClick={() => handleDelete(id)}
                                  />
                                </Typography>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold my-2 mb-4">My Integrations</h1>

            <p>No Integrations yet</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSources;
