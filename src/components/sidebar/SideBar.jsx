import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import collapseImg from "../../assets/collapse.png";
import uLogoImg from "../../assets/u-logo.png";
import logo from "../../assets/logo.png";
import dashbordIcon from "../../assets/Dashboard.svg";
import internalInsightsIcon from "../../assets/ic_baseline-insights.png";
import marketInsightsIcon from "../../assets/search-insights.png";
import dataSourcesIcon from "../../assets/data-sources.png";
import savedSearchIcon from "../../assets/saved-search.png";
import getHelpIcon from "../../assets/help-icon.png";
import brightIcon from "../../assets/bright.png";
import billingImg from "../../assets/marketInsight/billings.png";
import teamImg from "../../assets/marketInsight/team.png";
import accountSettingImg from "../../assets/marketInsight/setting.png";
import logoutImg from "../../assets/marketInsight/logout.png";
import "./SideBar.css";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModalCard, setShowModalCard] = useState(false);

  const Menus = [
    { title: "Dashboard", link: "/dashboard", src: dashbordIcon },
    {
      title: "Get Insights",
      link: "/internalInsight",
      src: internalInsightsIcon,
    },
    // {
    //   title: "Market Insights",
    //   link: "/externalInsight",
    //   src: marketInsightsIcon,
    // },
    { title: "Data Sources ", link: "/dataSource", src: dataSourcesIcon },
    // { title: "Saved Search", link: "/savedSearch", src: savedSearchIcon },
    { title: "Billing", link: "/billing", src: billingImg },
  ];

  const bottomMenus = [
    { title: "Get Help", link: "/getHelp", src: getHelpIcon },
    { title: "Bright ahedor ", link: "/user", src: brightIcon },
  ];

  const handleBrightClick = () => {
    setShowModalCard(!showModalCard);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  }, []);

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-primary-blue p-5  pt-12 relative duration-300 overflow-y-auto h-screen flex flex-col `}
    >
      <img
        src={collapseImg}
        className={`absolute cursor-pointer -right-2 top-9 w-7  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />

      <div
        className={`flex gap-x-4 items-center ${open && "flex-row-reverse "}`}
      >
        <img
          src={uLogoImg}
          alt="Urubytes"
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          } ${open && "scale-0"}`}
        />
        <img
          src={logo}
          alt="Urubytes"
          className={`text-white font-medium text-xl duration-200 pl-16 ${
            !open && "scale-0"
          }`}
        />
      </div>
      <div className="flex flex-col overflow-hidden flex-grow">
        <div className="pt-6 flex-grow ">
          {Menus.map((Menu, i) => (
            <Link
              to={Menu?.link}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-300 text-light-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} `}
              key={i}
            >
              <img src={Menu.src} alt={Menu.title} />
              <span
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={` ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                } origin-left duration-200`}
              >
                {Menu.title}
              </span>
            </Link>
          ))}
          <hr className="border-t border-white p-0 mx-0 my-2 w-full" />
        </div>

        <ul className="mt-auto">
          <hr className="border-t border-white my-2" />
          {bottomMenus.map((Menu, i) => (
            <>
              <li
                key={i}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-300 text-light-white text-sm items-center gap-x-4 
               `}
                onClick={handleBrightClick}
              >
                <img src={Menu.src} alt={Menu.title} />
                <span
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={` ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  } origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>

              <hr className="border-t border-white my-2" />
            </>
          ))}
        </ul>
      </div>

      {showModalCard && (
        <div
          className={`absolute bottom-4 left-0  w-full p-4 z-50  ${
            open ? "ml-[230px]" : "ml-16"
          }`}
        >
          <div className="bg-white p-8 relative  max-w-lg w-[350px] border-gray-200 rounded-lg shadow  dark:bg-white dark:border-gray-300">
            <button
              className="absolute top-9 right-8 hover:translate-x-2 transform transition duration-200"
              onClick={handleBrightClick}
            >
              Close
            </button>

            <h3 className="text-xl font-semibold mb-4">Organizations</h3>
            <ul>
              <li className="flex items-center gap-3 text-[18px] cursor-pointer">
                <img src={teamImg} alt={teamImg} />
                Team
              </li>
              <hr className="border-t border-gray-400 my-4" />
              <li className="flex items-center gap-3 text-[18px] cursor-pointer mb-2">
                <img src={accountSettingImg} alt={accountSettingImg} />
                Account Setting
              </li>
              <li className="flex items-center gap-3 text-[18px] cursor-pointer">
                <img src={logoutImg} alt={logoutImg} />
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
