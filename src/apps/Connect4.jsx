import React from "react";

export default function Connect4() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        Connect 4
      </h1>

      <p className="text-lg mb-4">
        A simple Connect 4 game made using SocketIO for multiplayer.
      </p>

      <div className="p-8 bg-black">
        <div
          style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}
        >
          <div style={{position:"relative","paddingBottom":"56.25%",height:0}}>
            <iframe
              src="https://www.loom.com/embed/770a43c6447b46faa188feb0d0b03cca?sid=b7c8e59c-8d1c-4720-8d82-edf46dd15474"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              style={{position:"absolute","top":0,left:0,width:"100%",height:"100%"}}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
