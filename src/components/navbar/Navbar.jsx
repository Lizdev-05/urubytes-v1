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
      console.log("Logging out with token:", token);
      const response = await axios.post(
        "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auth/logout/",

        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("Logout response:", response);
      dispatch(
        updateLoginData({
          userID: "",
          orgID: "",
        })
      ).then(() => {
        console.log("Logout successful:", response.data);
        toast.success("Logout successful");
        window.location.href = "/";
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <ToastContainer />

      <div className="nav">
        <form className="bg-white">
          <div className="relative py-2 px-4 flex justify-end gap-4 mr-6 ">
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
