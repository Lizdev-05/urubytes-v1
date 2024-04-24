import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./InternalInsight.css";
import { useSelector } from "react-redux";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocation } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const InternalInsight = () => {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("internal");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [libraryItems, setLibraryItems] = useState([]);
  const location = useLocation();
  const selectedQuery = location.state?.selectedQuery;
  const [isLibraryLoading, setIsLibraryLoading] = useState(false);

  const token = useSelector((state) => state.login.token);
  const orgId = useSelector((state) => state.login.orgID);
  const [forceUpdate, setForceUpdate] = useState(false);

  // useEffect(() => {
  //   async function fetchLibraryItems() {
  //     try {
  //       const response = await fetch(
  //         "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/insights/library/",
  //         {
  //           headers: {
  //             Authorization: `Token ${token}`,
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setLibraryItems(data);
  //       } else {
  //         console.error("Failed to fetch library items:", response);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching library items:", error);
  //     }
  //   }

  //   fetchLibraryItems();
  // }, [token]);

  useEffect(() => {
    const fetchLibraryItems = async () => {
      setIsLibraryLoading(true);
      try {
        const response = await fetch(
          "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/insights/library/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setLibraryItems(data);
        } else {
          console.error("Failed to fetch library items:", response);
        }
      } catch (error) {
        console.error("Error fetching library items:", error);
      } finally {
        setIsLibraryLoading(false);
      }
    };

    fetchLibraryItems();
  }, [token, forceUpdate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setForceUpdate(!forceUpdate);
    // setFeedback(null);

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
        setFeedback(data);
        console.log("Feedback:", data);
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

  // const handleQueryClick = (item) => {
  //   setFeedback(item.feedback);
  // };
  const handleQueryClick = async (item) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://urubytes-backend-v2-r6wnv.ondigitalocean.app/insights/library/${item.searchID}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        console.log("Feedback:", data);

        setFeedback({
          insights: data.insight,
          metadata: data.metadata,
          sources: data.sources,
        });

        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleToggle = () => {
    setMode((prevMode) => (prevMode === "internal" ? "external" : "internal"));
  };

  // const handleDelete = async (searchID) => {
  //   try {
  //     const response = await fetch(
  //       `https://urubytes-backend-v2-r6wnv.ondigitalocean.app/insights/library/${searchID}/`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       const newLibraryItems = [...libraryItems];
  //       const index = newLibraryItems.findIndex(
  //         (item) => item.searchID === searchID
  //       );
  //       newLibraryItems.splice(index, 1);
  //       setLibraryItems(newLibraryItems);
  //       toast.success("Query deleted successfully");
  //       console.log("Deleted query:", searchID);
  //       console.log(response);
  //     } else {
  //       console.error("Failed to delete query:", response);
  //     }
  //   } catch (error) {
  //     console.error("Error deleting query:", error);
  //   }
  // };

  const handleDelete = async (searchID) => {
    try {
      const response = await fetch(
        `https://urubytes-backend-v2-r6wnv.ondigitalocean.app/insights/library/${searchID}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.ok) {
        setLibraryItems((prevLibraryItems) =>
          prevLibraryItems.filter((item) => item.searchID !== searchID)
        );
        toast.success("Query deleted successfully");
        setForceUpdate(!forceUpdate);
      } else {
        toast.error("Failed to delete query");
      }
    } catch (error) {
      toast.error("Error deleting query");
      console.error("Error deleting query:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-grey-bg h-screen w-screen overflow-y-auto internal">
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-4 p-2 h-full overflow-auto">
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

            {libraryItems.map((item, index) => (
              <ul key={index}>
                <li className="text-xs leading mb-2 bg-[#F0F2F9] p-2 my-2">
                  <span onClick={() => handleQueryClick(item)}>
                    {item.query.length > 30
                      ? `${item.query.substring(0, 30)}...`
                      : item.query}
                  </span>

                  <span className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {new Date(item.updated_at).toLocaleDateString()}
                    </span>
                    <RiDeleteBin6Line
                      className="text-red-600 font-bold text-5xl  bg-white py-2"
                      onClick={() => handleDelete(item.searchID)}
                    />{" "}
                  </span>
                </li>
              </ul>
            ))}
          </div>

          <div className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center justify-between">
                <span
                  className={`mr-3 ${
                    mode === "internal" ? "text-dark" : "text-gray-500"
                  }`}
                >
                  Internal Insight
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={mode === "external"}
                    onChange={handleToggle}
                  />
                  <span className="slider round"></span>
                </label>
                <span
                  className={`ml-3 ${
                    mode === "external" ? "text-dark" : "text-gray-500"
                  }`}
                >
                  External Insight
                </span>
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
              <h1 className="m-4 text-3xl font-bold">
                Ask Urubytes A Question
              </h1>
              <p className="px-32 text-gray-600">
                Get started extracting bytes-sized insights from your business
                data. Just tell us where to look first and you can ask any
                question about your business.
              </p>
            </div>

            {/* <form onSubmit={handleSubmit} className="p-2 mx-auto">
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
            )} */}
            <form onSubmit={handleSubmit} className="p-2 mx-auto relative">
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
              {loading && (
                <div className="absolute bottom-0 left-0 right-0">
                  <BeatLoader color={"#123abc"} loading={loading} size={15} />
                </div>
              )}
            </form>

            {feedback && (
              <div className="p-4 my-4 bg-gray-100 rounded-lg shadow-md ">
                <div className="text-gray-600 mb-4 insights">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {feedback.insights}
                  </Markdown>
                </div>

                <p>
                  {Object.entries(feedback.metadata).map(([key, value]) => (
                    <div key={key}>
                      Source:
                      <span className="text-primary-blue">
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
    </>
  );
};

export default InternalInsight;
