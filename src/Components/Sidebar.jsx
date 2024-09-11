// import React from "react";

// const Sidebar = () => {
//   return (
//     <div>
//       <h1>Sidebar page</h1>
//     </div>
//   );
// };

// export default Sidebar;

// import React from "react";
// import {
//   FaUser,
//   FaHeart,
//   FaBox,
//   FaComments,
//   FaMapMarkerAlt,
//   FaQuestionCircle,
//   FaTicketAlt,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { Icon } from "@iconify/react"; // Import Iconify's Icon component
// import userKeyIcon from "@iconify-icons/mdi/user-key"; // Import other Iconify icons as needed
// import accountHelpIcon from "@iconify-icons/mdi/account-help";
// import img from "../Assets/img.JPG";
// import { FaShapes } from "react-icons/fa6";
// import { RiFlag2Fill } from "react-icons/ri";
// import { IoMdNotifications } from "react-icons/io";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//   return (
//     <div className="bg-[#2B4DC9] p-5 px-6 hidden md:block h-full">
//       <div className="flex flex-col">
//         <h1 className="font-Montserrat font-semibold text-2xl text-white">
//           Blkhedme
//         </h1>
//       </div>
//       {/* nav items */}
//       <nav className="mt-10 pb-14 font-Poppins">
//         <div className="flex items-center py-2 text-lg hover:bg-[#004E89] text-white">
//           <TbLayoutDashboardFilled className="mr-4 h-6 w-6" />
//           Dashboard
//         </div>
//         <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//           Provider Management
//         </h1>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <img src={img} alt="onboard" className="mr-4 h-6 w-6" />
//           Onboarding Requests
//         </div>
//         <div className="flex items-center py-2 text-sm hover:bg-[#004E89] text-white">
//           <Icon icon={userKeyIcon} className="mr-4 h-6 w-6" />
//           Provider
//         </div>
//         <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//           Seeker Management
//         </h1>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <Icon icon={accountHelpIcon} className="mr-4 h-6 w-6" />
//           Seeker
//         </div>
//         <div className="flex items-center py-2 text-base text-[#FF9900] hover:bg-[#004E89] text-white">
//           {/* <FaComments className="mr-4 " /> */}
//           Add New Seeker
//         </div>
//         <div className="flex items-center py-2 text-base  hover:bg-[#004E89] text-white">
//           <FaShapes className="mr-4 h-5 w-5" />
//           Categories
//         </div>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <RiFlag2Fill className="mr-4 h-5 w-5" />
//           Promotional Banners
//         </div>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <IoMdNotifications className="mr-4 h-6 w-6" />
//           Send Notifications
//         </div>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <FontAwesomeIcon icon={faBullhorn} className="mr-4 h-5 w-5" />
//           Subscription Packages
//         </div>
//         <div className="flex items-center py-2 mb-6 text-base hover:bg-[#004E89] text-white">
//           <Icon icon="fa6-solid:language" className="mr-4 h-7 w-7" />{" "}
//           {/* Iconify Language Icon */}
//           Language Setup
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import React from "react";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { Icon } from "@iconify/react"; // Import Iconify's Icon component
// import userKeyIcon from "@iconify-icons/mdi/user-key"; // Import other Iconify icons as needed
// import accountHelpIcon from "@iconify-icons/mdi/account-help";
// import img from "../Assets/img.JPG";
// import announcement from "../Assets/announcement.png";
// import language from "../Assets/language.png";
// import { FaShapes } from "react-icons/fa6";
// import { RiFlag2Fill } from "react-icons/ri";
// import { IoMdNotifications } from "react-icons/io";
// import { Bs6CircleFill } from "react-icons/bs";

// const Sidebar = () => {
//   return (
//     <div className="bg-[#2B4DC9] p-5 px-6 hidden md:block h-full">
//       <div className="flex flex-col">
//         <h1 className="font-Montserrat font-semibold text-2xl text-white">
//           Blkhedme
//         </h1>
//       </div>
//       {/* nav items */}
//       <nav className="mt-10 pb-14 font-Poppins">
//         <div className="flex items-center py-2 text-lg hover:bg-[#004E89] text-white">
//           <TbLayoutDashboardFilled className="mr-4 h-6 w-6" />
//           Dashboard
//         </div>
//         <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//           Provider Management
//         </h1>
//         <div className="flex items-center py-2 text-sm hover:bg-[#004E89] text-white">
//           <img src={img} alt="onboard" className="mr-4 h-6 w-6" />
//           Onboarding Requests
//           <Bs6CircleFill className="mr-2 h-5 w-5" />
//         </div>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <Icon icon={userKeyIcon} className="mr-4 h-6 w-6" />
//           Provider
//         </div>
//         <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//           Seeker Management
//         </h1>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <Icon icon={accountHelpIcon} className="mr-4 h-6 w-6" />
//           Seeker
//         </div>

