import React, { useState } from "react";
import SelectIocn from "../assets/Selected-Input.svg";

const SideNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [selectedItem, getSelectedItem] = useState("landDetails");

  return (
    <div
      className={`bg-[#EBF1FA] duration-300 ${
        openNav ? "w-[52px]" : "w-[260px]"
      }  rounded relative p-3`}
    >
      {!openNav && (
        <>
          <div className="flex justify-between items-center">
            <span className="text-[#234357] font-sans text-[12px] font-semibold">
              AIR 009
            </span>
            <button
              className="text-[#6D8EB4] font-sans text-[12px] font-semibold"
              onClick={() => setOpenNav(true)}
            >
              COLLAPSE
            </button>
          </div>
          <p className="text-[#234357] font-sans text-[13px] font-semibold mt-2">
            Sourcing Event
          </p>
          <div className="pl-2 pt-3">
            <ol className="relative text-gray-500 border-dashed border-s border-blue-500 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-6 ms-6">
                <span className={`${selectedItem === 'eventDetails' ? "bg-[#0076DD] ring-4" : "bg-gray-100"} absolute flex items-center justify-center w-[.8rem] h-[.8rem]  rounded-full -start-[6.5px]  ring-gray-200 dark:ring-gray-900 dark:bg-gray-700`}>
                  {selectedItem !== "eventDetails" && (
                    <img alt="" src={SelectIocn} />
                  )}
                </span>
                <h3
                  onClick={() => getSelectedItem("eventDetails")}
                  className="font-sans font-semibold leading-tight -ml-2 text-[12px] cursor-pointer"
                >
                  Event Details
                </h3>
              </li>
              <li className="mb-6 ms-6">
                <span className={`${selectedItem === 'landDetails' ? "bg-[#0076DD] ring-4" : "bg-gray-100"} absolute flex items-center justify-center w-[.8rem] h-[.8rem]  rounded-full -start-[6.5px]  ring-gray-200 dark:ring-gray-900 dark:bg-gray-700`}>
                  {selectedItem !== "landDetails" && (
                    <img alt="" src={SelectIocn} />
                  )}
                </span>
                <h3
                  onClick={() => getSelectedItem("landDetails")}
                  className="font-semibold leading-tight -ml-2 font-sans text-[12px] cursor-pointer"
                >
                  Lane Details
                </h3>
              </li>
              <li className="mb-6 ms-6">
                <span className={`${selectedItem === 'venders' ? "bg-[#0076DD] ring-4" : "bg-gray-100"} absolute flex items-center justify-center w-[.8rem] h-[.8rem]  rounded-full -start-[6.5px]  ring-gray-200 dark:ring-gray-900 dark:bg-gray-700`}>
                  {selectedItem !== "venders" && (
                    <img alt="" src={SelectIocn} />
                  )}
                </span>
                <h3
                  onClick={() => getSelectedItem("venders")}
                  className="font-semibold leading-tight -ml-2 font-sans text-[12px] cursor-pointer"
                >
                  Venders
                </h3>
              </li>
              <li className="mb-6 ms-6">
                <span className={`${selectedItem === 'eventGating' ? "bg-[#0076DD] ring-4" : "bg-gray-100"} absolute flex items-center justify-center w-[.8rem] h-[.8rem]  rounded-full -start-[6.5px]  ring-gray-200 dark:ring-gray-900 dark:bg-gray-700`}>
                  {selectedItem !== "eventGating" && (
                    <img alt="" src={SelectIocn} />
                  )}
                </span>
                <h3
                  onClick={() => getSelectedItem("eventGating")}
                  className="font-semibold leading-tight -ml-2 font-sans text-[12px] cursor-pointer"
                >
                  Event Gating
                </h3>
              </li>
              <li className="mb-6 ms-6">
                <span className={`${selectedItem === 'eventConfigurations' ? "bg-[#0076DD]" : "bg-gray-300"} mt-[2.5px] absolute flex items-center justify-center w-[.8rem] h-[.8rem] rounded-full -start-[6.5px] dark:ring-gray-900 dark:bg-gray-700`}>
                  {/* <img src={SelectIocn} /> */}
                </span>
                <h3
                  onClick={() => getSelectedItem("eventConfigurations")}
                  className="font-semibold leading-tight -ml-2 font-sans text-[12px] cursor-pointer"
                >
                  Event Configurations
                </h3>
              </li>
            </ol>
            <ol className="ml-4 -mt-4 relative text-gray-500 border-s border-blue-500 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-3 ms-2">Option 1</li>
              <li className="mb-3 ms-2">Option 1</li>
              <li className="mb-3 ms-2">Option 1</li>
              <li className="mb-3 ms-2">Option 1</li>
              <li className="mb-3 ms-2">Option 1</li>
              <li className="mb-3 ms-2">Option 1</li>
              <li className="mb-3 ms-2">Option 1</li>
            </ol>
            <p>option 1</p>
            <p>option 1</p>
            <p>option 1</p>
          </div>
        </>
      )}
      {openNav && (
        <div className="flex items-center flex-col">
          <button
            className="-rotate-90 mt-[10px] cursor-pointer"
            onClick={() => {
              setOpenNav(false);
            }}
          >
            Expend
          </button>
          <p className="-rotate-90 mt-20 text-nowrap">Sourcing Event</p>
        </div>
      )}
    </div>
  );
};

export default SideNavbar;
