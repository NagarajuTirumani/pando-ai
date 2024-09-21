import React from "react";
import Icon from '../assets/icon.svg'

const Header = () =>{
   return (
    <div className="bg-[#234357] h-[50px] py-[10px] px-[20px] flex space-x-4 text-center items-center">
        <img className="h-7 w-7" src={Icon} alt=""/>
        <div class="border-l-2 border-[#9CB3BF80] h-7"></div>
        <h1 className="text-[16px] text-[#ffffff] font-[400] gap-1">KWE - Procure</h1>
    </div>
   )
}


export default Header