//         <div className="flex items-center py-2 text-base  hover:bg-[#004E89] text-white">
//           <FaShapes className="mr-4 h-5 w-5" />
//           Categories
//         </div>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <RiFlag2Fill className="mr-4 h-5 w-5" />
//           Promotional Banners
//         </div>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <IoMdNotifications className="mr-4 h-6 w-6" />
//           Send Notifications
//         </div>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <img src={announcement} alt="announcement" className="mr-4 h-5 w-5" />
//           Subscription Packages
//         </div>
//         <div className="flex items-center py-2 mb-6 text-base hover:bg-[#004E89] text-white">
//           <img src={language} alt="language" className="mr-4 h-5 w-7" />
//           Language Setup
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { Icon } from "@iconify/react";
// import userKeyIcon from "@iconify-icons/mdi/user-key";
// import accountHelpIcon from "@iconify-icons/mdi/account-help";
// import img from "../Assets/img.JPG";
// import announcement from "../Assets/announcement.png";
// import language from "../Assets/language.png";
// import { FaShapes } from "react-icons/fa6";
// import { RiFlag2Fill } from "react-icons/ri";
// import { IoMdNotifications } from "react-icons/io";
// import { Bs6CircleFill } from "react-icons/bs";
// import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md"; // Import the arrow icons

// const Sidebar = () => {
//   // State to track which dropdowns are open
//   const [isProviderOpen, setIsProviderOpen] = useState(false);
//   const [isSeekerOpen, setIsSeekerOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

//   // Toggle dropdowns
//   const toggleProvider = () => setIsProviderOpen(!isProviderOpen);
//   const toggleSeeker = () => setIsSeekerOpen(!isSeekerOpen);
//   const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);

//   return (
//     <div className="bg-[#2B4DC9] p-5 px-6 hidden md:block h-full">
//       <div className="flex flex-col">
//         <h1 className="font-Montserrat font-semibold text-2xl text-white">
//           Blkhedme
//         </h1>
//       </div>
//       {/* nav items */}
//       <nav className="mt-10 pb-14 font-Poppins">
//         <div className="flex items-center py-2 text-lg hover:bg-[#004E89] text-white">
//           <TbLayoutDashboardFilled className="mr-4 h-6 w-6" />
//           Dashboard
//         </div>
//         <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//           Provider Management
//         </h1>

//         {/* Onboarding Requests */}
//         <div className="flex items-center py-2 text-sm hover:bg-[#004E89] text-white">
//           <img src={img} alt="onboard" className="mr-4 h-6 w-6" />
//           Onboarding Requests
//           <Bs6CircleFill className="mr-2 h-5 w-5 text-[#FF8000]" />
//         </div>

//         {/* Provider Dropdown */}
//         <div
//           className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
//           onClick={toggleProvider}
//         >
//           <div className="flex items-center">
//             <Icon icon={userKeyIcon} className="mr-4 h-6 w-6" />
//             Provider
//           </div>
//           {isProviderOpen ? (
//             <MdKeyboardArrowDown className="h-6 w-6" />
//           ) : (
//             <MdKeyboardArrowRight className="h-6 w-6" />
//           )}
//         </div>
//         {isProviderOpen && (
//           <div className="ml-8">
//             <div className="py-2 text-sm text-white">List of Provider</div>
//             <div className="py-2 text-sm text-white">Certified Provider</div>
//             <div className="py-2 text-sm text-white">Featured Provider</div>
//             <div className="py-2 text-sm text-white">Add New Provider</div>
//           </div>
//         )}

//         <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//           Seeker Management
//         </h1>

