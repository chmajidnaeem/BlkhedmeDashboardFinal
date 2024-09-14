// import React, { useState } from "react";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { Icon } from "@iconify/react";
// import userKeyIcon from "@iconify-icons/mdi/user-key";
// import accountHelpIcon from "@iconify-icons/mdi/account-help";
// import img from "../Assets/img.png";
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

//responsive sidebar
// import React, { useState } from "react";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { Icon } from "@iconify/react";
// import userKeyIcon from "@iconify-icons/mdi/user-key";
// import accountHelpIcon from "@iconify-icons/mdi/account-help";
// import { FaShapes } from "react-icons/fa6";
// import { Bs6CircleFill } from "react-icons/bs";
// import {
//   MdKeyboardArrowRight,
//   MdKeyboardArrowDown,
//   MdMenu,
//   MdClose,
// } from "react-icons/md";
// import { Link } from "react-router-dom";
// import img from "../Assets/img.png";
// import { RiFlag2Fill } from "react-icons/ri";
// import { IoMdNotifications } from "react-icons/io";
// import announcement from "../Assets/announcement.png";
// import language from "../Assets/language.png";

// const Sidebar = () => {
//   // State to track which dropdowns are open
//   const [isProviderOpen, setIsProviderOpen] = useState(false);
//   const [isSeekerOpen, setIsSeekerOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const [isSubscriptionPackagesOpen, setisSubscriptionPackagesOpen] =
//     useState(false);

//   // State to track the sidebar visibility in mobile view
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

//   // Function to toggle the sidebar in mobile view
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="">
//       <div className="md:hidden bg-[#2B4DC9]  p-4 flex justify-between items-center">
//         <button onClick={toggleSidebar}>
//           {isSidebarOpen ? (
//             <MdClose className="text-white h-8 w-8" />
//           ) : (
//             <MdMenu className="text-white h-8 w-8" />
//           )}
//         </button>
//         <h1 className="font-Montserrat font-semibold text-2xl text-white">
//           Blkhedme
//         </h1>
//       </div>

//       {/* Sidebar (hidden on mobile unless open) */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[270px] bg-[#2B4DC9] p-5 z-50 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block`}
//       >
//         <div className="flex flex-col">
//           <h1 className="font-Montserrat font-semibold text-2xl text-white">
//             Blkhedme
//           </h1>
//         </div>
//         {/* nav items */}
//         <nav className="mt-10 pb-14 font-Poppins">
//           {/* Dashboard */}
//           <Link
//             to="/Dashboard"
//             className={`flex items-center py-2 text-lg hover:bg-[#004E89] text-white cursor-pointer ${
//               selectedMenu === "Dashboard" ? "text-[#FF8000]" : ""
//             }`}
//             onClick={() => handleMenuClick("Dashboard")}
//           >
//             <TbLayoutDashboardFilled className="mr-4 h-6 w-6" />
//             Dashboard
//           </Link>

//           {/* Provider Management */}
//           <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//             Provider Management
//           </h1>
//           {/* Onboarding Requests */}
//           <Link
//             to="/OnboardRequests"
//             className={`flex items-center py-2 text-sm hover:bg-[#004E89] text-white cursor-pointer ${
//               selectedMenu === "Onboarding Requests" ? "text-[#FF8000]" : ""
//             }`}
//             onClick={() => handleMenuClick("Onboarding Requests")}
//           >
//             <img src={img} alt="onboard" className="mr-4  h-6 w-6" />
//             Onboarding Requests
//             <Bs6CircleFill className="ml-2 h-5 w-5 text-[#FF8000]" />
//           </Link>
//           {/* Provider Dropdown */}
//           <div
//             className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
//             onClick={toggleProvider}
//           >
//             <div className="flex items-center">
//               <Icon icon={userKeyIcon} className="mr-4 h-6 w-6" />
//               Provider
//             </div>
//             {isProviderOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isProviderOpen && (
//             <div className="flex flex-col ml-8">
//               <Link
//                 to="/ProviderList"
//                 className={`py-1 text-sm text-white cursor-pointer ${
//                   selectedMenu === "List of Provider" ? "text-[#FF8000]" : ""
//                 }`}
//                 onClick={() => handleMenuClick("List of Provider")}
//               >
//                 List of Provider
//               </Link>
//               <Link
//                 to="/NewProvider"
//                 className="py-1 text-sm text-white cursor-pointer "
//               >
//                 Certified Provider
//               </Link>
//               <Link
//                 to="/NewProvider"
//                 className="py-1 text-sm text-white cursor-pointer "
//               >
//                 Featured Provider
//               </Link>
//               <Link
//                 to="/NewProvider"
//                 className={`py-1 text-sm text-white cursor-pointer ${
//                   selectedMenu === "Add New Provider" ? "text-[#FF8000]" : ""
//                 }`}
//                 onClick={() => handleMenuClick("Add New Provider")}
//               >
//                 Add New Provider
//               </Link>
//             </div>
//           )}

