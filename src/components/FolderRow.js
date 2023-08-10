
import React from "react";

export default function FolderRow(props) {
  const [iconHighlight, setIconHighlight] = React.useState(false);
  const [iconClickHighlight, setIconClickHighlight] = React.useState(false);
  const { name, dateModified, type, size } = props.data;

  const setClickHighlight = () => {
    setIconClickHighlight(true);
    props.iconSelectedController(props.id);
  };

  return (
    <tr
      className={`w-full border-separate border-tools-table-outline  text-white text-xs` }
      style={{
        background:
          (iconHighlight || props.isSelected) && "rgba(255,255,255,0.3)",
      }}
      onClick={setClickHighlight}
      onMouseEnter={() => setIconHighlight(true)}
      onMouseLeave={() => setIconHighlight(false)}
    >
      <td className="w-[250px] pl-2 rounded-tl-sm rounded-bl-sm">
        <div
          className="flex items-center justify-start"
          style={{ padding: "5px 0px" }}
        >
          <div className="w-[20px] h-[20px] mr-1">
            <img src="/icons/folder.png" />
          </div>
          <p className="w-full text-left ml-1 text-ellipsis">{name}</p>
        </div>
      </td>
      {!props.condensed && (
        <>
          <td className="pl-2 text-left">
            <p>{dateModified}</p>
          </td>
          <td className="pl-2 text-left">
            <p>{type}</p>
          </td>
          <td className="pl-2 text-left rounded-tr-sm rounded-br-sm">
            <p>{size}</p>
          </td>
        </>
      )}
    </tr>
  );
}