//         {/* Seeker Dropdown */}
//         <div
//           className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
//           onClick={toggleSeeker}
//         >
//           <div className="flex items-center">
//             <Icon icon={accountHelpIcon} className="mr-4 h-6 w-6" />
//             Seeker
//           </div>
//           {isSeekerOpen ? (
//             <MdKeyboardArrowDown className="h-6 w-6" />
//           ) : (
//             <MdKeyboardArrowRight className="h-6 w-6" />
//           )}
//         </div>
//         {isSeekerOpen && (
//           <div className="ml-8">
//             <div className="py-2 text-sm text-white">List of Seeker</div>
//             <div className="py-2 text-sm text-white">Add New Seeker</div>
//           </div>
//         )}

//         {/* Categories Dropdown */}
//         <div
//           className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
//           onClick={toggleCategories}
//         >
//           <div className="flex items-center">
//             <FaShapes className="mr-4 h-5 w-5" />
//             Categories
//           </div>
//           {isCategoriesOpen ? (
//             <MdKeyboardArrowDown className="h-6 w-6" />
//           ) : (
//             <MdKeyboardArrowRight className="h-6 w-6" />
//           )}
//         </div>
//         {isCategoriesOpen && (
//           <div className="ml-8">
//             <div className="py-2 text-sm text-white">Category Setup</div>
//             <div className="py-2 text-sm text-white">Sub-Category Setup</div>
//           </div>
//         )}

//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <RiFlag2Fill className="mr-4 h-5 w-5" />
//           Promotional Banners
//         </div>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <IoMdNotifications className="mr-4 h-6 w-6" />
//           Send Notifications
//         </div>
//         <div className="flex items-center py-2 text-base hover:bg-[#004E89] text-white">
//           <img src={announcement} alt="announcement" className="mr-4 h-5 w-5" />
//           Subscription Packages
//         </div>
//         <div className="flex items-center py-2 mb-6 text-base hover:bg-[#004E89] text-white">
//           <img src={language} alt="language" className="mr-4 h-4 w-6" />
//           Language Setup
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { Icon } from "@iconify/react";
// import userKeyIcon from "@iconify-icons/mdi/user-key";
// import accountHelpIcon from "@iconify-icons/mdi/account-help";
// import img from "../Assets/img.JPG";
// import announcement from "../Assets/announcement.png";
// import language from "../Assets/language.png";
// import { FaShapes } from "react-icons/fa6";
// import { RiFlag2Fill } from "react-icons/ri";
// import { IoMdNotifications } from "react-icons/io";
// import { Bs6CircleFill } from "react-icons/bs";
// import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   // State to track which dropdowns are open
//   const [isProviderOpen, setIsProviderOpen] = useState(false);
//   const [isSeekerOpen, setIsSeekerOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const [isSubscriptionPackagesOpen, setisSubscriptionPackagesOpen] =
//     useState(false);

//   // State to track the currently selected menu item
//   const [selectedMenu, setSelectedMenu] = useState("Dashboard");

//   // Toggle dropdowns
//   const toggleProvider = () => setIsProviderOpen(!isProviderOpen);
//   const toggleSeeker = () => setIsSeekerOpen(!isSeekerOpen);
//   const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
//   const ToggleSubscriptionPackages = () =>
//     setisSubscriptionPackagesOpen(!isSubscriptionPackagesOpen);

//   // Function to handle menu item click
//   const handleMenuClick = (menuItem) => {
//     setSelectedMenu(menuItem); // Update the selected menu item
//   };

//   return (
//     <div className="bg-[#2B4DC9] p-5 px-6 hidden md:block h-full">
//       <div className="flex flex-col">
//         <h1 className="font-Montserrat font-semibold text-2xl text-white">
//           Blkhedme
//         </h1>
//       </div>
//       {/* nav items */}
//       <nav className="mt-10 pb-14 font-Poppins">
//         {/* Dashboard */}
//         <Link
//           to="/Dashboard"
//           className={`flex items-center py-2 text-lg hover:bg-[#004E89] text-white cursor-pointer ${
//             selectedMenu === "Dashboard" ? "text-[#FF8000]" : ""
//           }`}
//           onClick={() => handleMenuClick("Dashboard")}
//         >
//           <TbLayoutDashboardFilled className="mr-4 h-6 w-6" />
//           Dashboard
//         </Link>

//         {/* Provider Management */}
//         <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//           Provider Management
//         </h1>

