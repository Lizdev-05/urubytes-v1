import React, { useState } from "react";
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

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", link: "/", src: dashbordIcon },
    {
      title: "Internal Insights",
      link: "/internalInsight",
      src: internalInsightsIcon,
    },
    {
      title: "Market Insights",
      link: "/externalInsight",
      src: marketInsightsIcon,
    },
    { title: "Data Sources ", link: "/dataSource", src: dataSourcesIcon },
    { title: "Saved Search", link: "/savedSearch", src: savedSearchIcon },
  ];

  const bottomMenus = [
    { title: "Get Help", link: "/getHelp", src: getHelpIcon },
    { title: "Bright ahedor ", link: "/user", src: brightIcon },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-primary-blue p-5 h-screen pt-12 relative duration-300`}
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
      <div className="flex flex-col h-5/6 overflow-hidden">
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

        <hr className="border-t border-white my-2" />
        <ul className="pt-6">
          {bottomMenus.map((Menu, i) => (
            <>
              <li
                key={i}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-300 text-light-white text-sm items-center gap-x-4 
               `}
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
    </div>
  );
};

export default SideBar;
