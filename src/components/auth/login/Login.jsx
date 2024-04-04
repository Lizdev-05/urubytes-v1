import React from "react";
import style from "./Login.module.css";
import logo from "../../../assets/logo.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

const Login = () => {
  return (
    <section className={style.reg}>
      <div className={style.regWrapper}>
        <div className={style.regContent}>
          <img src={logo} alt="logo" className={style.regLogo} />
          <h1>Log in to start your search! </h1>
          <p>
            Welcome back! Log in to access your saved searches, alerts and
            unlock valuable startup & VC insights.
          </p>
          <p className={style.regIcons}>
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
        <div className="flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0">
          {/* <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700 form-background"> */}
          <div
            className={`w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-blue-800">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="johndoe@gmail.com"
                      required=""
                    />
                    <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
                  </div>
                </div>
                {/* Create  a label and input of password with a small vertical line, a tag that ask "forgot password and an envelope icon" */}

                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="*********"
                      required=""
                    />
                    {/* Create a line break to separe the typed password and forgot option */}
                    <span className="absolute top-2 right-24  border-l h-4/6 border-gray-300 border-2 dark:border-gray-400 "></span>
                    <a
                      href="#"
                      className="absolute top-3 right-10 text-xs font-medium text-blue-700 dark:text-blue-700"
                    >
                      Forgot?
                    </a>
                    <IoIosEyeOff className="absolute top-3 right-3 text-gray-400" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <a href="/dashboard"> Login</a>
                </button>
                <div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
                    <p className="text-xs font-light text-gray-700 dark:text-gray-700">
                      OR
                    </p>
                    <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
                  </div>
                </div>
                <button type="submit" className="--btn --btn-block">
                  <FcGoogle style={{ marginRight: 15 }} /> Login with google
                </button>
                <p className="text-sm font-light text-gray-900 dark:text-gray-900">
                  Don’t Have an Account?{" "}
                  <a
                    href="#"
                    className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                  >
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
