import React from "react";
import Dropdown from "../common/Dropdown";

const LaneUpdate = ({ closeLaneUpload }) => {
  const getCloseLaneUpload = () => {
    closeLaneUpload();
  };

  return (
    <div className="duration-300">
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <span className="font-semibold text-[12px] leading-tight text-[#0076DD] uppercase font-sans">
          Lane Upload
        </span>
        <div className="space-x-2 flex items-center">
          <span
            className="font-semibold text-[12px] leading-tight text-[#0076DD] uppercase font-sans cursor-pointer"
            onClick={getCloseLaneUpload}
          >
            CANCEL
          </span>
          <button className="font-sans h-[24px] w-[70px] border rounded font-bold flex items-center justify-center py-[5px] px-[10px] bg-[#E7E7E7] text-[#616161] text-[10px] uppercase">
            UPLOAD
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="border">
          <div className="p-2 border-b">
            <p className="font-sans text-[12px]">
              MODE<span className="text-red-500">*</span>
            </p>
            <Dropdown
              name={"Select"}
              type={""}
              data={["option1", "option2", "option3", "option4"]}
              styles={"w-full -ml-1 outline-none"}
            />
          </div>
          <div className="p-2 border-b">
            <p className="font-sans text-[12px]">EVENT TYPE</p>
            <Dropdown
              name={"Select"}
              type={""}
              data={["option1", "option2", "option3", "option4"]}
              styles={"w-full -ml-1 outline-none"}
            />
          </div>
          <div className="p-2">
            <p className="font-sans text-[12px]">DELIVERY TYPE</p>
            <Dropdown
              name={"Select"}
              type={""}
              data={["option1", "option2", "option3", "option4"]}
              styles={"w-full -ml-1 outline-none"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaneUpdate;
