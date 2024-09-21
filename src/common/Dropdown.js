import React from "react";

const Dropdown = ({ name, type, data }) => {
  return (
    <>
      <select className="w-[160px] border rounded-3xl outline-none px-2 py-1 font-sans text-[12px] border-[#EFEFEF] text-[#616161]">
        <option default value="">
          {name}
          <span className="font-bold">{type}</span>
        </option>
        {data.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </>
  );
};

export default Dropdown;
