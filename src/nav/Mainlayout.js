import React, { useState } from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import SideNavbar from "./SideNavbar";
import LaneDetails from "../components/LaneDetails";

const MainLayout = () => {
  const [sidenavOpen, getsideNavOpen] = useState(false);

  const openNavbar = () => {
    getsideNavOpen(!sidenavOpen);
  };

  return (
    <div className="main-container">
      <Header />
      <SubHeader />
      <div className="p-3 bg-gray-100 min-h-[100vh] flex space-x-2">
        <SideNavbar getsideNavOpen={openNavbar} />
        <div
          className={`bg-white rounded ${
            sidenavOpen
              ? "lane-details-conatiner_collapse"
              : "lane-details-conatiner"
          } duration-300`}
        >
          <LaneDetails />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