//         {/* Onboarding Requests */}
//         <Link
//           to="/OnboardRequests"
//           className={`flex items-center py-2 text-sm hover:bg-[#004E89] text-white cursor-pointer ${
//             selectedMenu === "Onboarding Requests" ? "text-[#FF8000]" : ""
//           }`}
//           onClick={() => handleMenuClick("Onboarding Requests")}
//         >
//           <img src={img} alt="onboard" className="mr-4  h-6 w-6" />
//           Onboarding Requests
//           <Bs6CircleFill className="ml-2 h-5 w-5 text-[#FF8000]" />
//         </Link>

//         {/* Provider Dropdown */}
//         <div
//           className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
//           onClick={toggleProvider}
//         >
//           <div className="flex items-center">
//             <Icon icon={userKeyIcon} className="mr-4 h-6 w-6" />
//             Provider
//           </div>
//           {isProviderOpen ? (
//             <MdKeyboardArrowDown className="h-6 w-6" />
//           ) : (
//             <MdKeyboardArrowRight className="h-6 w-6" />
//           )}
//         </div>
//         {isProviderOpen && (
//           <div className="ml-8">
//             <Link
//               to="/ProviderList"
//               className={`py-2 text-sm text-white cursor-pointer ${
//                 selectedMenu === "List of Provider" ? "text-[#FF8000]" : ""
//               }`}
//               onClick={() => handleMenuClick("List of Provider")}
//             >
//               List of Provider
//             </Link>
//             <div
//               className={`py-2 text-sm text-white cursor-pointer ${
//                 selectedMenu === "Certified Provider" ? "text-[#FF8000]" : ""
//               }`}
//               onClick={() => handleMenuClick("Certified Provider")}
//             >
//               Certified Provider
//             </div>
//             <div
//               className={`py-2 text-sm text-white cursor-pointer ${
//                 selectedMenu === "Featured Provider" ? "text-[#FF8000]" : ""
//               }`}
//               onClick={() => handleMenuClick("Featured Provider")}
//             >
//               Featured Provider
//             </div>
//             <Link
//               to="/NewProvider"
//               className={`py-2 text-sm text-white cursor-pointer ${
//                 selectedMenu === "Add New Provider" ? "text-[#FF8000]" : ""
//               }`}
//               onClick={() => handleMenuClick("Add New Provider")}
//             >
//               Add New Provider
//             </Link>
//           </div>
//         )}

//         {/* Seeker Management */}
//         <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//           Seeker Management
//         </h1>

//         {/* Seeker Dropdown */}
//         <div
//           className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
//           onClick={toggleSeeker}
//         >
//           <div className="flex items-center">
//             <Icon icon={accountHelpIcon} className="mr-4 h-6 w-6" />
//             Seeker
//           </div>
//           {isSeekerOpen ? (
//             <MdKeyboardArrowDown className="h-6 w-6" />
//           ) : (
//             <MdKeyboardArrowRight className="h-6 w-6" />
//           )}
//         </div>
//         {isSeekerOpen && (
//           <div className="ml-8">
//             <Link
//               to="/SeekerList"
//               className={`py-2 text-sm text-white cursor-pointer ${
//                 selectedMenu === "List of Seeker" ? "text-[#FF8000]" : ""
//               }`}
//               onClick={() => handleMenuClick("List of Seeker")}
//             >
//               List of Seeker
//             </Link>
//             <br />
//             <Link
//               to="/NewSeeker"
//               className={`py-2 text-sm text-white cursor-pointer ${
//                 selectedMenu === "Add New Seeker" ? "text-[#FF8000]" : ""
//               }`}
//               onClick={() => handleMenuClick("Add New Seeker")}
//             >
//               Add New Seeker
//             </Link>
//           </div>
//         )}

