import React, { useState } from "react";
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
    { title: "Dashboard", src: dashbordIcon },
    { title: "Internal Insights", src: internalInsightsIcon },
    { title: "Market Insights", src: marketInsightsIcon },
    { title: "Data Sources ", src: dataSourcesIcon },
    { title: "Saved Search", src: savedSearchIcon },
  ];

  const bottomMenus = [
    { title: "Get Help", src: getHelpIcon },
    { title: "Bright ahedor ", src: brightIcon },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-primary-blue h-screen p-5  pt-12 relative duration-300`}
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
        <ul className="pt-6 flex-grow ">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-300 text-light-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} `}
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
          <hr className="border-t border-white p-0 mx-0 my-2 w-full" />
        </ul>
        <hr className="border-t border-white my-2" />
        <ul className="pt-6">
          {bottomMenus.map((Menu, index) => (
            <>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-300 text-light-white text-sm items-center gap-x-4 
               `}
              >
                <img src={Menu.src} />

                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
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
