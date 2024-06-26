import React, { useState } from "react";
import style from "./Login.module.css";
import logo from "../../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { updateLoginData } from "../../../reducer/action";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://urubytes.azurewebsites.net/auth/login/",
        formData
      );
      dispatch(
        updateLoginData({
          userID: response.data.user.userID,
          orgID: response.data.user.orgID,
          token: response.data.token,
          name: response.data.user.name,
        })
      );

      console.log("Login successful:", response.data);
      toast.success(response.data.message || "Login successful");

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
      toast.error(error.response.data.error || "Login failed");
    }
  };

  const signInWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("Successful Google login:", response);

      try {
        // make a request to Google to get user profile info
        const profileResponse = await axios.get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log("Google Profile Response:", profileResponse.data);
        const profileData = profileResponse.data;

        // now, for the meantime, use the user's Google details to log in
        const loginResponse = await axios.post(
          "https://urubytes.azurewebsites.net/auth/login/",
          {
            email: profileData.email,
            password: `${profileData.given_name} ${profileData.sub}`,
          }
        );

        dispatch(
          updateLoginData({
            userID: loginResponse.data.user.userID,
            orgID: loginResponse.data.user.orgID,
            token: loginResponse.data.token,
          })
        );

        console.log("Full Google login successful:", loginResponse.data);
        toast.success(loginResponse.data.message || "Login successful");
        navigate("/dashboard");
      } catch (error) {
        console.error("Full Google login failed:", error.response.data.error);
        toast.error(error.response.data.error || "Login failed");
      }
    },
    onError: (error) => {
      console.log("Google error:", error);
    },
  });

  return (
    <>
      <ToastContainer />

      <section className={style.reg}>
        <div className={style.regWrapper}>
          <div className={style.regContent}>
            <img src={logo} alt="logo" className={style.regLogo} />
            <h1>Log in to start your search!</h1>
            <p>Welcome back! Log in to pick up where you left off</p>
            <p className={style.regIcons}>
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
          <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div
              className={`w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
            >
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-blue-800">
                  Login
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="johndoe@gmail.com"
                        required
                      />
                      <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="*********"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-3 right-3 text-gray-400"
                      >
                        {isPasswordVisible ? <IoMdEye /> : <IoIosEyeOff />}
                      </button>
                    </div>
                    <div className="text-right">
                    <Link
                      to="/forgotPassword" // Update this with the appropriate route
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  </div>

                  

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
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
                  <button
                    type="button"
                    className="--btn --btn-block"
                    onClick={() => signInWithGoogle()}
                  >
                    <FcGoogle style={{ marginRight: 15 }} /> Login with google
                  </button>
                  <p className="text-sm font-light text-gray-900 dark:text-gray-900">
                    Don’t Have an Account?{" "}
                    <Link
                      to="/register"
                      className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                    >
                      Register here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
