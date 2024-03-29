import React, { useState } from "react";
import UploadCard from "./UploadCard";
import driveImage from "../../../assets/drive.png";
import cloudImg from "../../../assets/cloud.png";
import { FaPlus } from "react-icons/fa";

const UploadSource = () => {
  const [selectedSource, setSelectedSource] = useState("drive");

  const handleSourceClick = (source) => {
    setSelectedSource(source);
  };

  return (
    <div className="border rounded-xl border-gray-300 w-4/5 px-12 py-4 m-auto">
      <div className="flex justify-start gap-8">
        <UploadCard
          source="drive"
          title="Google Drive"
          handleClick={handleSourceClick}
          isSelected={selectedSource === "drive"}
        />
        <UploadCard
          source="document"
          title="Upload"
          handleClick={handleSourceClick}
          isSelected={selectedSource === "document"}
        />
        <UploadCard
          source="link"
          title="Add Link"
          handleClick={handleSourceClick}
          isSelected={selectedSource === "link"}
        />
      </div>
      <div className="">
        <hr className=" border-t border-grey-bg w-full " />
      </div>
      {selectedSource && (
        <div className="">
          {selectedSource === "document" && (
            <div className="mt-4">
              <div className="mt-4 border-gray-500 border-2 border-dotted rounded-xl p-4 flex flex-col items-center m-auto w-3/4">
                <img src={cloudImg} alt={driveImage} className="w-[3rem]" />
                <p className="text-center">
                  Click or drag file to this area to upload PDF, <br /> DOCX,
                  XLSX and PPTX, can be uploaded here
                </p>
              </div>
            </div>
          )}
          {selectedSource === "drive" && (
            <div className="mt-4 border-gray-500 border-2 border-dotted rounded-xl p-8 flex flex-col items-center m-auto w-3/4">
              <img src={driveImage} alt={driveImage} className="w-[3rem]" />
              <p>Click add drive from google drive</p>
            </div>
          )}
          {selectedSource === "link" && (
            <div className="mt-4 items-start w-3/4">
              <h2 className="font font-medium text-xl">Add a link below</h2>
              <input
                placeholder="https://example.com"
                className="cursor-pointer block w-full px-3 py-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-blue-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              />
              <div className="flex justify-end my-2 ">
                <button className=" text-dark font-semi-bold py-2 px-6 bg-grey-bg rounded-md  flex items-center gap-2 ">
                  <FaPlus />
                  Add Link
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadSource;
