

import React from "react";
import Sidebar from "./Sidebar";
import PromoBanners from "../PromotionalBanners/PromoBanners";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 space-y-6 md:space-y-0  ">
      <div className="md:w-1/5 w-full">
        <Sidebar />
      </div>
      <div className="md:w-4/5 w-full">
        <Dashboard />
        <PromoBanners />
      </div>
    </div>
  );
};

export default Home;
