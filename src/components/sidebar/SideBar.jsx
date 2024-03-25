import React, { useState } from "react";
import collapseImg from "../../assets/collapse.png";
import uLogoImg from "../../assets/u-logo.png";
import logo from "../../assets/logo.png";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-primary-blue h-screen p-5  pt-12 relative`}
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
    </div>
  );
};

export default SideBar;
