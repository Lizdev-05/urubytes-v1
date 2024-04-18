import React, { useState } from "react";
import style from "./Survey.module.css";
import logo from "../../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateRegistrationData } from "../../../reducer/action";

const Survey = () => {
  const industryOptions = [
    { value: "Technology", label: "Technology" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Finance", label: "Finance" },
    { value: "E-commerce", label: "E-commerce" },
    { value: "Food and Beverage", label: "Food and Beverage" },
    { value: "Education", label: "Education" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Renewable Energy", label: "Renewable Energy" },
    { value: "Transportation", label: "Transportation" },
    { value: "Fashion and Apparel", label: "Fashion and Apparel" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Travel and Hospitality", label: "Travel and Hospitality" },
    { value: "Automotive", label: "Automotive" },
    { value: "Agriculture", label: "Agriculture" },
    { value: "Marketing and Advertising", label: "Marketing and Advertising" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Construction", label: "Construction" },
    { value: "Telecommunications", label: "Telecommunications" },
    { value: "Environmental Services", label: "Environmental Services" },
    { value: "Fitness and Wellness", label: "Fitness and Wellness" },
  ];

  const [formData, setFormData] = useState({
    industry: "",
    organization: "",
    size: "",
    role: "",
    country: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.registrationData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    dispatch(updateRegistrationData({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Survey data submitted:", formData);
    dispatch(updateRegistrationData(formData));
    navigate("/interest");
  };

  return (
    <>
      <ToastContainer />
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
                <form
                  className="space-y-4 md:space-y-2"
                  action="#"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      for="industry"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Industry
                    </label>
                    {/* <div className="relative">
                      <input
                        list="industryOptions"
                        type="text"
                        name="industry"
                        id="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      <datalist id="industryOptions">
                        {industryOptions.map((option, index) => (
                          <option key={index} value={option} />
                        ))}
                      </datalist>
                    </div> */}
                    <Select
                      options={industryOptions}
                      isSearchable
                      name="industry"
                      value={industryOptions.find(
                        (option) => option.value === formData.industry
                      )}
                      onChange={(selectedOption) =>
                        handleChange({
                          target: {
                            name: "industry",
                            value: selectedOption.value,
                          },
                        })
                      }
                    />
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
                        value={formData.organization}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
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
                        value={formData.size}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="20-50"
                        required
                      />
                      {/* <IoIosArrowDown className="absolute top-3 right-3 text-gray-400" /> */}
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
                        value={formData.role}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      {/* <IoIosArrowDown className="absolute top-3 right-3 text-gray-400" /> */}
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
                        value={formData.country}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      {/* <IoIosArrowDown className="absolute top-3 right-3 text-gray-400" /> */}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <Link to="/interest"> Next</Link>
                  </button>

                  {/* <p className="text-sm font-light text-gray-900 dark:text-gray-900 flex justify-end">
                    <Link
                      to="/dashboard"
                      className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                    >
                      Skip for now
                    </Link>
                  </p> */}
                </form>
              </div>
            </div>
          </div>
          <div className={style.surveyContent}>
            <img src={logo} alt="logo" className={style.surveyLogo} />
            <h1>Gain Insights, Drive Growth.</h1>
            <p>
              Integrate all your data sources to unlock insights and drive
              strategic decisions that propel your business forward.
            </p>
            <p className={style.surveyIcons}>
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
    </>
  );
};

export default Survey;
