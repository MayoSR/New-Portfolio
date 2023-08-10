import React, { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { BiSquare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { stopAppProcess, signalTopLayer } from "../actions";

export default function AppWindow(props) {
  const dispatch = useDispatch();
  const { reference, currentTopLayer } = useSelector(
    (state) => state.windowState
  );
  const ref = useRef(null);
  const [clickState, setClickState] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  let coords = props.app.coords;
  let folderID = props.app.id;

  return (
    <div
      className={`absolute w-[1000px] h-[600px] bg-[#161616] rounded-md drop-shadow-xl overflow-hidden`}
      style={{
        zIndex: reference === folderID ? currentTopLayer : 200,
        left: `${coords[0]}px`,
        top: `${coords[1]}px`,
        border: "1px solid #555",
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

      <div
        className="absolute p-2 top-[40px] left-0 right-0 bottom-0 h-[560px] w-[1000px] bg-[#f9f9f9]"
        style={{ borderBottom: "0.5px solid #4d4d4d" }}
      ></div>
    </div>
  );
}