//         {/* Categories Dropdown */}
//         <div
//           className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
//           onClick={toggleCategories}
//         >
//           <div className="flex items-center">
//             <FaShapes className="mr-4 h-5 w-5" />
//             Categories
//           </div>
//           {isCategoriesOpen ? (
//             <MdKeyboardArrowDown className="h-6 w-6" />
//           ) : (
//             <MdKeyboardArrowRight className="h-6 w-6" />
//           )}
//         </div>
//         {isCategoriesOpen && (
//           <div className="ml-8">
//             <Link
//               to="/CategorySetup"
//               className={`py-2 text-sm text-white cursor-pointer ${
//                 selectedMenu === "Category Setup" ? "text-[#FF8000]" : ""
//               }`}
//               onClick={() => handleMenuClick("Category Setup")}
//             >
//               Category Setup
//             </Link>
//             <br />
//             <Link
//               to="/SubCategorySetup"
//               className={`py-2 text-sm text-white cursor-pointer ${
//                 selectedMenu === "Sub-Category Setup" ? "text-[#FF8000]" : ""
//               }`}
//               onClick={() => handleMenuClick("Sub-Category Setup")}
//             >
//               Sub-Category Setup
//             </Link>
//           </div>
//         )}

//         {/* Promotional Banners */}
//         <Link
//           to="/PromoBanners"
//           className={`flex items-center py-2 text-base hover:bg-[#004E89] text-white cursor-pointer ${
//             selectedMenu === "Promotional Banners" ? "text-[#FF8000]" : ""
//           }`}
//           onClick={() => handleMenuClick("Promotional Banners")}
//         >
//           <RiFlag2Fill className="mr-4 h-5 w-5" />
//           Promotional Banners
//         </Link>

//         {/* Send Notifications */}
//         <Link
//           to="/Notifications"
//           className={`flex items-center py-2 text-base hover:bg-[#004E89] text-white cursor-pointer ${
//             selectedMenu === "Send Notifications" ? "text-[#FF8000]" : ""
//           }`}
//           onClick={() => handleMenuClick("Send Notifications")}
//         >
//           <IoMdNotifications className="mr-4 h-6 w-6" />
//           Send Notifications
//         </Link>

//         {/* Subscription Packages Dropdown */}
//         <div
//           className="flex items-center justify-between py-2 text-sm hover:bg-[#004E89] text-white cursor-pointer"
//           onClick={ToggleSubscriptionPackages}
//         >
//           <div className="flex items-center">
//             <img
//               src={announcement}
//               alt="announcement"
//               className="mr-4 h-5 w-5"
//             />
//             Subscription Packages
//           </div>
//           {isSubscriptionPackagesOpen ? (
//             <MdKeyboardArrowDown className="h-6 w-6" />
//           ) : (
//             <MdKeyboardArrowRight className="h-6 w-6" />
//           )}
//         </div>
//         {isSubscriptionPackagesOpen && (
//           <div className="ml-8">
//             <Link
//               to="/SubscriptionPackageList"
//               className={`py-2 text-sm text-white cursor-pointer ${
//                 selectedMenu === "Subscription Package List"
//                   ? "text-[#FF8000]"
//                   : ""
//               }`}
//               onClick={() => handleMenuClick("Subscription Package List")}
//             >
//               Subscription Package List
//             </Link>
//           </div>
//         )}

