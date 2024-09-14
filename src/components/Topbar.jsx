import { FaSearch, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../Assets/manImg2.jpg'

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white w-full flex flex-col-reverse min-[490px]:flex-row gap-4 justify-center items-center p-4 shadow">
      <div className="flex-grow flex justify-between md:justify-center">
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 w-full min-[490px]:w-1/2 min-w-[120px]">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-2 outline-none w-full"
          />
          <FaSearch className="text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 bg-gray-200 px-1 rounded-md">
          <FaGlobe />
          <select className="bg-transparent p-2 outline-none" defaultValue="EN">
            <option value=""disabled selected>EN</option>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>

        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer w-10 h-10 rounded-full bg-gray-300"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to='settings'>Settings</Link>
                  
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
    </header>
  );
};

export default Topbar;
