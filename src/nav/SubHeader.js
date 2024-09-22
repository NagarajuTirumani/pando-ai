import React from "react";
import ArrowIcon from '../assets/Right-Caret.svg'

const SubHeader = () => {
  return (
    <div className="h-[50px] flex justify-between items-center shadow-md p-3">
      <div className="flex space-x-3 items-center text-[13px]">
        <span className="text-[#616161] font-semibold">Sourcing Event</span>
        <span><img alt="" src={ArrowIcon}/></span>
        <span className="text-[#005399] font-semibold">AIR 009</span>
        <span><img alt="" src={ArrowIcon}/></span>
        <button className="h-[17px] w-[59px] border rounded flex items-center justify-center pb-[2px] px-[10px] font-[500] bg-[#E7E7E7]" >DRAFT</button>
      </div>
      <div className="flex space-x-3">
        <div className="border-l-2 border-[#9CB3BF80] h-[50px]"></div>
        <div className="p-1 flex items-center">
        <button className="bg-[#0076DD] rounded h-[30px] w-[112px] text-[#ffffff] text-[12px] font-sans font-semibold ">INITIATE EVENT</button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