//         {/* Language Setup */}
//         <Link
//           to="/Language"
//           className={`flex items-center py-2 mb-6 text-base hover:bg-[#004E89] text-white cursor-pointer ${
//             selectedMenu === "Language Setup" ? "text-[#FF8000]" : ""
//           }`}
//           onClick={() => handleMenuClick("Language Setup")}
//         >
//           <img src={language} alt="language" className="mr-4 h-4 w-6" />
//           Language Setup
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Icon } from "@iconify/react";
import userKeyIcon from "@iconify-icons/mdi/user-key";
import accountHelpIcon from "@iconify-icons/mdi/account-help";
import img from "../Assets/img.JPG";
import announcement from "../Assets/announcement.png";
import language from "../Assets/language.png";
import { FaShapes } from "react-icons/fa6";
import { RiFlag2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { Bs6CircleFill } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // State to track which dropdowns are open
  const [isProviderOpen, setIsProviderOpen] = useState(false);
  const [isSeekerOpen, setIsSeekerOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSubscriptionPackagesOpen, setisSubscriptionPackagesOpen] =
    useState(false);

  // State to track the currently selected menu item and parent
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [activeParentMenu, setActiveParentMenu] = useState("");

  // Toggle dropdowns
  const toggleProvider = () => {
    setIsProviderOpen(!isProviderOpen);
    setActiveParentMenu("Provider"); // Mark "Provider" as active
    setSelectedMenu("List of Provider"); // Mark the first child as selected
  };

  const toggleSeeker = () => {
    setIsSeekerOpen(!isSeekerOpen);
    setActiveParentMenu("Seeker"); // Mark "Seeker" as active
    setSelectedMenu("List of Seeker"); // Mark the first child as selected
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    setActiveParentMenu("Categories"); // Mark "Categories" as active
    setSelectedMenu("Category Setup"); // Mark the first child as selected
  };

  const ToggleSubscriptionPackages = () => {
    setisSubscriptionPackagesOpen(!isSubscriptionPackagesOpen);
    setActiveParentMenu("Subscription Packages"); // Mark "Subscription Packages" as active
    setSelectedMenu("Subscription Package List"); // Mark the first child as selected
  };

  // Function to handle menu item click
  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem); // Update the selected menu item
    setActiveParentMenu(""); // Clear active parent
  };

  return (
    <div className="bg-[#2B4DC9] p-5 px-6 hidden md:block h-full">
      <div className="flex flex-col">
        <h1 className="font-Montserrat font-semibold text-2xl text-white">
          Blkhedme
        </h1>
      </div>
      {/* nav items */}
      <nav className="mt-10 pb-14 font-Poppins">
        {/* Dashboard */}
        <Link
          to="/Dashboard"
          className={`flex items-center py-2 text-lg hover:bg-[#004E89] text-white cursor-pointer ${
            selectedMenu === "Dashboard" ? "text-[#FF8000]" : ""
          }`}
          onClick={() => handleMenuClick("Dashboard")}
        >
          <TbLayoutDashboardFilled className="mr-4 h-6 w-6" />
          Dashboard
        </Link>

        {/* Provider Management */}
        <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
          Provider Management
        </h1>

        {/* Provider Dropdown */}
        <div
          className={`flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer ${
            activeParentMenu === "Provider" ? "text-[#FF8000]" : "text-white"
          }`}
          onClick={toggleProvider}
        >
          <div className="flex items-center">
            <Icon icon={userKeyIcon} className="mr-4 h-6 w-6" />
            Provider
          </div>
          {isProviderOpen ? (
            <MdKeyboardArrowDown className="h-6 w-6" />
          ) : (
            <MdKeyboardArrowRight className="h-6 w-6" />
          )}
        </div>
        {isProviderOpen && (
          <div className="ml-8">
            <Link
              to="/ProviderList"
              className={`py-2 text-sm cursor-pointer ${
                selectedMenu === "List of Provider"
                  ? "text-[#FF8000]"
                  : "text-white"
              }`}
              onClick={() => handleMenuClick("List of Provider")}
            >
              List of Provider
            </Link>
            <div
              className={`py-2 text-sm cursor-pointer ${
                selectedMenu === "Certified Provider"
                  ? "text-[#FF8000]"
                  : "text-white"
              }`}
              onClick={() => handleMenuClick("Certified Provider")}
            >
              Certified Provider
            </div>
            <div
              className={`py-2 text-sm cursor-pointer ${
                selectedMenu === "Featured Provider"
                  ? "text-[#FF8000]"
                  : "text-white"
              }`}
              onClick={() => handleMenuClick("Featured Provider")}
            >
              Featured Provider
            </div>
            <Link
              to="/NewProvider"
              className={`py-2 text-sm cursor-pointer ${
                selectedMenu === "Add New Provider"
                  ? "text-[#FF8000]"
                  : "text-white"
              }`}
              onClick={() => handleMenuClick("Add New Provider")}
            >
              Add New Provider
            </Link>
          </div>
        )}

        {/* Seeker Management */}
        <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
          Seeker Management
        </h1>

        {/* Seeker Dropdown */}
        <div
          className={`flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer ${
            activeParentMenu === "Seeker" ? "text-[#FF8000]" : "text-white"
          }`}
          onClick={toggleSeeker}
        >
          <div className="flex items-center">
            <Icon icon={accountHelpIcon} className="mr-4 h-6 w-6" />
            Seeker
          </div>
          {isSeekerOpen ? (
            <MdKeyboardArrowDown className="h-6 w-6" />
          ) : (
            <MdKeyboardArrowRight className="h-6 w-6" />
          )}
        </div>
        {isSeekerOpen && (
          <div className="ml-8">
            <Link
              to="/SeekerList"
              className={`py-2 text-sm cursor-pointer ${
                selectedMenu === "List of Seeker"
                  ? "text-[#FF8000]"
                  : "text-white"
              }`}
              onClick={() => handleMenuClick("List of Seeker")}
            >
              List of Seeker
            </Link>
            <br />
            <Link
              to="/NewSeeker"
              className={`py-2 text-sm cursor-pointer ${
                selectedMenu === "Add New Seeker"
                  ? "text-[#FF8000]"
                  : "text-white"
              }`}
              onClick={() => handleMenuClick("Add New Seeker")}
            >
              Add New Seeker
            </Link>
          </div>
        )}

        {/* Categories Dropdown */}
        <div
          className={`flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer ${
            activeParentMenu === "Categories" ? "text-[#FF8000]" : "text-white"
          }`}
          onClick={toggleCategories}
        >
          <div className="flex items-center">
            <FaShapes className="mr-4 h-5 w-5" />
            Categories
          </div>
          {isCategoriesOpen ? (
            <MdKeyboardArrowDown className="h-6 w-6" />
          ) : (
            <MdKeyboardArrowRight className="h-6 w-6" />
          )}
        </div>
        {isCategoriesOpen && (
          <div className="ml-8">
            <Link
              to="/CategorySetup"
              className={`py-2 text-sm cursor-pointer ${
                selectedMenu === "Category Setup"
                  ? "text-[#FF8000]"
                  : "text-white"
              }`}
              onClick={() => handleMenuClick("Category Setup")}
            >
              Category Setup
            </Link>
            <br />
            <Link
              to="/SubCategorySetup"
              className={`py-2 text-sm cursor-pointer ${
                selectedMenu === "Sub-Category Setup"
                  ? "text-[#FF8000]"
                  : "text-white"
              }`}
              onClick={() => handleMenuClick("Sub-Category Setup")}
            >
              Sub-Category Setup
            </Link>
          </div>
        )}

        {/* Promotional Banners */}
        <Link
          to="/PromoBanners"
          className={`flex items-center py-2 text-base hover:bg-[#004E89] cursor-pointer ${
            selectedMenu === "Promotional Banners"
              ? "text-[#FF8000]"
              : "text-white"
          }`}
          onClick={() => handleMenuClick("Promotional Banners")}
        >
          <RiFlag2Fill className="mr-4 h-5 w-5" />
          Promotional Banners
        </Link>

        {/* Send Notifications */}
        <Link
          to="/Notifications"
          className={`flex items-center py-2 text-base hover:bg-[#004E89] cursor-pointer ${
            selectedMenu === "Send Notifications"
              ? "text-[#FF8000]"
              : "text-white"
          }`}
          onClick={() => handleMenuClick("Send Notifications")}
        >
          <IoMdNotifications className="mr-4 h-6 w-6" />
          Send Notifications
        </Link>

        {/* Subscription Packages Dropdown */}
        <div
          className={`flex items-center justify-between py-2 text-sm hover:bg-[#004E89] cursor-pointer ${
            activeParentMenu === "Subscription Packages"
              ? "text-[#FF8000]"
              : "text-white"
          }`}
          onClick={ToggleSubscriptionPackages}
        >
          <div className="flex items-center">
            <img
              src={announcement}
              alt="announcement"
              className="mr-4 h-5 w-5"
            />
            Subscription Packages
          </div>
          {isSubscriptionPackagesOpen ? (
            <MdKeyboardArrowDown className="h-6 w-6" />
          ) : (
            <MdKeyboardArrowRight className="h-6 w-6" />
          )}
        </div>
        {isSubscriptionPackagesOpen && (
          <div className="ml-8">
            <Link
              to="/SubscriptionPackageList"
              className={`py-2 text-sm cursor-pointer ${
                selectedMenu === "Subscription Package List"
                  ? "text-[#FF8000]"
                  : "text-white"
              }`}
              onClick={() => handleMenuClick("Subscription Package List")}
            >
              Subscription Package List
            </Link>
          </div>
        )}

        {/* Language Setup */}
        <Link
          to="/Language"
          className={`flex items-center py-2 mb-6 text-base hover:bg-[#004E89] cursor-pointer ${
            selectedMenu === "Language Setup" ? "text-[#FF8000]" : "text-white"
          }`}
          onClick={() => handleMenuClick("Language Setup")}
        >
          <img src={language} alt="language" className="mr-4 h-4 w-6" />
          Language Setup
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
