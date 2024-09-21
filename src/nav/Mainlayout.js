import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import SideNavbar from "./SideNavbar";
import LaneDetails from "../components/LaneDetails";

const MainLayout = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <div className="p-3 bg-gray-300 h-[100vh] flex space-x-2">
        <SideNavbar />
        <div className="bg-white rounded w-full p-4">
          <LaneDetails />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
