import React from "react";
import driveImage from "../../../assets/drive.png";
import documentImage from "../../../assets/cloud.png";
import linkImage from "../../../assets/link.png";

const UploadCard = ({ source, title, handleClick, isSelected }) => {
  const imageClass = {
    drive: driveImage,
    document: documentImage,
    link: linkImage,
  };

  return (
    <div
      className={`flex items-center gap-2 cursor-pointer  py-2 ${
        isSelected ? "border-b-2 border-blue-500" : ""
      }`}
      onClick={() => handleClick(source)}
    >
      <img src={imageClass[source]} alt={imageClass[source]} />

      <h3 className="text text-xl ">{title}</h3>
    </div>
  );
};

export default UploadCard;
