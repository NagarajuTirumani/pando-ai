import React from "react";

const Dropdown = ({ name, type, data, styles }) => {
  return (
    <>
      <select className={styles}>
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