//           {/* Seeker Management */}
//           <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//             Seeker Management
//           </h1>

//           {/* Seeker Dropdown */}
//           <div
//             className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
//             onClick={toggleSeeker}
//           >
//             <div className="flex items-center">
//               <Icon icon={accountHelpIcon} className="mr-4 h-6 w-6" />
//               Seeker
//             </div>
//             {isSeekerOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isSeekerOpen && (
//             <div className="flex flex-col ml-8">
//               <Link
//                 to="/SeekerList"
//                 className={`py-1 text-sm text-white cursor-pointer ${
//                   selectedMenu === "List of Seeker" ? "text-[#FF8000]" : ""
//                 }`}
//                 onClick={() => handleMenuClick("List of Seeker")}
//               >
//                 List of Seeker
//               </Link>
//               <Link
//                 to="/NewSeeker"
//                 className={`py-1 text-sm text-white cursor-pointer ${
//                   selectedMenu === "Add New Seeker" ? "text-[#FF8000]" : ""
//                 }`}
//                 onClick={() => handleMenuClick("Add New Seeker")}
//               >
//                 Add New Seeker
//               </Link>
//             </div>
//           )}

//           {/* Categories Dropdown */}
//           <div
//             className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
//             onClick={toggleCategories}
//           >
//             <div className="flex items-center">
//               <FaShapes className="mr-4 h-5 w-5" />
//               Categories
//             </div>
//             {isCategoriesOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isCategoriesOpen && (
//             <div className="flex flex-col ml-8">
//               <Link
//                 to="/CategorySetup"
//                 className={`py-1 text-sm text-white cursor-pointer ${
//                   selectedMenu === "Category Setup" ? "text-[#FF8000]" : ""
//                 }`}
//                 onClick={() => handleMenuClick("Category Setup")}
//               >
//                 Category Setup
//               </Link>
//               <Link
//                 to="/CategoryList"
//                 className={`py-1 text-sm text-white cursor-pointer ${
//                   selectedMenu === "Category List" ? "text-[#FF8000]" : ""
//                 }`}
//                 onClick={() => handleMenuClick("Category List")}
//               >
//                 Sub-Category Setup
//               </Link>
//             </div>
//           )}
//           {/* Promotional Banners */}
//           <Link
//             to="/PromoBanners"
//             className={`flex items-center py-2 text-base hover:bg-[#004E89] text-white cursor-pointer ${
//               selectedMenu === "Promotional Banners" ? "text-[#FF8000]" : ""
//             }`}
//             onClick={() => handleMenuClick("Promotional Banners")}
//           >
//             <RiFlag2Fill className="mr-4 h-5 w-5" />
//             Promotional Banners
//           </Link>
//           {/* Send Notifications */}
//           <Link
//             to="/Notifications"
//             className={`flex items-center py-2 text-base hover:bg-[#004E89] text-white cursor-pointer ${
//               selectedMenu === "Send Notifications" ? "text-[#FF8000]" : ""
//             }`}
//             onClick={() => handleMenuClick("Send Notifications")}
//           >
//             <IoMdNotifications className="mr-4 h-6 w-6" />
//             Send Notifications
//           </Link>

//           {/* Subscription Packages Dropdown */}
//           <div
//             className="flex items-center justify-between py-2 text-sm hover:bg-[#004E89] text-white cursor-pointer"
//             onClick={ToggleSubscriptionPackages}
//           >
//             <div className="flex items-center">
//               <img
//                 src={announcement}
//                 alt="announcement"
//                 className="mr-4 h-5 w-5"
//               />
//               Subscription Packages
//             </div>
//             {isSubscriptionPackagesOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isSubscriptionPackagesOpen && (
//             <div className="ml-8">
//               <Link
//                 to="/SubscriptionPackageList"
//                 className={`py-2 text-sm text-white cursor-pointer ${
//                   selectedMenu === "Subscription Package List"
//                     ? "text-[#FF8000]"
//                     : ""
//                 }`}
//                 onClick={() => handleMenuClick("Subscription Package List")}
//               >
//                 Subscription Package List
//               </Link>
//             </div>
//           )}

//           {/* Language Setup */}
//           <Link
//             to="/Language"
//             className={`flex items-center py-2 mb-6 text-base hover:bg-[#004E89] text-white cursor-pointer ${
//               selectedMenu === "Language Setup" ? "text-[#FF8000]" : ""
//             }`}
//             onClick={() => handleMenuClick("Language Setup")}
//           >
//             <img src={language} alt="language" className="mr-4 h-4 w-6" />
//             Language Setup
//           </Link>
//         </nav>
//       </div>

//       {/* Overlay for mobile screens when sidebar is open */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

