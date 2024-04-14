import React from "react";
import qbImg from "../../assets/qb.png";
import googleImg from "../../assets/goggle.png";
import airTable from "../../assets/airtable.png";
import driveImage from "../../assets/drive2.png";
import googleDocs from "../../assets/google-docs.png";
import googleSheets from "../../assets/google-sheet.png";

const IntegrationCards = () => {
  return (
    <div className="flex justify-start gap-8 items-center my-2">
      <div className="w-220 h-220 rounded-lg border border-gray-200 py-1 px-6">
        <div className="flex justify-center">
          <img src={driveImage} alt="Drive" className=" p-4" />
        </div>
        <div className="flex justify-center">
          <h1 className="pb-2 font-bold">Google Drive</h1>
        </div>
      </div>
      <div className="w-220 h-220 rounded-lg border border-gray-200 py-1 px-6">
        <div className="flex justify-center">
          <img src={googleSheets} alt="Google Sheets" className=" p-4" />
        </div>
        <div className="flex justify-center">
          <h1 className="pb-2 font-bold">Google Sheets</h1>
        </div>
      </div>
      <div className="w-220 h-220 rounded-lg border border-gray-200 py-1 px-6">
        <div className="flex justify-center">
          <img src={googleDocs} alt="Google Docs" className=" p-4" />
        </div>
        <div className="flex justify-center">
          <h1 className="pb-2 font-bold">Google Docs</h1>
        </div>
      </div>

      <div className="w-220 h-220 rounded-lg border border-gray-200 py-1 px-6">
        <div className="flex justify-center">
          <img src={qbImg} alt="QuickBooks" className=" p-4" />
        </div>
        <div className="flex justify-center">
          <h1 className=" font-bold pb-2">QuickBooks</h1>
        </div>
      </div>

      <div className="w-220 h-220 rounded-lg border border-gray-200 py-1 px-6">
        <div className="flex justify-center">
          <img src={airTable} alt="Airtable" className=" p-4" />
        </div>
        <div className="flex justify-center">
          <h1 className="pb-2 font-bold">Airtable</h1>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCards;
