import React from "react";
import Dropdown from "../common/Dropdown";

const LaneUpdate = ({ closeLaneUpload }) => {
  const getCloseLaneUpload = () => {
    closeLaneUpload();
  };

  return (
    <div className="duration-300">
      <div className="flex justify-between items-center p-3 bg-[#F3F6FC]">
        <span className="font-bold text-[14px] leading-4 text-[#005399] tracking-[0.4px] opacity-90 font-sans">
          Lane Upload
        </span>
        <div className="space-x-2 flex items-center">
          <span
            className="font-bold text-[10px] leading-[14px] text-[#0076DD] uppercase font-sans cursor-pointer"
            onClick={getCloseLaneUpload}
          >
            CANCEL
          </span>
          <button className="font-sans h-[24px] w-[70px] border rounded font-bold flex items-center justify-center py-[5px] px-[10px] bg-[#E7E7E7] text-[#616161] text-[10px] uppercase">
            UPLOAD
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="border">
          <div className="p-2 border-b">
            <p className="font-sans text-[10px] text-[#616161] uppercase">
              Mode<span className="text-red-500 ms-1">*</span>
            </p>
            <Dropdown
              name={"Select"}
              type={""}
              data={["option1", "option2", "option3", "option4"]}
              styles={
                "w-full text-[12px] -ml-1 outline-none font-sans italic text-[#616161]"
              }
            />
          </div>
          <div className="p-2 border-b">
            <p className="font-sans text-[10px] text-[#616161] uppercase">
              Event type
            </p>
            <Dropdown
              name={"Select"}
              type={""}
              data={["option1", "option2", "option3", "option4"]}
              styles={
                "w-full text-[12px] -ml-1 outline-none font-sans italic text-[#616161]"
              }
            />
          </div>
          <div className="p-2">
            <p className="font-sans text-[10px] text-[#616161] uppercase">
              Delivery type
            </p>
            <Dropdown
              name={"Select"}
              type={""}
              data={["option1", "option2", "option3", "option4"]}
              styles={
                "w-full text-[12px] -ml-1 outline-none font-sans italic text-[#616161]"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaneUpdate;
