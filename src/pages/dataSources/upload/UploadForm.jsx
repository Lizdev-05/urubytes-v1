import React, { useState } from "react";
import UploadCard from "./UploadCard";
import driveImage from "../../../assets/drive.png";
import cloudImg from "../../../assets/cloud.png";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner";

const UploadSource = () => {
  const [selectedSource, setSelectedSource] = useState("document");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = useSelector((state) => state.login.token);
  const userId = useSelector(
    (state) => state.login.userID || state.registration.registrationData.userID
  );
  const orgId = useSelector(
    (state) => state.login.orgID || state.registration.registrationData.orgID
  );

  const loginState = useSelector((state) => state.login);
  console.log("Login state:", loginState);
  const state = useSelector((state) => state);
  console.log("Redux state:", state);

  const handleSourceClick = (source) => {
    setSelectedSource(source);
  };

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleFileUpload = async () => {
    if (selectedFiles.length === 0) {
      return;
    }

    setLoading(true);

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("source", file);
    });

    formData.append("userID", userId);
    formData.append("orgID", orgId);
    formData.append("type", "FILE");

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
      console.log("Response:", response);
      navigate("/dataSource");
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log("Token:", token);
  console.log("User ID:", userId);
  console.log("Org ID:", orgId);
  console.log("Files to upload:", selectedFiles);

  return (
    <div className="border rounded-xl border-gray-300 w-4/5 px-12 py-4 m-auto relative">
      {/* {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <Spinner />
        </div>
      )} */}

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <Spinner />
        </div>
      )}
      <div className="flex justify-start gap-8">
        {/* <UploadCard
          source="drive"
          title="Google Drive"
          handleClick={handleSourceClick}
          isSelected={selectedSource === "drive"}
        /> */}
        <UploadCard
          source="document"
          title="Upload"
          handleClick={handleSourceClick}
          isSelected={selectedSource === "document"}
        />
        {/* <UploadCard
          source="link"
          title="Add Link"
          handleClick={handleSourceClick}
          isSelected={selectedSource === "link"}
        /> */}
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
                <div className="flex flex-col items-center">
                  <label className="custom-file-upload">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf,.docx,.xlsx,.pptx"
                      name="source"
                      style={{ display: 'none' }}
                    />
                   <button className="border-2 border-gray-300 text-gray-500 font-bold py-2 px-4 rounded">
                      Choose Files
                    </button>
                  </label>
                  <p>
                    {selectedFiles.length > 0 ? `${selectedFiles.length} files selected` : 'No files chosen'}
                  </p>

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
