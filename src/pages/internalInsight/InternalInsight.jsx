import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./InternalInsight.css";
import { useSelector } from "react-redux";

const InternalInsight = () => {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("internal");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [previousQueries, setPreviousQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const token = useSelector((state) => state.login.token);
  const orgId = useSelector((state) => state.login.orgID);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const url =
      mode === "internal"
        ? "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/insights/internal/"
        : "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/insights/market/";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ query, orgId }),
      });

      if (response.ok) {
        const data = await response.json();
        setPreviousQueries([{ query, feedback: data }, ...previousQueries]);
        setFeedback(data);
        console.log("Received feedback:", data);
        setLoading(false);
        setQuery("");
      } else {
        console.error("Failed to receive feedback:", response);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setLoading(false);
    }
  };

  const handleQueryClick = (item) => {
    setFeedback(item.feedback);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleToggle = () => {
    setMode(mode === "internal" ? "external" : "internal");
  };

  return (
    <div className="bg-grey-bg h-screen w-screen overflow-hidden internal">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 my-1 gap-1 h-full overflow-hidden">
        <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
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
                className="block w-full p-4 ps-10 text-sm text-gray-100 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-100 dark:placeholder-gray-400 dark:text-white"
                placeholder="New Search"
                required
              />
            </div>
          </form>
          <h1 className="mt-4 text-3xl font-bold">Library</h1>

          {previousQueries.map((item, index) => (
            <div key={index} onClick={() => handleQueryClick(item)}>
              <p className="text-xs leading mb-2">{item.query}</p>
            </div>
          ))}
        </div>

        <div className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <button
                onClick={() => handleToggle()}
                className={`px-4 py-2 text-sm rounded-md ${
                  mode === "internal" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                Internal Insight
              </button>
              <button
                onClick={() => handleToggle()}
                className={`px-4 py-2 text-sm rounded-md ${
                  mode === "external" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                External Insight
              </button>
            </div>
            <Link
              to="/addSource"
              className="border border-transparent rounded-lg flex items-center bg-yellow-color hover:bg-yellow-600"
            >
              <button className="text-white font-semi-bold py-2 px-8 flex items-center gap-2">
                <FaPlus />
                Add Source
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center text-center p-8 internalText">
            <h1 className="m-4 text-3xl font-bold">Ask Urubytes A Question</h1>
            <p className="px-32 text-gray-600">
              Get started extracting bytes-sized insights from your business
              data. Just tell us where to look first and you can ask any
              question about your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-2 mx-auto">
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
                className="block w-full p-4 ps-10 text-sm text-blue-500 border rounded-lg dark:placeholder-gray-400 dark:text-gray-500"
                placeholder="Type Here..."
                required
                value={query}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-grey-color hover:bg-gray-500 font-medium rounded-lg text-sm px-2 py-2"
              >
                <FaArrowUpLong size={20} />
              </button>
            </div>
          </form>
          {loading && (
            <div className="p-4 my-4 bg-gray-100 rounded-lg shadow-md">
              <div className="loadingSpinner"></div>
            </div>
          )}
          {/* {feedback && (
            <div className="p-4 my-4 bg-gray-100 rounded-lg shadow-md ">
              <p className="text-gray-600 mb-4 text-[1rem] ">
                {feedback.insights}
              </p>

              <p>
                {Object.entries(feedback.metadata).map(([key, value]) => (
                  <div key={key}>
                    Source:
                    <span className="text-primary-blue">
                      {" "}
                      {value.file_name}
                    </span>
                  </div>
                ))}
              </p>
            </div>
          )} */}

          {feedback && (
            <div className="p-4 my-4 bg-gray-100 rounded-lg shadow-md ">
              <p className="text-gray-600 mb-4 text-[1rem] ">
                {feedback.insights}
              </p>

              <p>
                {Object.entries(feedback.metadata).map(([key, value]) => (
                  <div key={key}>
                    Source:
                    <span className="text-primary-blue">
                      {" "}
                      {value.file_name}
                    </span>
                  </div>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternalInsight;
