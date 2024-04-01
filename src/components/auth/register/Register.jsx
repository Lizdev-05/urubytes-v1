import React from "react";
import style from "./Register.module.css";
import logo from "../../assets/uru-logo.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

// <FaUser />
// <IoIosEyeOff />
// <IoMdEye />

const Register = () => {
  return (
    <section className={style.reg}>
      <div className={style.regWrapper}>
        <div className={style.regContent}>
          <img src={logo} alt="logo" className={style.regLogo} />
          <h1>Unlock the Power of Your Network.</h1>
          <p>
            Access valuable market insights, connect with local experts, and
            make informed decisions that will propel your business forward.
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
            <div className="p-6 space-y-4 md:space-y-8 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-800">
                Create account
              </h1>
              <form className="space-y-4 md:space-y-2" action="#">
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John Doe"
                      required=""
                    />
                    <FaUser className="absolute top-3 right-3 text-gray-400" />
                  </div>
                </div>
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
                    <IoIosEyeOff className="absolute top-3 right-3 text-gray-400" />
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-white-700 dark:bg-white-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="terms"
                      className="font-light text-gray-700 dark:text-gray-700"
                    >
                      I agree to all the
                      <a
                        className="font-medium text-primary-600 text-blue-500 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms, Privacy Policy and Fees.
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <a href="/login"> Create an account</a>
                </button>
                <div>
                  {/* create horizontal line, a text that says Or and another horizontal at the back. let the Or be at the middle */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
                    <p className="text-xs font-light text-gray-700 dark:text-gray-700">
                      OR
                    </p>
                    <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
                  </div>
                </div>
                <button type="submit" className="--btn --btn-block">
                  <FcGoogle style={{ marginRight: 15 }} /> Signup with google
                </button>
                <p className="text-sm font-light text-gray-900 dark:text-gray-900">
                  Have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                  >
                    Login here
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

export default Register;