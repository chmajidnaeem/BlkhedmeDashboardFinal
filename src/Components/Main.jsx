// import React, { useState } from "react";
// import { IoIosSearch } from "react-icons/io";
// import { CiGlobe } from "react-icons/ci";
// import { IoMdArrowDropdown } from "react-icons/io";
// import person from "../Assets/person.png";

// const Main = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("EN");

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="h-full bg-slate-400">
//       {/* top area */}
//       <div className="flex justify-between p-4 bg-white">
//         {/* search input */}
//         <div
//           style={{ position: "relative", display: "inline-block" }}
//           className="ml-20"
//         >
//           <input
//             type="text"
//             placeholder="Search"
//             style={{
//               padding: "8px",
//               paddingRight: "30px",
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               width: "600px",
//             }}
//           />

//           <IoIosSearch
//             style={{
//               position: "absolute",
//               right: "10px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               pointerEvents: "none",
//             }}
//           />
//         </div>
//         {/* language and person section */}
//         <div className="flex gap-4 items-center">
//           {/* language dropdown */}
//           <div className="relative">
//             <div
//               className="flex items-center bg-gray-200 px-3 py-2 rounded-xl cursor-pointer"
//               onClick={handleDropdownToggle}
//             >
//               <CiGlobe />
//               <h1 className="ml-2">{selectedLanguage}</h1>
//               <IoMdArrowDropdown className="ml-2" />
//             </div>
//             {isDropdownOpen && (
//               <div
//                 className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg"
//                 style={{ width: "100px" }}
//               >
//                 <ul className="list-none p-0 m-0">
//                   <li
//                     className="p-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleLanguageChange("EN")}
//                   >
//                     English
//                   </li>
//                   <li
//                     className="p-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleLanguageChange("AR")}
//                   >
//                     Arabic
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <img src={person} alt="person" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

// import React, { useState } from "react";
// import { IoIosSearch } from "react-icons/io";
// import { CiGlobe } from "react-icons/ci";
// import { IoMdArrowDropdown } from "react-icons/io";
// import person from "../Assets/person.png";

// const Main = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("EN");

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="h-full bg-slate-400">
//       {/* top area */}
//       <div className="flex flex-col sm:flex-row justify-between p-4 bg-white">
// {/* search input */}
// <div className="relative flex-1 sm:ml-20 mb-4 sm:mb-0">
//   <input
//     type="text"
//     placeholder="Search"
//     className="w-full sm:w-96 md:w-[600px] p-2 pl-10 border border-gray-300 rounded-lg"
//   />
//   <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
// </div>

//         {/* language and person section */}
//         <div className="flex items-center gap-4">
//           {/* language dropdown */}
//           <div className="relative">
//             <div
//               className="flex items-center bg-gray-200 px-3 py-2 rounded-xl cursor-pointer"
//               onClick={handleDropdownToggle}
//             >
//               <CiGlobe />
//               <h1 className="ml-2">{selectedLanguage}</h1>
//               <IoMdArrowDropdown className="ml-2" />
//             </div>
//             {isDropdownOpen && (
//               <div
//                 className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg"
//                 style={{ width: "100px" }}
//               >
//                 <ul className="list-none p-0 m-0">
//                   <li
//                     className="p-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleLanguageChange("EN")}
//                   >
//                     English
//                   </li>
//                   <li
//                     className="p-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleLanguageChange("AR")}
//                   >
//                     Arabic
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <img src={person} alt="person" className="w-8 md:w-10 md:h-10 h-8" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import person from "../Assets/person.png";

const Main = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <div className="h-full bg-slate-400 overflow-x-auto">
      {/* top area */}
      <div className="flex flex-row justify-between p-4 bg-white">
        {/* search input */}
        <div className="relative flex-1 sm:ml-20 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Search"
            className=" p-2 pl-10 border border-gray-300 rounded-lg w-[200px] md:w-[600px] lg:w-[600px]"
          />
          <IoIosSearch className="absolute right-20 md:right-60 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>

        {/* language and person section */}
        <div className="flex items-center gap-4">
          {/* language dropdown */}
          <div className="relative">
            <div
              className="flex items-center bg-gray-200 px-3 py-2 rounded-xl cursor-pointer"
              onClick={handleDropdownToggle}
            >
              <CiGlobe />
              <h1 className="ml-2">{selectedLanguage}</h1>
              <IoMdArrowDropdown className="ml-2" />
            </div>
            {isDropdownOpen && (
              <div
                className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg"
                style={{ width: "100px" }}
              >
                <ul className="list-none p-0 m-0">
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange("EN")}
                  >
                    English
                  </li>
                  <li
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange("AR")}
                  >
                    Arabic
                  </li>
                </ul>
              </div>
            )}
          </div>
          <img src={person} alt="person" className="w-8 md:w-10 md:h-10 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Main;