//fixed sidebar
import React, { useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Icon } from "@iconify/react";
import userKeyIcon from "@iconify-icons/mdi/user-key";
import accountHelpIcon from "@iconify-icons/mdi/account-help";
import { FaShapes } from "react-icons/fa6";
import { Bs6CircleFill } from "react-icons/bs";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { RiFlag2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import announcement from "../Assets/announcement.png";
import announcement2 from "../Assets/announcement2.png";
import language from "../Assets/language.png";
import language2 from "../Assets/language2.png";
import img from "../Assets/img.png";
import img2 from "../Assets/img2.png";

const Sidebar = () => {
  // State to track which dropdowns are open
  const [isProviderOpen, setIsProviderOpen] = useState(false);
  const [isSeekerOpen, setIsSeekerOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSubscriptionPackagesOpen, setisSubscriptionPackagesOpen] =
    useState(false);

  // State to track the sidebar visibility in mobile view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State to track the currently selected menu item
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  // Toggle dropdowns
  const toggleProvider = () => setIsProviderOpen(!isProviderOpen);
  const toggleSeeker = () => setIsSeekerOpen(!isSeekerOpen);
  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
  const ToggleSubscriptionPackages = () =>
    setisSubscriptionPackagesOpen(!isSubscriptionPackagesOpen);

  // Function to handle menu item click
  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem); // Update the selected menu item
  };

  // Function to toggle the sidebar in mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
      <div className="md:hidden bg-[#2B4DC9]  p-4 flex justify-between items-center">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <MdClose className="text-white h-8 w-8" />
          ) : (
            <MdMenu className="text-white h-8 w-8" />
          )}
        </button>
        <h1 className="font-Montserrat font-semibold text-2xl text-white">
          Blkhedme
        </h1>
      </div>

      {/* Sidebar (hidden on mobile unless open) */}
      <div
        className={`fixed top-0 left-0 h-full w-[270px] bg-[#2B4DC9] p-5 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:block md:fixed md:h-[100vh]`}
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="font-Montserrat font-semibold text-2xl text-white">
              Blkhedme
            </h1>
          </div>
          {/* Cross button inside the sidebar on mobile */}
          <div className="md:hidden flex justify-end">
            <button onClick={toggleSidebar}>
              <MdClose className="text-white h-8 w-8" />
            </button>
          </div>
        </div>
        {/* nav items */}
        <nav className="mt-10 pb-14 font-Poppins">
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
          {/* Onboarding Requests */}
          <Link
            to="/OnboardRequests"
            className={`flex items-center py-2 text-sm hover:bg-[#004E89] text-white cursor-pointer ${
              selectedMenu === "Onboarding Requests" ? "text-[#FF8000]" : ""
            }`}
            onClick={() => handleMenuClick("Onboarding Requests")}
          >
            <img src={img} alt="onboard" className="mr-4  h-6 w-6" />
            Onboarding Requests
            <Bs6CircleFill className="ml-2 h-5 w-5 text-[#FF8000]" />
          </Link>
          {/* Provider Dropdown */}
          <div
            className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
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
            <div className="flex flex-col ml-8">
              <Link
                to="/ProviderList"
                className={`py-1 text-sm text-white cursor-pointer ${
                  selectedMenu === "List of Provider" ? "text-[#FF8000]" : ""
                }`}
                onClick={() => handleMenuClick("List of Provider")}
              >
                List of Provider
              </Link>
              <Link
                to="/NewProvider"
                className="py-1 text-sm text-white cursor-pointer "
              >
                Certified Provider
              </Link>
              <Link
                to="/NewProvider"
                className="py-1 text-sm text-white cursor-pointer "
              >
                Featured Provider
              </Link>
              <Link
                to="/NewProvider"
                className={`py-1 text-sm text-white cursor-pointer ${
                  selectedMenu === "Add New Provider" ? "text-[#FF8000]" : ""
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
            className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
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
            <div className="flex flex-col ml-8">
              <Link
                to="/SeekerList"
                className={`py-1 text-sm text-white cursor-pointer ${
                  selectedMenu === "List of Seeker" ? "text-[#FF8000]" : ""
                }`}
                onClick={() => handleMenuClick("List of Seeker")}
              >
                List of Seeker
              </Link>
              <Link
                to="/NewSeeker"
                className={`py-1 text-sm text-white cursor-pointer ${
                  selectedMenu === "Add New Seeker" ? "text-[#FF8000]" : ""
                }`}
                onClick={() => handleMenuClick("Add New Seeker")}
              >
                Add New Seeker
              </Link>
            </div>
          )}

          {/* Categories Dropdown */}
          <div
            className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] text-white cursor-pointer"
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
            <div className="flex flex-col ml-8">
              <Link
                to="/CategorySetup"
                className={`py-1 text-sm text-white cursor-pointer ${
                  selectedMenu === "Category Setup" ? "text-[#FF8000]" : ""
                }`}
                onClick={() => handleMenuClick("Category Setup")}
              >
                Category Setup
              </Link>
              <Link
                to="/CategoryList"
                className={`py-1 text-sm text-white cursor-pointer ${
                  selectedMenu === "Category List" ? "text-[#FF8000]" : ""
                }`}
                onClick={() => handleMenuClick("Category List")}
              >
                Sub-Category Setup
              </Link>
            </div>
          )}
          {/* Promotional Banners */}
          <Link
            to="/PromoBanners"
            className={`flex items-center py-2 text-base hover:bg-[#004E89] text-white cursor-pointer ${
              selectedMenu === "Promotional Banners" ? "text-[#FF8000]" : ""
            }`}
            onClick={() => handleMenuClick("Promotional Banners")}
          >
            <RiFlag2Fill className="mr-4 h-5 w-5" />
            Promotional Banners
          </Link>
          {/* Send Notifications */}
          <Link
            to="/Notifications"
            className={`flex items-center py-2 text-base hover:bg-[#004E89] text-white cursor-pointer ${
              selectedMenu === "Send Notifications" ? "text-[#FF8000]" : ""
            }`}
            onClick={() => handleMenuClick("Send Notifications")}
          >
            <IoMdNotifications className="mr-4 h-6 w-6" />
            Send Notifications
          </Link>

          {/* Subscription Packages Dropdown */}
          <div
            className="flex items-center justify-between py-2 text-sm hover:bg-[#004E89] text-white cursor-pointer"
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
                className={`py-2 text-sm text-white cursor-pointer ${
                  selectedMenu === "Subscription Package List"
                    ? "text-[#FF8000]"
                    : ""
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
            className={`flex items-center py-2 mb-6 text-base hover:bg-[#004E89] text-white cursor-pointer ${
              selectedMenu === "Language Setup" ? "text-[#FF8000]" : ""
            }`}
            onClick={() => handleMenuClick("Language Setup")}
          >
            <img src={language} alt="language" className="mr-4 h-4 w-6" />
            Language Setup
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile screens when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { Icon } from "@iconify/react";
// import userKeyIcon from "@iconify-icons/mdi/user-key";
// import accountHelpIcon from "@iconify-icons/mdi/account-help";
// import { FaShapes } from "react-icons/fa6";
// import { Bs6CircleFill } from "react-icons/bs";
// import {
//   MdKeyboardArrowRight,
//   MdKeyboardArrowDown,
//   MdMenu,
//   MdClose,
// } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { RiFlag2Fill } from "react-icons/ri";
// import { IoMdNotifications } from "react-icons/io";
// import announcement from "../Assets/announcement.png";
// import announcement2 from "../Assets/announcement2.png";
// import language from "../Assets/language.png";
// import language2 from "../Assets/language2.png";
// import img from "../Assets/img.png";
// import img2 from "../Assets/img2.png";

// const Sidebar = () => {
//   const [isProviderOpen, setIsProviderOpen] = useState(false);
//   const [isSeekerOpen, setIsSeekerOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const [isSubscriptionPackagesOpen, setIsSubscriptionPackagesOpen] =
//     useState(false);

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const [selectedMenu, setSelectedMenu] = useState("Dashboard");

//   const [announcementImg, setAnnouncementImg] = useState(announcement);
//   const [languageImg, setLanguageImg] = useState(language);
//   const [onboardImg, setOnboardImg] = useState(img);

//   const toggleProvider = () => setIsProviderOpen(!isProviderOpen);
//   const toggleSeeker = () => setIsSeekerOpen(!isSeekerOpen);
//   const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
//   const toggleSubscriptionPackages = () =>
//     setIsSubscriptionPackagesOpen(!isSubscriptionPackagesOpen);

//   const handleMenuClick = (menuItem) => {
//     setSelectedMenu(menuItem);

//     if (menuItem === "Promotional Banners") {
//       setAnnouncementImg(announcement2);
//     } else if (menuItem === "Language Setup") {
//       setLanguageImg(language2);
//     } else if (menuItem === "Onboarding Requests") {
//       setOnboardImg(img2);
//     } else {
//       setAnnouncementImg(announcement);
//       setLanguageImg(language);
//       setOnboardImg(img);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       <div className="md:hidden bg-[#2B4DC9] p-4 flex justify-between items-center">
//         <button onClick={toggleSidebar}>
//           {isSidebarOpen ? (
//             <MdClose className="text-white h-8 w-8" />
//           ) : (
//             <MdMenu className="text-white h-8 w-8" />
//           )}
//         </button>
//         <h1 className="font-Montserrat font-semibold text-2xl text-white">
//           Blkhedme
//         </h1>
//       </div>

//       <div
//         className={`fixed top-0 left-0 h-full w-[270px] bg-[#2B4DC9] p-5 z-50 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out md:translate-x-0 md:block md:fixed md:h-[100vh]`}
//       >
//         <div className="flex justify-between">
//           <div className="flex flex-col">
//             <h1 className="font-Montserrat font-semibold text-2xl text-white">
//               Blkhedme
//             </h1>
//           </div>
//           <div className="md:hidden flex justify-end">
//             <button onClick={toggleSidebar}>
//               <MdClose className="text-white h-8 w-8" />
//             </button>
//           </div>
//         </div>

//         <nav className="mt-10 pb-14 font-Poppins">
//           <Link
//             to="/Dashboard"
//             className={`flex items-center py-2 text-lg hover:bg-[#004E89] cursor-pointer ${
//               selectedMenu === "Dashboard" ? "text-[#FF8000]" : "text-white"
//             }`}
//             onClick={() => handleMenuClick("Dashboard")}
//           >
//             <TbLayoutDashboardFilled className="mr-4 h-6 w-6" />
//             Dashboard
//           </Link>

//           <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//             Provider Management
//           </h1>

//           <Link
//             to="/OnboardRequests"
//             className={`flex items-center py-2 text-sm hover:bg-[#004E89] cursor-pointer ${
//               selectedMenu === "Onboarding Requests"
//                 ? "text-[#FF8000]"
//                 : "text-white"
//             }`}
//             onClick={() => handleMenuClick("Onboarding Requests")}
//           >
//             <img src={onboardImg} alt="onboard" className="mr-4 h-6 w-6" />
//             Onboarding Requests
//             <Bs6CircleFill className="ml-2 h-5 w-5 text-[#FF8000]" />
//           </Link>

//           <div
//             className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer"
//             onClick={toggleProvider}
//           >
//             <div
//               className={`flex items-center ${
//                 isProviderOpen ? "text-[#FF8000]" : "text-white"
//               }`}
//             >
//               <Icon
//                 icon={userKeyIcon}
//                 className={`mr-4 h-6 w-6 ${
//                   isProviderOpen ? "text-[#FF8000]" : "text-white"
//                 }`}
//               />
//               Provider
//             </div>
//             {isProviderOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isProviderOpen && (
//             <div className="flex flex-col ml-8">
//               <Link
//                 to="/ProviderList"
//                 className={`py-1 text-sm cursor-pointer ${
//                   selectedMenu === "List of Provider"
//                     ? "text-[#FF8000]"
//                     : "text-white"
//                 }`}
//                 onClick={() => handleMenuClick("List of Provider")}
//               >
//                 List of Provider
//               </Link>
//               <Link to="/NewProvider" className="py-1 text-sm cursor-pointer">
//                 Certified Provider
//               </Link>
//               <Link to="/NewProvider" className="py-1 text-sm cursor-pointer">
//                 Featured Provider
//               </Link>
//               <Link
//                 to="/NewProvider"
//                 className={`py-1 text-sm cursor-pointer ${
//                   selectedMenu === "Add New Provider"
//                     ? "text-[#FF8000]"
//                     : "text-white"
//                 }`}
//                 onClick={() => handleMenuClick("Add New Provider")}
//               >
//                 Add New Provider
//               </Link>
//             </div>
//           )}

//           <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//             Seeker Management
//           </h1>

//           <div
//             className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer"
//             onClick={toggleSeeker}
//           >
//             <div
//               className={`flex items-center ${
//                 isSeekerOpen ? "text-[#FF8000]" : "text-white"
//               }`}
//             >
//               <Icon
//                 icon={accountHelpIcon}
//                 className={`mr-4 h-6 w-6 ${
//                   isSeekerOpen ? "text-[#FF8000]" : "text-white"
//                 }`}
//               />
//               Seeker
//             </div>
//             {isSeekerOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isSeekerOpen && (
//             <div className="flex flex-col ml-8">
//               <Link
//                 to="/SeekerList"
//                 className={`py-1 text-sm cursor-pointer ${
//                   selectedMenu === "List of Seeker"
//                     ? "text-[#FF8000]"
//                     : "text-white"
//                 }`}
//                 onClick={() => handleMenuClick("List of Seeker")}
//               >
//                 List of Seeker
//               </Link>
//               <Link to="/NewSeeker" className="py-1 text-sm cursor-pointer">
//                 New Seeker
//               </Link>
//             </div>
//           )}

// <div
//   className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer"
//   onClick={toggleCategories}
// >
//   <div
//     className={`flex items-center ${
//       isCategoriesOpen ? "text-[#FF8000]" : "text-white"
//     }`}
//   >
//     <FaShapes
//       className={`mr-4 h-6 w-6 ${
//         isCategoriesOpen ? "text-[#FF8000]" : "text-white"
//       }`}
//     />
//     Categories
//   </div>
//   {isCategoriesOpen ? (
//     <MdKeyboardArrowDown className="h-6 w-6" />
//   ) : (
//     <MdKeyboardArrowRight className="h-6 w-6" />
//   )}
// </div>
// {isCategoriesOpen && (
//   <div className="flex flex-col ml-8">
//     <Link
//       to="/CategoryList"
//       className={`py-1 text-sm cursor-pointer ${
//         isCategoriesOpen ? "text-white" : "text-[#FF8000]"
//       }`}
//     >
//       Category Setup
//     </Link>
//     <Link to="/NewCategory" className="py-1 text-sm cursor-pointer">
//       Sub-Category Setup
//     </Link>
//   </div>
// )}

//           <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//             Subscription Packages
//           </h1>

//           <div
//             className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer"
//             onClick={toggleSubscriptionPackages}
//           >
//             <div
//               className={`flex items-center ${
//                 isSubscriptionPackagesOpen ? "text-[#FF8000]" : "text-white"
//               }`}
//             >
//               <Icon
//                 icon={userKeyIcon}
//                 className={`mr-4 h-6 w-6 ${
//                   isSubscriptionPackagesOpen ? "text-[#FF8000]" : "text-white"
//                 }`}
//               />
//               Subscription Packages
//             </div>
//             {isSubscriptionPackagesOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isSubscriptionPackagesOpen && (
//             <div className="flex flex-col ml-8">
//               <Link
//                 to="/SubscriptionList"
//                 className="py-1 text-sm cursor-pointer"
//               >
//                 Subscription List
//               </Link>
//               <Link
//                 to="/NewSubscription"
//                 className="py-1 text-sm cursor-pointer"
//               >
//                 Add New Subscription
//               </Link>
//             </div>
//           )}

//           <Link
//             to="/PromotionalBanners"
//             className={`flex items-center py-2 text-sm hover:bg-[#004E89] cursor-pointer ${
//               selectedMenu === "Promotional Banners"
//                 ? "text-[#FF8000]"
//                 : "text-white"
//             }`}
//             onClick={() => handleMenuClick("Promotional Banners")}
//           >
//             <img
//               src={announcementImg}
//               alt="announcement"
//               className="mr-4 h-6 w-6"
//             />
//             Promotional Banners
//           </Link>

//           <Link
//             to="/LanguageSetup"
//             className={`flex items-center py-2 text-sm hover:bg-[#004E89] cursor-pointer ${
//               selectedMenu === "Language Setup"
//                 ? "text-[#FF8000]"
//                 : "text-white"
//             }`}
//             onClick={() => handleMenuClick("Language Setup")}
//           >
//             <img src={languageImg} alt="language" className="mr-4 h-6 w-6" />
//             Language Setup
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { Icon } from "@iconify/react";
// import userKeyIcon from "@iconify-icons/mdi/user-key";
// import accountHelpIcon from "@iconify-icons/mdi/account-help";
// import { FaShapes } from "react-icons/fa6";
// import { Bs6CircleFill } from "react-icons/bs";
// import {
//   MdKeyboardArrowRight,
//   MdKeyboardArrowDown,
//   MdMenu,
//   MdClose,
// } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { RiFlag2Fill } from "react-icons/ri";
// import { IoMdNotifications } from "react-icons/io";
// import announcement from "../Assets/announcement.png";
// import announcement2 from "../Assets/announcement2.png";
// import language from "../Assets/language.png";
// import language2 from "../Assets/language2.png";
// import img from "../Assets/img.png";
// import img2 from "../Assets/img2.png";

// const Sidebar = () => {
//   // State to manage open/close state of dropdowns
//   const [isProviderOpen, setIsProviderOpen] = useState(false);
//   const [isSeekerOpen, setIsSeekerOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const [isSubscriptionPackagesOpen, setIsSubscriptionPackagesOpen] =
//     useState(false);

//   // State to manage the sidebar visibility on mobile
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // State to manage the selected menu item and its associated images
//   const [selectedMenu, setSelectedMenu] = useState("Dashboard");
//   const [announcementImg, setAnnouncementImg] = useState(announcement);
//   const [languageImg, setLanguageImg] = useState(language);
//   const [onboardImg, setOnboardImg] = useState(img);

//   // Toggle functions for dropdowns
//   const toggleProvider = () => setIsProviderOpen(!isProviderOpen);
//   const toggleSeeker = () => setIsSeekerOpen(!isSeekerOpen);
//   const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);
//   const toggleSubscriptionPackages = () =>
//     setIsSubscriptionPackagesOpen(!isSubscriptionPackagesOpen);

//   // Handle menu item click
//   const handleMenuClick = (menuItem) => {
//     setSelectedMenu(menuItem);

//     // Change images based on the selected menu item
//     if (menuItem === "Promotional Banners") {
//       setAnnouncementImg(announcement2);
//     } else if (menuItem === "Language Setup") {
//       setLanguageImg(language2);
//     } else if (menuItem === "Onboarding Requests") {
//       setOnboardImg(img2);
//     } else {
//       setAnnouncementImg(announcement);
//       setLanguageImg(language);
//       setOnboardImg(img);
//     }
//   };

//   // Toggle sidebar visibility on mobile
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       {/* Mobile Sidebar Toggle Button */}
//       <div className="md:hidden bg-[#2B4DC9] p-4 flex justify-between items-center">
//         <button onClick={toggleSidebar}>
//           {isSidebarOpen ? (
//             <MdClose className="text-white h-8 w-8" />
//           ) : (
//             <MdMenu className="text-white h-8 w-8" />
//           )}
//         </button>
//         <h1 className="font-Montserrat font-semibold text-2xl text-white">
//           Blkhedme
//         </h1>
//       </div>

//       {/* Sidebar Menu */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[270px] bg-[#2B4DC9] p-5 z-50 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out md:translate-x-0 md:block md:fixed md:h-[100vh]`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex justify-between">
//           <div className="flex flex-col">
//             <h1 className="font-Montserrat font-semibold text-2xl text-white">
//               Blkhedme
//             </h1>
//           </div>
//           <div className="md:hidden flex justify-end">
//             <button onClick={toggleSidebar}>
//               <MdClose className="text-white h-8 w-8" />
//             </button>
//           </div>
//         </div>

//         {/* Sidebar Navigation */}
//         <nav className="mt-10 pb-14 font-Poppins">
//           {/* Dashboard Link */}
//           <Link
//             to="/Dashboard"
//             className={`flex items-center py-2 text-lg hover:bg-[#004E89] cursor-pointer ${
//               selectedMenu === "Dashboard" ? "text-[#FF8000]" : "text-white"
//             }`}
//             onClick={() => handleMenuClick("Dashboard")}
//           >
//             <TbLayoutDashboardFilled className="mr-4 h-6 w-6" />
//             Dashboard
//           </Link>

//           {/* Provider Management Section */}
//           <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//             Provider Management
//           </h1>

//           {/* Onboarding Requests Link */}
//           <Link
//             to="/OnboardRequests"
//             className={`flex items-center py-2 text-sm hover:bg-[#004E89] cursor-pointer ${
//               selectedMenu === "Onboarding Requests"
//                 ? "text-[#FF8000]"
//                 : "text-white"
//             }`}
//             onClick={() => handleMenuClick("Onboarding Requests")}
//           >
//             <img src={onboardImg} alt="onboard" className="mr-4 h-6 w-6" />
//             Onboarding Requests
//             <Bs6CircleFill className="ml-2 h-5 w-5 text-[#FF8000]" />
//           </Link>

//           {/* Provider Dropdown */}
//           <div
//             className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer"
//             onClick={toggleProvider}
//           >
//             <div
//               className={`flex items-center ${
//                 isProviderOpen ? "text-[#FF8000]" : "text-white"
//               }`}
//             >
//               <Icon
//                 icon={userKeyIcon}
//                 className={`mr-4 h-6 w-6 ${
//                   isProviderOpen ? "text-[#FF8000]" : "text-white"
//                 }`}
//               />
//               Provider
//             </div>
//             {isProviderOpen ? (
//               <MdKeyboardArrowDown
//                 className={`h-6 w-6  ${
//                   isProviderOpen ? "text-[#FF8000]" : "text-white"
//                 }`}
//               />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isProviderOpen && (
//             <div className="flex flex-col ml-8">
//               <Link
//                 to="/ProviderList"
//                 className={`py-1 text-sm cursor-pointer ${
//                   selectedMenu === "List of Provider"
//                     ? "text-[#FF8000]"
//                     : "text-white"
//                 }`}
//                 onClick={() => handleMenuClick("List of Provider")}
//               >
//                 List of Provider
//               </Link>
//               <Link
//                 to="/NewProvider"
//                 className="py-1 text-sm cursor-pointer text-white"
//               >
//                 Certified Provider
//               </Link>
//               <Link
//                 to="/NewProvider"
//                 className="py-1 text-sm cursor-pointer text-white"
//               >
//                 Featured Provider
//               </Link>
//               <Link
//                 to="/NewProvider"
//                 className={`py-1 text-sm cursor-pointer ${
//                   selectedMenu === "Add New Provider"
//                     ? "text-[#FF8000]"
//                     : "text-white"
//                 }`}
//                 onClick={() => handleMenuClick("Add New Provider")}
//               >
//                 Add New Provider
//               </Link>
//             </div>
//           )}

//           {/* Seeker Management Section */}
//           <h1 className="py-2 font-Poppins text-lg hover:bg-[#004E89] text-white">
//             Seeker Management
//           </h1>

//           {/* Seeker Dropdown */}
//           <div
//             className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer"
//             onClick={toggleSeeker}
//           >
//             <div
//               className={`flex items-center ${
//                 isSeekerOpen ? "text-[#FF8000]" : "text-white"
//               }`}
//             >
//               <Icon
//                 icon={accountHelpIcon}
//                 className={`mr-4 h-6 w-6 ${
//                   isSeekerOpen ? "text-[#FF8000]" : "text-white"
//                 }`}
//               />
//               Seeker
//             </div>
//             {isSeekerOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isSeekerOpen && (
//             <div className="flex flex-col ml-8">
//               <Link
//                 to="/SeekerList"
//                 className={`py-1 text-sm cursor-pointer ${
//                   selectedMenu === "List of Seeker"
//                     ? "text-[#FF8000]"
//                     : "text-white"
//                 }`}
//                 onClick={() => handleMenuClick("List of Seeker")}
//               >
//                 List of Seeker
//               </Link>
//               <Link
//                 to="/NewSeeker"
//                 className="py-1 text-sm cursor-pointer text-white"
//               >
//                 Add New Seeker
//               </Link>
//             </div>
//           )}

//           {/* Categories Section */}
//           <div
//             className="flex items-center justify-between py-2 text-base hover:bg-[#004E89] cursor-pointer"
//             onClick={toggleCategories}
//           >
//             <div
//               className={`flex items-center ${
//                 isCategoriesOpen ? "text-[#FF8000]" : "text-white"
//               }`}
//             >
//               <FaShapes
//                 className={`mr-4 h-6 w-6 ${
//                   isCategoriesOpen ? "text-[#FF8000]" : "text-white"
//                 }`}
//               />
//               Categories
//             </div>
//             {isCategoriesOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isCategoriesOpen && (
//             <div className="flex flex-col ml-8">
//               <Link
//                 to="/CategoryList"
//                 className={`py-1 text-sm cursor-pointer ${
//                   isCategoriesOpen ? "text-[#FF8000]" : "text-white"
//                 }`}
//               >
//                 Category Setup
//               </Link>
//               <Link
//                 to="/NewCategory"
//                 className={`py-1 text-sm cursor-pointer ${
//                   isCategoriesOpen ? "text-white" : "text-[#FF8000]"
//                 }`}
//               >
//                 Sub-Category Setup
//               </Link>
//             </div>
//           )}

//           {/* Promotional Banners */}
//           <Link
//             to="/PromoBanners"
//             className={`flex items-center py-2 text-base hover:bg-[#004E89] text-white cursor-pointer ${
//               selectedMenu === "Promotional Banners"
//                 ? "text-[#FF8000]"
//                 : "text-white"
//             }`}
//             onClick={() => handleMenuClick("Promotional Banners")}
//           >
//             <RiFlag2Fill className="mr-4 h-5 w-5" />
//             Promotional Banners
//           </Link>
//           {/* Send Notifications */}
//           <Link
//             to="/Notifications"
//             className={`flex items-center py-2 text-base hover:bg-[#004E89] text-white cursor-pointer ${
//               selectedMenu === "Send Notifications" ? "text-[#FF8000]" : ""
//             }`}
//             onClick={() => handleMenuClick("Send Notifications")}
//           >
//             <IoMdNotifications className="mr-4 h-6 w-6" />
//             Send Notifications
//           </Link>

//           {/* Subscription Packages Dropdown */}
//           <div
//             className="flex items-center justify-between py-2 text-sm hover:bg-[#004E89] text-white cursor-pointer"
//             onClick={toggleSubscriptionPackages}
//           >
//             <div className="flex items-center">
//               <img
//                 src={announcementImg}
//                 alt="announcementImg"
//                 className="mr-4 h-5 w-5"
//               />
//               Subscription Packages
//             </div>
//             {isSubscriptionPackagesOpen ? (
//               <MdKeyboardArrowDown className="h-6 w-6" />
//             ) : (
//               <MdKeyboardArrowRight className="h-6 w-6" />
//             )}
//           </div>
//           {isSubscriptionPackagesOpen && (
//             <div className="ml-8">
//               <Link
//                 to="/SubscriptionPackageList"
//                 className={`py-2 text-sm text-white cursor-pointer ${
//                   selectedMenu === "Subscription Package List"
//                     ? "text-[#FF8000]"
//                     : ""
//                 }`}
//                 onClick={() => handleMenuClick("Subscription Package List")}
//               >
//                 Subscription Package List
//               </Link>
//             </div>
//           )}

//           {/* Language Setup */}
//           <Link
//             to="/Language"
//             className={`flex items-center py-2 mb-6 text-base hover:bg-[#004E89] text-white cursor-pointer ${
//               selectedMenu === "Language Setup"
//                 ? "text-[#FF8000]"
//                 : "text-white"
//             }`}
//             onClick={() => handleMenuClick("Language Setup")}
//           >
//             <img src={languageImg} alt="LanguageImg" className="mr-4 h-4 w-6" />
//             Language Setup
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
