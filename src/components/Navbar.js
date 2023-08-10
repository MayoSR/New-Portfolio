import React from "react";
import { BiChevronUp, BiWifi } from "react-icons/bi";
import { BsBatteryCharging, BsVolumeUp } from "react-icons/bs";
import { useSelector } from "react-redux";
import Icon from "./Icon";
import AppPreview from "./AppPreview";

export default function Navbar(props) {

  const apps = useSelector(state => state.appState)

  return (
    <div
      className="flex items-center justify-center absolute bottom-0 left-0 right-0 h-[50px] w-full bg-[#262626]"
      style={{ borderTop: "0.5px solid #4d4d4d",zIndex:1000 }}
    >
      <div className="relative flex items-center justify-center w-full h-[50px]">
        <img
          src="/icons/windows-icon.png"
          className="w-[25px] h-[25px] mr-2"
          alt="Windows Icon"
          onClick={() => props.toggleWindowsScreen(!props.windowsScreen)}
        />
        <div
          className="flex items-center justify-between  h-[32px] mx-2 py-4 px-3"
          style={{ background: "rgba(200,200,200,0.14)", borderRadius: "25px",borderTop: "1px solid rgba(255,255,255,0.2" }}
        >
          <img
            src="/icons/search.png"
            className="w-[17px] h-[17px] text-white mr-2"
            alt="Search Icon"
          />
          <input
            className="bg-transparent outline-none w-[150px] text-sm text-white"
            style={{ background: "transparent" }}
            placeholder="Search"
          />
          <img
            src="/icons/bing-icon.png"
            className="w-[20px] h-[20px]"
            alt="Search Icon"
          />
        </div>
        <div className="flex items-center">
          {apps.map((app) => {
            return <Icon app={app} navIcon />
          })}
        </div>
      </div>
      <div
        className="absolute right-0 bottom-0 w-[235px] flex items-center h-full text-white"
        style={{ zIndex: 9999 }}
      >
        <BiChevronUp className="mr-4 w-[25px] h-[25px]" />
        <div className="flex justify-between mr-2">
          
          <BiWifi className="mr-2 w-[20px] h-[20px]" />
          <BsVolumeUp className="mr-2 w-[20px] h-[20px]" />
          <BsBatteryCharging className="mr-2 w-[20px] h-[20px]" />
        </div>
        <div className="flex flex-col justify-between items-end mr-3">
          <p className="text-xs" style={{fontSize:'11px'}}>5.19 PM</p>
          <p className="text-xs" style={{fontSize:'11px'}}>6/20/2023</p>
        </div>
        <div className="rounded-full bg-[#aaa] flex justify-center items-center w-[17px] h-[17px]">
          <p className="text-xs text-black text-center" style={{fontSize:'10px',marginLeft:'0px', marginTop:'-2px'}}>2</p>
        </div>
      </div>
      <AppPreview />
    </div>
  );
}
