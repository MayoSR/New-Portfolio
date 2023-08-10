import React, { useCallback, useEffect } from "react";
import Navbar from "./Navbar";
import Icon from "./Icon";
import FolderWindow from "./FolderWindow";
import WindowsScreen from "./WindowsScreen";
import { throttle } from "lodash";
import { useSelector } from "react-redux";
import AppWindow from "./AppWindow";

export default function BackgroundLayer(props) {
  const backgroundImageUrl = 'url("/images/windows-flower.jpg")';

  const [selectedIcon, setSelectedIcon] = React.useState(null);

  const [windowsScreen, toggleWindowsScreen] = React.useState(false);

  const appWindows = useSelector((state) => state.appState);

  const [draggable, setDraggable] = React.useState(null);

  const [initialCursorCoords, setInitialCursorCoords] = React.useState(null);

  const handleMouseMove = useCallback(
    (event) => {
      if (draggable) {
        const { left, top } = draggable.current.getBoundingClientRect();
        const [initialX, initialY] = initialCursorCoords;
        const newLeft = left + (event.clientX - initialX);
        const newTop = top + (event.clientY - initialY);
        draggable.current.style.left = `${newLeft}px`;
        draggable.current.style.top = `${newTop}px`;
        setInitialCursorCoords([event.clientX, event.clientY]);
      }
    },
    [draggable, initialCursorCoords]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-red-500 flex justify-start overflow-hidden"
      style={{ background: backgroundImageUrl, backgroundSize: "cover" }}
    >
      <div
        className="grid grid-flow-col h-[90vh] gap-2 mt-1"
        style={{ gridTemplateRows: "repeat(9, 1fr)" }}
      >
        {appWindows.map((app) => {
          return (
            <Icon
              key={app.id}
              iconSelectedController={setSelectedIcon}
              id={app.id}
              isSelected={app.id === selectedIcon}
              appWindows={appWindows}
              app={app}
            />
          );
        })}
      </div>
      <Navbar
        toggleWindowsScreen={toggleWindowsScreen}
        windowsScreen={windowsScreen}
      />

      {appWindows.map((app) =>
        app.status ? (
          app.isDir ? (
            <FolderWindow
              app={app}
              setDraggable={setDraggable}
              setInitialCursorCoords={setInitialCursorCoords}
              key={app.id}
            />
          ) : (
            <AppWindow
              app={app}
              setDraggable={setDraggable}
              setInitialCursorCoords={setInitialCursorCoords}
              key={app.id}
            />
          )
        ) : (
          <></>
        )
      )}
      {windowsScreen && <WindowsScreen />}
    </div>
  );
}
