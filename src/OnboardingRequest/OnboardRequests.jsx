// import React from "react";

// const OnboardRequests = () => {
//   return (
//     <div>
//       <h1>OnboardRequests page</h1>
//     </div>
//   );
// };

// export default OnboardRequests;

import React from "react";
import Main from "../Components/Main";
import OnboardTable from "./OnboardTable";

const OnboardRequests = () => {
  return (
    <div>
      <Main />
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="font-poppins font-medium text-xl mb-4 sm:mb-0">
            Promotional Banners
          </h1>
        </div>
        <div className="flex flex-row gap-2 sm:gap-4 mt-6 font-poppins font-medium text-lg border-b-2">
          <h1 className="border-b-2 border-black w-full text-center sm:text-sm text-lg sm:w-auto sm:text-left">
            Onboarding Request
          </h1>
          <h1 className="text-[#707070] w-full text-center sm:text-sm text-lg sm:w-auto sm:text-left">
            Denied Request
          </h1>
        </div>
        <OnboardTable />
        <div className="flex justify-end">
          <div className="bg-white flex-col text-center justify-center items-center mr-0 sm:mr-10 inline-block py-4 px-8 rounded-lg text-[#0000009C] gap-2 sm:gap-4">
            <h1>Approve</h1>
            <h1>Deny</h1>
            <h1>View</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardRequests;
