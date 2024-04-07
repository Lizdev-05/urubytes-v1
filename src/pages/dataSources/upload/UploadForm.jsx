import React, { useState } from "react";
import UploadCard from "./UploadCard";
import driveImage from "../../../assets/drive.png";
import cloudImg from "../../../assets/cloud.png";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UploadSource = () => {
  const [selectedSource, setSelectedSource] = useState("drive");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();

  const userId = useSelector((state) => state.login.userID);
  const orgId = useSelector((state) => state.login.orgID);
  const token = useSelector((state) => state.login.token);

  const handleSourceClick = (source) => {
    setSelectedSource(source);
  };

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleFileUpload = async () => {
    if (selectedFiles.length === 0) {
      console.error("No files selected");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("source", file);
    });
    // formData.append("userID", "UBUFXYG084");

    // formData.append("orgID", "UBOCASY436");
    formData.append("userID", userId);
    formData.append("orgID", orgId);
    formData.append("type", "FILE");

    console.log("Token:", token);
    console.log(
      "Posting to URL:",
      "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/datasources/static/"
    );

    try {
      const response = await axios.post(
        "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/datasources/static/",

        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("Files uploaded and saved to user storage:", response.data);
      console.log("Response:", response);
      navigate("/dataSource");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
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
                <p className="text-center mb-2">
                  Click or drag files to this area to upload PDF, <br /> DOCX,
                  XLSX, and PPTX files
                </p>
                <div className="flex justify-between items-center">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.xlsx,.pptx"
                    name="source"
                  />
                  <button
                    onClick={handleFileUpload}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          )}
          {selectedSource === "drive" && (
            <div className="mt-4 border-gray-500 border-2 border-dotted rounded-xl p-8 flex flex-col items-center m-auto w-3/4">
              <img src={driveImage} alt={driveImage} className="w-[3rem]" />
              <p>Click add drive from Google Drive</p>
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

// message:
// "User registered and logged in successfully"
// token:
// "71013e4119c96f7b6b75ab0758c7eb09ced3e10a"
// user:
// email: "miranda@gmail.com"
// isAdmin: false
// name: "Miranda"
// orgID:"UBOWKGD475"
// userID: "UBULRZJ428"
