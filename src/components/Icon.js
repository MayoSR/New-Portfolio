"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAppProcess, signalTopLayer } from "../actions";

export default function Icon(props) {
  const [iconHighlight, setIconHighlight] = React.useState(false);
  const [iconClickHighlight, setIconClickHighlight] = React.useState(false);
  const dispatch = useDispatch();
  const offsetCalc = useSelector((state) => state.appState).length;

  const setClickHighlight = () => {
    setIconClickHighlight(true);
    props.iconSelectedController(props.id);
  };

  const folderCheck = async () => {
    if (props.appWindows.includes(props.id)) {
      console.log("Folder Exists");
    } else {
      const dispatchers = [
        startAppProcess({
          id: props.id,
          coords: [200 + 10 * offsetCalc, 200 + 10 * offsetCalc],
        }),
        signalTopLayer(props.id),
      ];
      await Promise.all(dispatchers.map(dispatch));
    }
  };

  return (
    <div
      className={`${ props.navIcon ? 'w-auto p-1' : 'w-[80px]'} pt-1 rounded-md`}
      style={{
        background:
          (iconHighlight || props.isSelected) &&
          (props.navIcon ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.3)"),
      }}
    >
      <div
        className={`flex flex-col items-start justify-center h-full ${
          props.navIcon ? "w-[30px]" : "w-[55px]"
        }`}
        onClick={setClickHighlight}
        onMouseEnter={() => setIconHighlight(true)}
        onMouseLeave={() => setIconHighlight(false)}
        onDoubleClick={folderCheck}
      >
        <div className={`flex flex-col ${props.navIcon ? "justify-between" : "justify-center"}  h-full items-center`}>
          {props.app.isDir ? (
            <img src="/icons/folder.png" />
          ) : (
            <img src={props.app.icon} />
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
            <p className="text-white w-[80px] text-xs">{props.app.name}</p>
          )}
        </div>
      </div>
    </div>
  );
}
