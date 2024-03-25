import React, { useState } from "react";
import collapseImg from "../../assets/collapse.png";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-primary-blue h-screen p-5  pt-8 relative`}
    >
      <img
        src={collapseImg}
        className={`absolute cursor-pointer -right-2 top-9 w-7  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default SideBar;
