import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginData } from "../../../reducer/action";
import { useNavigate } from "react-router-dom";
import { persistor } from "../../../reducer/store";
import { ToastContainer, toast } from "react-toastify";
import { googleLogout } from '@react-oauth/google';

const Logout = () => {
  const token = useSelector((state) => state.login.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("Token:", token);

  const handleLogout = async () => {
    console.log("handleLogout called");
    try {
      console.log("Logging out with token:", token);
      const response = await axios.post(
        "https://urubytes-origin.azurewebsites.net/auth/logout/",
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("Logout response:", response);

      console.log("Dispatching googleLogout");
      googleLogout();
      console.log("googleLogout dispatched");

      console.log("Dispatching updateLoginData");
      dispatch(
        updateLoginData({
          userID: "",
          orgID: "",
          token: "",
        })
      );
      console.log("updateLoginData dispatched");

      console.log("Logout successful:", response.data);
      toast.success("Logout successful");

      await persistor.purge();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };
  return (
    <>
      <ToastContainer />

      <div className="flex items-center">
        <button onClick={handleLogout} className="--btn">
          Logout
        </button>
      </div>
    </>
  );
};

export default Logout;
