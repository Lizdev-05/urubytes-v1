import React from "react";
import qbImg from "../../assets/qb.png";
import googleImg from "../../assets/goggle.png";
import airTable from "../../assets/airtable.png";

const IntegrationCards = () => {
  return (
    <div className="flex justify-start gap-8 items-center my-2">
      <div class="w-220 h-220 rounded-lg border border-gray-200 py-1 px-6">
        <div class="flex justify-center">
          <img src={qbImg} alt="QuickBooks" class=" p-4" />
        </div>
        <div class="flex justify-center">
          <h1 class=" font-bold pb-2">QuickBooks</h1>
        </div>
      </div>
      <div class="w-220 h-220 rounded-lg border border-gray-200 py-1 px-6">
        <div class="flex justify-center">
          <img src={googleImg} alt="Google" class=" p-4" />
        </div>
        <div class="flex justify-center">
          <h1 class="pb-2 font-bold">Google</h1>
        </div>
      </div>
      <div class="w-220 h-220 rounded-lg border border-gray-200 py-1 px-6">
        <div class="flex justify-center">
          <img src={airTable} alt="Airtable" class=" p-4" />
        </div>
        <div class="flex justify-center">
          <h1 class="pb-2 font-bold">QuickBooks</h1>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCards;
