import { throttle } from "lodash";
import React, { useRef, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import {
  BiChevronDown,
  BiChevronRight,
  BiChevronsLeft,
  BiCopy,
  BiCut,
  BiPaste,
  BiRename,
  BiSearch,
  BiSquare,
} from "react-icons/bi";
import { BsChevronDown, BsTrash3 } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineViewList } from "react-icons/hi";
import { MdRefresh } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";
import FolderRow from "./FolderRow";
import { useDispatch, useSelector } from "react-redux";
import { startAppProcess, stopAppProcess, signalTopLayer } from "../actions";


export default function FolderWindow(props) {
  const tempDirFiles = [
    {
      name: "Document1.txt",
      dateModified: "2023-06-15",
      type: "Text",
      size: "256 KB",
    },
    {
      name: "Image.jpg",
      dateModified: "2023-06-14",
      type: "Image",
      size: "2.3 MB",
    },
    {
      name: "Spreadsheet.xlsx",
      dateModified: "2023-06-13",
      type: "Excel",
      size: "1.5 MB",
    },
    {
      name: "Presentation.pptx",
      dateModified: "2023-06-12",
      type: "PowerPoint",
      size: "3.7 MB",
    },
    {
      name: "Code.java",
      dateModified: "2023-06-11",
      type: "Java",
      size: "512 KB",
    },
    {
      name: "Music.mp3",
      dateModified: "2023-06-10",
      type: "Audio",
      size: "4.2 MB",
    },
    {
      name: "Video.mp4",
      dateModified: "2023-06-09",
      type: "Video",
      size: "15.6 MB",
    },
    {
      name: "Document2.txt",
      dateModified: "2023-06-08",
      type: "Text",
      size: "128 KB",
    },
    {
      name: "Image2.jpg",
      dateModified: "2023-06-07",
      type: "Image",
      size: "1.8 MB",
    },
    {
      name: "Presentation2.pptx",
      dateModified: "2023-06-06",
      type: "PowerPoint",
      size: "2.9 MB",
    },
  ];

  let coords = props.app.coords;
  let folderID = props.app.id;

  const dispatch = useDispatch();
  const { reference, currentTopLayer } = useSelector(
    (state) => state.windowState
  );
  const ref = useRef(null);
  const [clickState, setClickState] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const appChildren = useSelector((state) =>
    state.appState.filter((app) => app.parentDir === folderID)
  );

  const appDirs = useSelector(state => state.appState.filter(app => app.isDir))

  return (
    <div
      className={`absolute w-[1000px] h-[600px] bg-[#161616] rounded-md drop-shadow-xl overflow-hidden`}
      style={{
        zIndex: reference === folderID ? currentTopLayer : 200,
        left: props.preview ? 0 : `${coords[0]}px`,
        top: props.preview ? 0 : `${coords[1]}px`,
        border:  props.preview ? 0 :"1px solid #555",
        transform: props.preview ? "scale(0.2, 0.25)" : "scale(1)",
        transformOrigin: "top left",
      }}
      ref={ref}
      onMouseDown={() => {
        if (!clickState) {
          dispatch(signalTopLayer(folderID));
          setClickState(true);
        }
      }}
      onMouseUp={() => setClickState(false)}
    >
      <div
        className="absolute w-full h-[40px] p-2 top-0 left-0 right-0"
        style={{ background: "#202020", zIndex: 2000 }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center text-white">
            <div
              className="flex items-center gap-2 bg-[#2c2c2c] px-3 pt-1 pb-2 rounded-md text-white"
              style={{ paddingTop: "8px" }}
            >
              <img src="/icons/folder.png" width={"20px"} alt="Folder icon" />
              <p className="text-left w-[100px] text-xs">Folder</p>
              <AiOutlineClose />
            </div>
            <div className=" ml-2">
              <AiOutlinePlus />
            </div>
          </div>
          <div
            className="w-full h-[30px]"
            onMouseDown={(event) => {
              event.preventDefault();
              props.setDraggable(ref);
              props.setInitialCursorCoords([event.clientX, event.clientY]);
            }}
            onMouseUp={() => props.setDraggable(null)}
          ></div>
          <div className="flex items-start justify-between gap-8 text-white text-sm pr-2">
            <div className="flex items-center -mt-2 -mr-4">
              <div
                className={`w-full p-2 px-4 h-full ${
                  isSelected === 1
                    ? "bg-[rgba(255,255,255,0.1)]"
                    : "bg-[rgba(0,0,0,0)]"
                }`}
                onMouseOver={() => setIsSelected(1)}
                onMouseLeave={() => setIsSelected(false)}
              >
                <AiOutlineMinus />
              </div>
              <div
                className={`w-full p-2 px-4 h-full ${
                  isSelected === 2
                    ? "bg-[rgba(255,255,255,0.1)]"
                    : "bg-[rgba(0,0,0,0)]"
                }`}
                onMouseOver={() => setIsSelected(2)}
                onMouseLeave={() => setIsSelected(false)}
              >
                <BiSquare />
              </div>
              <div
                className={`w-full p-2 px-4 h-full ${
                  isSelected === 3
                    ? "bg-[rgba(255,0,0,0.7)]"
                    : "bg-[rgba(0,0,0,0)]"
                }`}
                onMouseOver={() => setIsSelected(3)}
                onMouseLeave={() => setIsSelected(false)}
                onClick={() => dispatch(stopAppProcess(folderID))}
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end absolute w-full p-2 top-[30px] left-0 right-0 bottom-0 h-[65px] bg-[#2c2c2c]">
        <div
          className="flex items-top h-[30px] pr-2"
          style={{ borderRight: "1px solid grey" }}
        >
          <div className="flex items-center text-white">
            <AiOutlinePlusCircle className="mr-2" />
            <p className="mr-1 text-xs">New</p>
            <BsChevronDown className="mr-2" style={{ fontSize: "8px" }} />
          </div>
        </div>
        <div
          className="flex items-center h-[30px] pr-2 px-4 text-white"
          style={{ borderRight: "1px solid grey" }}
        >
          <BiCut
            className="mr-6"
            style={{ transform: "rotate(-90deg)", fontSize: "20px" }}
          />
          <BiCopy className="mr-6" style={{ fontSize: "20px" }} />
          <BiPaste className="mr-6" style={{ fontSize: "20px" }} />
          <BiRename className="mr-6" style={{ fontSize: "20px" }} />
          <CiShare1 className="mr-6" style={{ fontSize: "20px" }} />
          <BsTrash3 className="mr-6" style={{ fontSize: "20px" }} />
        </div>
        <div
          className="flex items-top h-[30px] pr-2 px-4"
          style={{ borderRight: "1px solid grey" }}
        >
          <div className="flex items-center text-white">
            <TbArrowsSort className="mr-2" />
            <p className="mr-1 text-xs">Sort</p>
            <BsChevronDown className="mr-2" style={{ fontSize: "8px" }} />
          </div>
          <div className="flex items-center text-white">
            <HiOutlineViewList className="mr-2" />
            <p className="mr-1 text-xs">View</p>
            <BsChevronDown className="mr-2" style={{ fontSize: "8px" }} />
          </div>
        </div>
        <div className="flex items-center h-[30px] pr-2 px-4 text-white">
          <FiMoreHorizontal style={{ fontSize: "20px" }} />
        </div>
      </div>
      <div
        className="absolute p-2 top-[95px] left-0 right-0 bottom-0 h-[485px] w-[1000px] bg-[#202020]"
        style={{ borderBottom: "0.5px solid #4d4d4d" }}
      >
        <div className="flex items-center text-white gap-4">
          <div className="flex items-center justify-between text-white gap-4 px-2">
            <AiOutlineArrowLeft />
            <AiOutlineArrowRight />
            <BiChevronDown />
            <AiOutlineArrowUp />
          </div>
          <div
            className="flex items-center justify-between text-white grow"
            style={{ border: "0.5px solid #4d4d4d" }}
          >
            <div className="flex items-center text-white p-2">
              {props.app.isDir ? (
                <img src="/icons/folder.png" width={"20px"} />
              ) : (
                <img src={props.app.icon} width={"20px"} />
              )}

              <BiChevronsLeft style={{ fontSize: "14px" }} />
              <p className="text-xs mx-1">Desktop</p>
              <BiChevronRight style={{ fontSize: "12px",marginTop:'1px' }} />
              <p className="text-xs mx-1">{props.app.name}</p>
            </div>
            <div className="flex items-center text-white">
              <BsChevronDown className="mr-2" style={{ fontSize: "14px" }} />
              <MdRefresh className="mr-2" style={{ fontSize: "20px" }} />
            </div>
          </div>
          <div
            className="flex items-center justify-between text-white"
            style={{ border: "0.5px solid #4d4d4d", padding: "6px" }}
          >
            <input
              className="border-0 outline-none bg-transparent text-xs py-1 w-[200px]"
              placeholder={"Search " + props.app.name}
            />
            <BiSearch className="mr-2" style={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="flex justify-start w-full h-full">
          <table className="flex flex-col items-start text-white border-r-2 border-[#424242] w-[200px] mt-4 h-full">
            {appDirs.map((app) => {
              return <FolderRow condensed key={app.id} app={app} />;
            })}
          </table>
          <div className="w-full flex flex-col items-start justify-between text-white gap-4 p-4">
            <table>
            
              <thead className="font-thin">
                <tr className=" text-left">
                  <td className="text-xs w-[250px] border-r-2 border-[#424242] pl-4 py-1">
                    Name
                  </td>
                  <td className="text-xs w-[150px] border-r-2 pl-2 border-[#424242] py-1">
                    Date
                  </td>
                  <td className="text-xs w-[100px] border-r-2 pl-2 border-[#424242] py-1">
                    Type
                  </td>
                  <td className="text-xs w-[100px] pl-2 py-1">Size</td>
                </tr>
              </thead>
              <tbody>
                {appChildren.map((app) => {
                  return <FolderRow key={app.id} app={app} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-start items-center text-white w-[1000px] h-[25px] bottom-0 left-0 right-0 bg-[#262626]">
        <span className="mx-4 my-2 pr-2 text-xs border-r border-r-white">
          8 items
        </span>
      </div>
    </div>
  );
}
