import React, { useState } from "react";
import style from "./Interest.module.css";
import logo from "../../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLoginData,
  updateRegistrationData,
} from "../../../reducer/action";

const Interest = () => {
  const [formData, setFormData] = useState({
    interests: "",
    referrer: "",
  });

  const navigate = useNavigate();

  const registrationData = useSelector(
    (state) => state.registration.registrationData
  );
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auth/register/",
        registrationData
      );
      // dispatch(
      //   updateLoginData({
      //     userID: response.data.userID,
      //     orgID: response.data.orgID,
      //     token: response.data.token,
      //   })
      // );
      const data = {
        userID: response.data.userID,
        orgID: response.data.orgID,
        token: response.token,
      };
      dispatch(updateLoginData(data));
      dispatch(updateRegistrationData(data));
      console.log(response.data);
      toast.success(response.message);
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to send data to backend:", error);

      toast.error(error.response.data.error || "Failed to register");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    dispatch(updateRegistrationData({ [name]: value }));
  };

  return (
    <>
      <ToastContainer />
      <section className={style.interest}>
        <div className={style.interestWrapper}>
          <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div
              className={`w-full rounded-xl shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
            >
              <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
                <h1 className="text-xl font-medium leading-tight tracking-tight text-blue-700 md:text-3xl dark:text-blue-500 py-8">
                  What is your interest?
                </h1>
                <form
                  className="space-y-4 md:space-y-2"
                  onSubmit={handleSubmit}
                >
                  <label className="text-sm  text-gray-700 border border-gray-400  rounded-2xl p-4 inline-block mb-2">
                    <input
                      type="radio"
                      name="interests"
                      className="mr-2"
                      value="Explore"
                      onChange={handleChange}
                    />
                    I’m here to explore
                  </label>
                  <label className="text-sm text-gray-700 border border-gray-400  rounded-2xl p-4 inline-block mb-2">
                    <input
                      type="radio"
                      name="interests"
                      className="mr-2"
                      value="Competitors"
                      onChange={handleChange}
                    />
                    I want to know what my competitors are doing
                  </label>
                  <label className="text-sm text-gray-700 border border-gray-400  rounded-2xl p-4 inline-block mb-2">
                    <input
                      type="radio"
                      name="interests"
                      className="mr-2"
                      value="Insights"
                      onChange={handleChange}
                    />
                    I’m looking to make sense of my data and get actionable
                    insight
                  </label>
                </form>
              </div>

              <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
                <h1 className="text-xl font-medium leading-tight tracking-tight text-blue-700 md:text-3xl dark:text-blue-500 pb-4">
                  How did you hear about us?
                </h1>
                <form
                  className="space-y-4 md:space-y-2"
                  onSubmit={handleSubmit}
                >
                  <label className="text-[13px]  text-gray-700 border border-gray-400  text-center rounded-2xl px-1 py-2 md:inline-block mb-2 mr-2">
                    <input
                      type="radio"
                      name="referrer"
                      className="mr-1"
                      value="FriendColleague"
                      onChange={handleChange}
                    />
                    Through a friend / colleague
                  </label>
                  <label className="text-[13px] text-gray-700 border border-gray-400  text-center rounded-2xl px-3 py-2 md:inline-block mb-2">
                    <input
                      type="radio"
                      name="referrer"
                      className="mr-1"
                      value="PublicationConference"
                      onChange={handleChange}
                    />
                    Industry publication/conference
                  </label>
                  <label className="text-[13px]  text-gray-700 border border-gray-400  text-center  rounded-2xl px-2 py-2 md:inline-block mb-2 mr-2 ">
                    <input
                      type="radio"
                      name="referrer"
                      className="mr-1"
                      value="SocialMedia"
                      onChange={handleChange}
                    />
                    Social media
                  </label>
                  <label className="text-[13px] text-gray-700 border border-gray-400 text-center rounded-2xl px-2 py-2 md:inline-block mb-2 mr-1 ">
                    <input
                      type="radio"
                      name="referrer"
                      className="mr-1"
                      value="OnlineSearch"
                      onChange={handleChange}
                    />
                    Online search
                  </label>
                  <label className="text-[13px] text-gray-700 border border-gray-400 text-center rounded-2xl px-2 py-2 md:inline-block mb-2">
                    <input
                      type="radio"
                      name="referrer"
                      className="mr-1"
                      value="WebinarNetworking"
                      onChange={handleChange}
                    />
                    Webinar/Networking event
                  </label>
                </form>
              </div>
              <div className="px-8">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!formData.interests || !formData.referrer}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lx px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80 my-8"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>

          <div className={style.interestContent}>
            <img src={logo} alt="logo" className={style.interestLogo} />
            <h1>Gain Insights, Drive Growth.</h1>
            <p>
              Integrate all your data sources to unlock insights and drive
              strategic decisions that propel your business forward.
            </p>
            <p className={style.interestIcons}>
              <a
                href="https://www.linkedin.com/company/urubytes"
                target="_blank"
                className="flex items-center justify-center gap-1"
              >
                <FaLinkedin size={22} color="#1b1b1b" />
                <span className="text-[#1b1b1b]">@URUbytes</span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Interest;
