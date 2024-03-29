import React from "react";

const FormatPage = ({ format, handleClick, isSelected }) => {
  return (
    <div>
      <div
        className={`flex items-center gap-2 cursor-pointer  py-2 ${
          isSelected ? "border-b-2 border-blue-500" : ""
        }`}
        onClick={() => handleClick(format)}
      >
        <h3 className="text text-xl ">{format}</h3>
      </div>
    </div>
  );
};

export default FormatPage;
