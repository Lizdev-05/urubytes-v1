import React, { useState } from "react";
import UploadCard from "./UploadCard";
import driveImage from "../../../assets/drive.png";
import cloudImg from "../../../assets/cloud.png";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

const UploadSource = () => {
  const [selectedSource, setSelectedSource] = useState("drive");
  const [selectedFiles, setSelectedFiles] = useState([]);

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
    formData.append("userID", "UBUZJLA408");
    formData.append("orgID", "UBOXCTZ765");
    formData.append("type", "FILE");

    try {
      const response = await axios.post(
        "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/",
        formData
      );
      console.log("Files uploaded and saved to user storage:", response.data);
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

// import React, { useState } from "react";
// import UploadCard from "./UploadCard";
// import driveImage from "../../../assets/drive.png";
// import cloudImg from "../../../assets/cloud.png";
// import { FaPlus } from "react-icons/fa";
// import axios from "axios";

// const UploadSource = () => {
//   const [selectedSource, setSelectedSource] = useState("drive");
//   const [selectedFiles, setSelectedFiles] = useState(null);
//   const [link, setLink] = useState("");

//   const handleSourceClick = (source) => {
//     setSelectedSource(source);
//   };

//   const handleFileChange = (event) => {
//     setSelectedFiles(event.target.files[0]);
//   };

//   // const handleFileUpload = async () => {
//   //   if (!selectedFiles) {
//   //     console.error("No file selected");
//   //     return;
//   //   }

//   //   const formData = new FormData();

//   //   for (let i = 0; i < selectedFiles.length; i++) {
//   //     formData.append("source", selectedFiles[i]);
//   //   }

//   //   try {
//   //     const response = await axios.post(
//   //       "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/",

//   //       formData,
//   //       {
//   //         headers: {
//   //           "Content-Type": "multipart/form-data",
//   //         },
//   //         timeout: 30000,
//   //       }
//   //     );

//   //     const saveResponse = await axios.post(
//   //       "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/",
//   //       {
//   //         fileUrl: response.data.fileUrl,
//   //         userID: "UBUZJLA408",
//   //         orgID: "UBOXCTZ765",
//   //       }
//   //     );

//   //     console.log(
//   //       "File uploaded and saved to user storage:",
//   //       saveResponse.data
//   //     );
//   //   } catch (error) {
//   //     console.error("Error uploading file:", error);
//   //   }
//   // };

//   // const handleFileUpload = async (event) => {
//   //   event.preventDefault();

//   //   const selectedFiles = event.target.source.files;
//   //   console.log(selectedFiles);

//   //   const formData = new FormData();
//   //   for (let i = 0; i < selectedFiles.length; i++) {
//   //     formData.append("source", selectedFiles[i]);
//   //   }

//   //   formData.append("userID", "UBUZJLA408");
//   //   formData.append("orgID", "UBOXCTZ765");
//   //   formData.append("type", "FILE");

//   //   try {
//   //     const response = await axios.post(
//   //       "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/",
//   //       formData
//   //     );
//   //     console.log("logging");
//   //     console.log(response.data);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   // const handleLinkChange = (event) => {
//   //   setLink(event.target.value);
//   // };

//   // const handleLinkUpload = async () => {
//   //   if (!link) {
//   //     console.error("No link provided");
//   //     return;
//   //   }

//   //   try {
//   //     const response = await axios.post(
//   //       "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/",
//   //       {
//   //         fileUrl: link,
//   //         userID: "UBUZJLA408",
//   //         orgID: "UBOXCTZ765",
//   //       }
//   //     );

//   //     console.log("Link uploaded and saved to user storage:", response.data);
//   //   } catch (error) {
//   //     console.error("Error uploading link:", error);
//   //   }
//   // };

//   const handleFileUpload = async (event) => {
//     event.preventDefault();

//     if (!selectedFiles) {
//       console.error("No files selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("source", selectedFiles);
//     formData.append("userID", "UBUZJLA408");
//     formData.append("orgID", "UBOXCTZ765");
//     formData.append("type", "FILE");

//     try {
//       const response = await axios.post(
//         "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/",
//         formData
//       );
//       console.log("logging");
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="border rounded-xl border-gray-300 w-4/5 px-12 py-4 m-auto">
//       <div className="flex justify-start gap-8">
//         <UploadCard
//           source="drive"
//           title="Google Drive"
//           handleClick={handleSourceClick}
//           isSelected={selectedSource === "drive"}
//         />
//         <UploadCard
//           source="document"
//           title="Upload"
//           handleClick={handleSourceClick}
//           isSelected={selectedSource === "document"}
//         />
//         <UploadCard
//           source="link"
//           title="Add Link"
//           handleClick={handleSourceClick}
//           isSelected={selectedSource === "link"}
//         />
//       </div>
//       <div className="">
//         <hr className=" border-t border-grey-bg w-full " />
//       </div>
//       {selectedSource && (
//         <div className="">
//           {selectedSource === "document" && (
//             <div className="mt-4">
//               <div className="mt-4 border-gray-500 border-2 border-dotted rounded-xl p-4 flex flex-col items-center m-auto w-3/4">
//                 <img src={cloudImg} alt={driveImage} className="w-[3rem]" />
//                 <p className="text-center mb-2">
//                   Click or drag file to this area to upload PDF, <br /> DOCX,
//                   XLSX and PPTX, can be uploaded here
//                 </p>
//                 <input
//                   type="file"
//                   // onChange={handleFileUpload}
//                   onChange={handleFileChange}
//                   accept=".pdf,.docx,.xlsx,.pptx"
//                   name="source"
//                 />
//                 <button
//                   onClick={handleFileUpload}
//                   className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
//                 >
//                   Upload
//                 </button>
//               </div>
//             </div>
//           )}
//           {selectedSource === "drive" && (
//             <div className="mt-4 border-gray-500 border-2 border-dotted rounded-xl p-8 flex flex-col items-center m-auto w-3/4">
//               <img src={driveImage} alt={driveImage} className="w-[3rem]" />
//               <p>Click add drive from google drive</p>
//             </div>
//           )}
//           {/* {selectedSource === "link" && (
//             <div className="mt-4 items-start w-3/4">
//               <h2 className="font font-medium text-xl">Add a link below</h2>
//               <input
//                 placeholder="https://example.com"
//                 className="cursor-pointer block w-full px-3 py-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-blue-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
//               />
//               <div className="flex justify-end my-2 ">
//                 <button className=" text-dark font-semi-bold py-2 px-6 bg-grey-bg rounded-md  flex items-center gap-2 ">
//                   <FaPlus />
//                   Add Link
//                 </button>
//               </div>
//             </div>
//           )} */}

//           {selectedSource === "link" && (
//             <div className="mt-4 items-start w-3/4">
//               <h2 className="font font-medium text-xl">Add a link below</h2>
//               <input
//                 placeholder="https://example.com"
//                 className="cursor-pointer block w-full px-3 py-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-blue-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
//                 // onChange={handleLinkChange}
//               />
//               <div className="flex justify-end my-2 ">
//                 <button
//                   // onClick={handleLinkUpload}
//                   className=" text-dark font-semi-bold py-2 px-6 bg-grey-bg rounded-md  flex items-center gap-2 "
//                 >
//                   <FaPlus />
//                   Add Link
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadSource;

// // import React, { useState } from "react";
// // import UploadCard from "./UploadCard";
// // import driveImage from "../../../assets/drive.png";
// // import cloudImg from "../../../assets/cloud.png";
// // import { FaPlus } from "react-icons/fa";
// // import axios from "axios";

// // const UploadSource = () => {
// //   const [selectedSource, setSelectedSource] = useState("drive");
// //   const [selectedFiles, setSelectedFiles] = useState(null);
// //   const [linkUrl, setLinkUrl] = useState("");

// //   const handleSourceClick = (source) => {
// //     setSelectedSource(source);
// //   };

// //   const handleFileChange = (event) => {
// //     setSelectedFiles(event.target.files[0]);
// //   };

// //   const handleLinkChange = (event) => {
// //     setLinkUrl(event.target.value);
// //   };

// //   const handleUpload = async () => {
// //     if (selectedSource === "document") {
// //       if (!selectedFiles) {
// //         console.error("No file selected");
// //         return;
// //       }

// //       const formData = new FormData();
// //       formData.append("file", selectedFiles);
// //       try {
// //         const response = await axios.post(
// //           "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/",
// //           formData,
// //           {
// //             headers: {
// //               "Content-Type": "multipart/form-data",
// //             },
// //           }
// //         );

// //         const saveResponse = await axios.post(
// //           "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/",
// //           {
// //             fileUrl: response.data.fileUrl,
// //             userID: "UBUZJLA408",
// //             orgID: "UBOXCTZ765",
// //           }
// //         );

// //         console.log(
// //           "File uploaded and saved to user storage:",
// //           saveResponse.data
// //         );
// //       } catch (error) {
// //         console.error("Error uploading file:", error);
// //       }
// //     } else if (selectedSource === "link") {
// //       if (!linkUrl) {
// //         console.error("No link provided");
// //         return;
// //       }

// //       try {
// //         const response = await axios.post(
// //           "https://plankton-app-3slhc.ondigitalocean.app/datasources/static/",
// //           {
// //             linkUrl: linkUrl,
// //             userID: "UBUZJLA408",
// //             orgID: "UBOXCTZ765",
// //           }
// //         );

// //         console.log("Link uploaded:", response.data);
// //       } catch (error) {
// //         console.error("Error uploading link:", error);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="border rounded-xl border-gray-300 w-4/5 px-12 py-4 m-auto">
// //       <div className="flex justify-start gap-8">
// //         <UploadCard
// //           source="drive"
// //           title="Google Drive"
// //           handleClick={handleSourceClick}
// //           isSelected={selectedSource === "drive"}
// //         />
// //         <UploadCard
// //           source="document"
// //           title="Upload"
// //           handleClick={handleSourceClick}
// //           isSelected={selectedSource === "document"}
// //         />
// //         <UploadCard
// //           source="link"
// //           title="Add Link"
// //           handleClick={handleSourceClick}
// //           isSelected={selectedSource === "link"}
// //         />
// //       </div>
// //       <div className="">
// //         <hr className=" border-t border-grey-bg w-full " />
// //       </div>
// //       {selectedSource && (
// //         <div className="">
// //           {selectedSource === "document" && (
// //             <div className="mt-4">
// //               <div className="mt-4 border-gray-500 border-2 border-dotted rounded-xl p-4 flex flex-col items-center m-auto w-3/4">
// //                 <img src={cloudImg} alt={driveImage} className="w-[3rem]" />
// //                 <p className="text-center mb-2">
// //                   Click or drag file to this area to upload PDF, <br /> DOCX,
// //                   XLSX and PPTX, can be uploaded here
// //                 </p>
// //                 <input
// //                   type="file"
// //                   onChange={handleFileChange}
// //                   accept=".pdf,.docx,.xlsx,.pptx"
// //                 />
// //                 <button
// //                   onClick={handleUpload}
// //                   className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
// //                 >
// //                   Upload
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //           {selectedSource === "drive" && (
// //             <div className="mt-4 border-gray-500 border-2 border-dotted rounded-xl p-8 flex flex-col items-center m-auto w-3/4">
// //               <img src={driveImage} alt={driveImage} className="w-[3rem]" />
// //               <p>Click add drive from google drive</p>
// //             </div>
// //           )}
// //           {selectedSource === "link" && (
// //             <div className="mt-4 items-start w-3/4">
// //               <h2 className="font font-medium text-xl">Add a link below</h2>
// //               <input
// //                 placeholder="https://example.com"
// //                 className="cursor-pointer block w-full px-3 py-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-blue-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
// //                 onChange={handleLinkChange}
// //               />
// //               <button
// //                 onClick={handleUpload}
// //                 className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
// //               >
// //                 Upload Link
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default UploadSource;
