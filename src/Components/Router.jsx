import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import PromoBanners from "../PromotionalBanners/PromoBanners";
import Dashboard from "./Dashboard";
import OnboardRequests from "../OnboardingRequest/OnboardRequests";
import SubscriptionPackageList from "../Subscription/SubscriptionPackageList";
import Language from "./Language";
import Notifications from "./Notifications";
import ProviderList from "../Provider/ProviderList";
import NewProvider from "../Provider/NewProvider";
import AddCategory from "../Categories/AddCategory";
import SubCategory from "../Categories/SubCategory";
import SubCategorySetup from "../Categories/SubCategorySetup";
import CategorySetup from "../Categories/CategorySetup";
import SeekerList from "../Seeker/SeekerList";
import NewSeeker from "../Seeker/NewSeeker";
import SeekerProfile from "../Seeker/SeekerProfile";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col md:flex-row bg-gray-200 space-y-6 md:space-y-0  ">
          <div className="md:w-1/5 w-full">
            <Sidebar />
          </div>
          <div className="md:w-4/5 w-full mx-4">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/PromoBanners" element={<PromoBanners />} />
              <Route path="/OnboardRequests" element={<OnboardRequests />} />
              <Route path="/PromoBanners" element={<PromoBanners />} />
              <Route
                path="/SubscriptionPackageList"
                element={<SubscriptionPackageList />}
              />
              <Route path="/Language" element={<Language />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/NewProvider" element={<NewProvider />} />
              <Route path="/ProviderList" element={<ProviderList />} />
              <Route path="/SubCategory" element={<SubCategory />} />
              <Route path="/AddCategory" element={<AddCategory />} />
              <Route path="/CategorySetup" element={<CategorySetup />} />
              <Route path="/SubCategorySetup" element={<SubCategorySetup />} />
              <Route path="/SeekerProfile" element={<SeekerProfile />} />
              <Route path="/NewSeeker" element={<NewSeeker />} />
              <Route path="/SeekerList" element={<SeekerList />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
