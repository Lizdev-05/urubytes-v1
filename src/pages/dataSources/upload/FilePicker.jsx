import React, { useState } from "react";

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && validateFileType(file)) {
      setSelectedFile(file);
    } else {
      // Handle invalid file type (optional: display an error message)
      console.error(
        "Invalid file type. Please upload PDF, DOCX, XLSX, or PPTX files."
      );
    }
  };

  const validateFileType = (file) => {
    const allowedExtensions = ["pdf", "docx", "xlsx", "pptx"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
  };

  return (
    <div className="text-center">
      <p>
        Click or drag file to this area to upload PDF, <br /> DOCX, XLSX and
        PPTX, can be uploaded here
      </p>
      <input
        type="file"
        className="hidden" // Hide the default file input element
        onChange={handleFileChange}
        accept=".pdf,.docx,.xlsx,.pptx" // Specify accepted file types
      />
    </div>
  );
}

export default FileUploader;

// const UploadSource = () => {
//     // ... other code

//     const handleDocumentUpload = (event) => {
//       const selectedFile = event.target.files[0];
//       // Handle selected file (e.g., display filename, upload to server)
//     };

//     return (
//       // ... other code
//   {selectedSource === 'document' && (
//     <div className="mt-10">
//       <input type="file" className="block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none" onChange={handleDocumentUpload} />
//     </div>
//   )}
//     );
//   };
