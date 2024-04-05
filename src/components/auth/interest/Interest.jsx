import React from "react";
import style from "./Interest.module.css";
import logo from "../../../assets/logo.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Interest = () => {
  return (
    <section className={style.interest}>
      <div className={style.interestWrapper}>
        <div className="flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0">
          <div
            className={`w-full rounded-xl shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
          >
            <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
              <h1 className="text-xl font-medium leading-tight tracking-tight text-blue-700 md:text-3xl dark:text-blue-500 py-8">
                What is your interest?
              </h1>
              <p className="text-sm  text-gray-700 border border-gray-400  rounded-2xl p-4 inline-block mb-2">
                I’m here to explore
              </p>
              <p className="text-sm text-gray-700 border border-gray-400  rounded-2xl p-4 inline-block mb-2 ">
                I want to know what my competitors are doing
              </p>
              <p className="text-sm text-gray-700 border border-gray-400  rounded-2xl p-4 inline-block mb-2">
                I’m looking to make sense of my data and get actionable insight
              </p>
            </div>

            <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
              <h1 className="text-xl font-medium leading-tight tracking-tight text-blue-700 md:text-3xl dark:text-blue-500 pb-4">
                How did you hear about us?
              </h1>
              <p className="text-sm  text-gray-700 border border-gray-400  text-center rounded-2xl px-1 py-2 md:inline-block mb-2 mr-2">
                Through a friend or colleague
              </p>

              <p className="text-sm text-gray-700 border border-gray-400  text-center rounded-2xl px-3 py-2 md:inline-block mb-2">
                Industry publication/conference
              </p>

              <p className="text-sm text-gray-700 border border-gray-400  text-center  rounded-2xl px-3 py-2 md:inline-block mb-2 mr-2 ">
                Social media
              </p>
              <p className="text-sm text-gray-700 border border-gray-400 text-center rounded-2xl px-3 py-2 md:inline-block mb-2 mr-2">
                Online search
              </p>
              <p className="text-sm text-gray-700 border border-gray-400 text-center rounded-2xl px-3 py-2 md:inline-block mb-2">
                Webinar/Networking event
              </p>

              <div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lx px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80 my-8"
                >
                  <Link to="/dashboard">Complete</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={style.interestContent}>
          <img src={logo} alt="logo" className={style.interestLogo} />
          <h1>Gain Insights, Drive Growth.</h1>
          <p className="">
            Integrate all your data sources to unlock insights and drive
            strategic decisions that propel your business forward.
          </p>
          <p className={style.interestIcons}>
            <a
              href="https://www.linkedin.com/company/urubytes"
              target="_blank"
              className=" flex items-center justify-center gap-1"
            >
              <FaLinkedin size={22} color="#1b1b1b" />
              <span className="text-[#1b1b1b]">@URUbytes</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interest;
