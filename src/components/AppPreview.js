import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function AppPreview(props) {
  return (
    <div
      className="absolute bottom-[60px] h-[150px] w-[200px]  flex flex-col bg-[rgba(62,9,206,0.31)] justify-center rounded-lg p-2 "
      style={{ zIndex: 99999, backdropFilter: "blur(10px)" }}
    >
      <div className="w-full flex items-center justify-between pb-2">
        <div className="flex items-center">
          <img src="/icons/folder.png" className="w-[20px] h-[20px] mr-2" />
          <p className="w-[125px] truncate  text-white text-xs text-left">
            Complex App to get a job that's gonna work
          </p>
        </div>
        <button className="text-white hover:bg-[rgba(255,0,0)] p-1 rounded-md">
          <AiOutlineClose />
        </button>
      </div>
      <div className="h-full w-full bg-white rounded-sm"></div>
    </div>
  );
}
