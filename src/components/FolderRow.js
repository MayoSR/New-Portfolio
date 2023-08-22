
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signalTopLayer, startAppProcess } from "../actions";

export default function FolderRow(props) {
  const [iconHighlight, setIconHighlight] = React.useState(false);
  const [iconClickHighlight, setIconClickHighlight] = React.useState(false);
  const { name, dateModified, type, size,icon, id } = props.app;

  const setClickHighlight = () => {
    setIconClickHighlight(true);
    // props.iconSelectedController(props.id);
  };

  const dispatch = useDispatch();
  const offsetCalc = useSelector((state) => state.appState).length;

  return (
    <tr
      className="w-full border-separate border-tools-table-outline  text-white text-xs cursor-pointer font-light"
      style={{
        background: (iconHighlight || props.isSelected) && "rgba(255,255,255,0.3)",
      }}
      onClick={setClickHighlight}
      onMouseEnter={() => setIconHighlight(true)}
      onMouseLeave={() => setIconHighlight(false)}
      onDoubleClick={() => {dispatch(startAppProcess({ id: id, coords: [100, 100] }));dispatch(signalTopLayer(id))}}
    >
      <td className="w-[250px] pl-2 rounded-tl-sm rounded-bl-sm">
        <div className="flex items-center justify-start" style={{ padding: "5px 0px" }}>
          <div className="w-[20px] h-[20px] mr-1 flex justify-center items-center">
            <img src={icon} alt="folder icon" />
          </div>
          <p className="w-full text-left ml-1 text-ellipsis">{name}</p>
        </div>
      </td>
      {!props.condensed && (
        <>
          <td className="w-[150px] pl-2 text-left">{dateModified}</td>
          <td className="w-[100px] pl-2 text-left">{type}</td>
          <td className="w-[100px] pl-2 text-left rounded-tr-sm rounded-br-sm">{size}</td>
        </>
      )}
    </tr>
  );
  
}
