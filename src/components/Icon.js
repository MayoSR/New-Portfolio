"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAppProcess, signalTopLayer } from "../actions";
import AppPreview from "./AppPreview";

export default function Icon(props) {
  const [iconHighlight, setIconHighlight] = React.useState(false);
  const [iconClickHighlight, setIconClickHighlight] = React.useState(false);
  const dispatch = useDispatch();
  const offsetCalc = useSelector((state) => state.appState).length;

  const setClickHighlight = () => {
    console.log("Top layer for ID", props.id)
    setIconClickHighlight(true);
    dispatch(signalTopLayer(props.id));
  };

  const folderCheck = async () => {
    if (props.appWindows.includes(props.id)) {
      console.log("Folder Exists");
    } else {
      const dispatchers = [
        startAppProcess({
          id: props.id,
          coords: [5 * offsetCalc, 5 * offsetCalc],
        }),
        signalTopLayer(props.id),
      ];
      await Promise.all(dispatchers.map(dispatch));
    }
  };

  const [appPreviewHighlight, setAppPreviewHighlight] = React.useState(false);
  const [appPreviewCoords, setAppPreviewCoords] = React.useState([0,0]);

  const enableAppPreviewHighlight = (event) => {
    let x = event.target.getBoundingClientRect().left - 350
    setAppPreviewHighlight(true)
    setAppPreviewCoords(x)
  }

  return (
    <div
      className={`cursor-pointer ${ props.navIcon ? 'w-auto p-1' : 'w-[80px]'} pt-1 rounded-sm`}
      style={{
        background:
          (iconHighlight || props.isSelected) &&
          (props.navIcon ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.1)"),
      }}
    >
      <div
        className={` flex flex-col items-start justify-center h-full ${
          props.navIcon ? "w-[30px]" : "w-[55px]"
        }`}
        onClick={setClickHighlight}
        onMouseEnter={() => setIconHighlight(true)}
        onMouseLeave={() => setIconHighlight(false)}
        onDoubleClick={folderCheck}
      >
        <div className={`flex flex-col ${props.navIcon ? "justify-between" : "justify-center"} cursor-pointer  h-full items-center`} onMouseLeave={() => setAppPreviewHighlight(false)} onMouseOver={(event) =>  props.navIcon ?  enableAppPreviewHighlight(event) : null}>
          

          {props.app.isDir ? (
            <img src="/icons/folder.png" alt="folder icon" className={props.desktop ? "w-[48px] h-[48px]" : "w-[30px] h-[30px]" } />
          ) : (
            <img src={props.app.icon} alt="app-icon" className={props.desktop ? "w-[48px] h-[48px]" : "w-[30px] h-[30px]" }  />
          )}


          {props.navIcon ? (
            <div
              className={` ${
                props.isSelected
                  ? "w-[16px] bg-[rgba(255,255,255,0.5)]"
                  : "w-[6px] bg-[rgba(192,192,192,0.5)]"
              } h-[4px] rounded-full `}
            ></div>
          ) : (
            <p className="text-white w-[80px] text-xs pointer-events-none">{props.app.name}</p>
          )}
        </div>
      </div>
      {appPreviewHighlight ? <AppPreview x={appPreviewCoords} icon={props.app.icon} id={props.app.id} /> : <></>}
    </div>
  );
}
