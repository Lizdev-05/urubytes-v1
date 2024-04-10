import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginData } from "../../reducer/action";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const token = useSelector((state) => state.login.token);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("Token:", token);
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auth/logout/",
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      // dispatch(
      //   updateLoginData({
      //     userID: "",
      //     orgID: "",
      //     token: "",
      //   })
      // );
      console.log("Logout successful:", response.data);
      toast.success("Logout successful");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auth/logout/",
  //       {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       }
  //     );
  //     dispatch(
  //       updateLoginData({
  //         userID: "",
  //         orgID: "",
  //         token: "",
  //       })
  //     );
  //     console.log("Logout successful:", response.data);
  //     toast.success("Logout successful");
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // };

  return (
    <>
      <ToastContainer />

      <div className="nav">
        <form className="bg-white">
          <div className="relative py-2 px-4 flex justify-end gap-4 mr-6 ">
            {/* <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            type="button"
            className="relative inline-flex items-center ml-16 p-3 text-sm font-medium text-center text-white"
            onClick={toggleDropdown}
          >
            <svg
              className="w-8 h-8 text-blue-600 animate-wiggle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
              />
            </svg>
            <div className="bg-red-500 px-1.5 rounded-full text-center text-white text-sm absolute -top-1 end-1">
              6
              <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-red-200 w-full h-full"></div>
            </div>
          </button> */}

            <div className="flex flex-col bg-[#EB5757] text-white py-1 px-6 items-center --btn --btn-danger">
              <span className=" text-[12px]">Current Plan</span>
              <h4 className="font text-[16px]">BASIC</h4>
            </div>

            <div className="flex items-center">
              <button onClick={handleLogout} className="--btn --btn-danger">
                Logout
              </button>
            </div>
          </div>
          <div
            id="dropdown"
            className={`${
              dropdownOpen ? "block" : "hidden"
            } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-white flex flex-col absolute top-16 end-8`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-500"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-400 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default Navbar;
