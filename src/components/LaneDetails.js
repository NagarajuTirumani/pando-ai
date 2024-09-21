import React, { useState } from "react";
import Dropdown from "../common/Dropdown";
import SearchIcon from "../assets/Search-10px.svg";
import Lorry from "../assets/Road.svg";
import Air from "../assets/Air.svg";
import Ship from "../assets/Ship.svg";

export default function LaneDetails() {
  const [checkHover, setCheckHover] = useState(0);
  const [cardHover, setCardHover] = useState(0);
  const [checkItems, setCheckItems] = useState([]);

  const TableData = [
    {
      id: 1,
      laneName: "LTLA001",
      sourceDestination: "Lithuania - Las Angelas",
      movementType: "Port to Port",
      contractType: "Per Container",
      contractParamenter: "3 Container",
      deliveryType: "FCL",
      THU: "20 Standard Dry",
      budget: "$3,500",
      price: "$3,410",
      count: "2",
      icon: Lorry,
      iconBgColor: "bg-[#FFEEC499]",
    },
    {
      id: 2,
      laneName: "SHNY78",
      sourceDestination: "Shanghai - New York",
      movementType: "Port to Port",
      contractType: "Per Container",
      contractParamenter: "3 Container",
      deliveryType: "FCL",
      THU: "20 Standard Dry",
      budget: "$3,500",
      price: "$3,410",
      count: "2",
      icon: Air,
      iconBgColor: "bg-[#B5E4FF]",
    },
    {
      id: 3,
      laneName: "HKTY01",
      sourceDestination: "Honk Kong - Tokyo",
      movementType: "Port to Port",
      contractType: "Per Container",
      contractParamenter: "3 Container",
      deliveryType: "FCL",
      THU: "20 Standard Dry",
      budget: "$3,500",
      price: "$3,410",
      count: "2",
      icon: Ship,
      iconBgColor: "bg-[#BDF0F466]",
    },
  ];

  const showcheckBox = (selectedItem) => {
    setCheckHover(selectedItem);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setCheckItems((prev) => [...prev, +event.target.id]);
    } else {
      setCheckItems((prev) => prev.filter((num) => num !== +event.target.id));
    }
  };

  return (
    <div className="px-4">
      <div className="flex justify-between pt-4">
        <div>
          <h3 className="font-semibold text-[12px] leading-tight text-[#0076DD] uppercase font-sans">
            LANE DETAILS
          </h3>
        </div>
        <div className="flex">
          <button className="me-2 font-sans h-[24px] w-[43px] rounded font-bold flex items-center justify-center py-[5px] px-[10px] text-[#A3A3A3] text-[10px] uppercase">
            delete
          </button>
          <button className="me-2 font-sans h-[24px] w-[43px] border rounded font-bold flex items-center justify-center py-[5px] px-[10px] bg-[#E7E7E7] text-[#616161] text-[10px] uppercase">
            Edit
          </button>
          <button className="font-sans h-[24px] w-[94px] border rounded font-bold flex items-center justify-center py-[5px] px-[10px] bg-[#E7E7E7] text-[#616161] text-[10px] uppercase">
            Associate
          </button>
        </div>
      </div>
      <div className="border border-dashed rounded-sm border-[#B5C3CB] ps-4 mt-2 py-3">
        <h3 className="text-[#1FCD93] font-sans font-semibold text-[12px]">
          Lane Creation
        </h3>
        <div className="flex">
          <button className="font-sans rounded font-bold py-[5px] text-[#0076DD] text-[10px] uppercase text-nowrap">
            Bulk Upload
          </button>
          <button className="font-sans rounded font-bold py-[5px] px-[10px] text-[#0076DD] text-[10px] uppercase text-nowrap">
            Contract fetch
          </button>
          <button className="font-sans rounded font-bold py-[5px] px-[10px] text-[#0076DD] text-[10px] uppercase text-nowrap">
            add lane
          </button>
        </div>
      </div>
      <div>
        <div className="py-3 flex space-x-2">
          <div className="w-[300px]">
            <div className=" bg-[#F9FAFA] px-3 py-2 w-full rounded flex items-center space-x-2">
              <img className="h-[16px] w-[16px] mt-1" alt="" src={SearchIcon} />
              <input
                placeholder="Search source, destination"
                className="outline-none bg-transparent w-full placeholder-[#737373] text-[#737373]"
              />
            </div>
            <div className="font-sans mt-8">
              <table>
                <thead class="text-xs uppercase text-left">
                  <tr>
                    <th className="flex items-center space-x-2 pl-6 mb-3 text-[#005399] leading-[13.62px] tracking-[0.5px]">
                      <input type="checkbox" />
                      <span className="text-[10px]">LANE NAME</span>
                      <div class="border-l-2 border-[#005399] h-[13.62px]"></div>
                      <span className="text-[10px]">SOURCE - DESTINATION</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TableData.map((item, index) => {
                    const condition =
                      checkHover === item.id || checkItems.includes(item.id);
                    return (
                      <tr>
                        <td
                          onMouseOver={() => {
                            setCardHover(item.id);
                          }}
                          onMouseLeave={() => {
                            setCardHover(0);
                          }}
                          className={`flex items-center space-x-3 mt-1 bg-[#FAFAFA] px-3 py-4 w-[300px] rounded ${
                            cardHover === item.id ? "" : "bg-[#FAFAFA]"
                          }`}
                        >
                          <div
                            onMouseOver={() => {
                              showcheckBox(item.id);
                            }}
                            onMouseLeave={() => {
                              showcheckBox(0);
                            }}
                            className={`${item.iconBgColor} h-[30px] w-[30px] rounded-full flex items-center justify-center`}
                          >
                            {!condition && (
                              <img
                                className="h-[14px] w-[14px]"
                                src={item.icon}
                                alt=""
                              />
                            )}
                            {condition && (
                              <input
                                id={item.id}
                                className="h-[14px] w-[14px]"
                                type="checkbox"
                                onChange={handleCheckboxChange}
                              />
                            )}
                          </div>
                          <div className="text-[12px] font-sans">
                            <p className="text-[#404040] font-bold">
                              {item.laneName}
                            </p>
                            <p className="text-[#404040] font-normal">
                              {item.sourceDestination}
                            </p>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#F9FAFA] px-3 py-1.5 rounded w-full space-x-2">
              <Dropdown
                name={"Movement Type "}
                type={"NA"}
                data={["option1", "option2", "option3", "option4"]}
              />
              <Dropdown
                name={"Contact Type: "}
                type={"ALL"}
                data={["option1", "option2", "option3", "option4"]}
              />
              <Dropdown
                name={"THU "}
                type={"3 Selected"}
                data={["option1", "option2", "option3", "option4"]}
              />
            </div>
            <div className="font-sans mt-8">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
