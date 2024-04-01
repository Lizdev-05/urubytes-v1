import React from "react";
import style from "./Survey.module.css";
import logo from "../../assets/uru-logo.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Survey = () => {
  return (
    <section className={style.survey}>
      <div className={style.surveyWrapper}>
        <div className="flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0">
          <div
            className={`w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
          >
            <div className="p-6 space-y-4 md:space-y-8 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-800">
                Tell us about your organization
              </h1>
              <form className="space-y-4 md:space-y-2" action="#">
                <div>
                  <label
                    for="industry"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Industry
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    <IoIosArrowDown className="absolute top-3 right-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    for="organization"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Organization Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    {/* <IoIosArrowDown className="absolute top-3 right-3 text-gray-400" /> */}
                  </div>
                </div>
                <div>
                  <label
                    for="size"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Organization Size
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="size"
                      id="size"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="*********"
                      required=""
                    />
                    <IoIosArrowDown className="absolute top-3 right-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    for="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Your Role
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="role"
                      id="role"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    <IoIosArrowDown className="absolute top-3 right-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    for="country"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                    <IoIosArrowDown className="absolute top-3 right-3 text-gray-400" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Next
                </button>

                {/* <p className="text-sm font-light text-gray-900 dark:text-gray-900">
                  <a
                    href="#"
                    className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                  >
                    Skip for now
                  </a>
                </p> */}
                <p className="text-sm font-light text-gray-900 dark:text-gray-900 flex justify-end">
                  <a
                    href="#"
                    className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                  >
                    Skip Survey
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className={style.surveyContent}>
          <img src={logo} alt="logo" className={style.surveyLogo} />
          <h1>Gain Insights, Drive Growth.</h1>
          <p>
            Connect with local experts, researchers, and industry leaders to
            gain valuable insights and unlock collaboration opportunities..
          </p>
          <p className={style.surveyIcons}>
            <a href="#contact" className="">
              <FaLinkedin size={22} color="#1b1b1b" />
            </a>
            <a href="#contact" className="">
              <FaFacebookSquare size={22} color="#1b1b1b" />
            </a>
            <a href="#contact" className="">
              <FaSquareXTwitter size={22} color="#1b1b1b" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Survey;
