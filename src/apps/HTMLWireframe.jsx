import React from "react";

export default function HTMLWireframe() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        HTML Wireframe to Website Converter
      </h1>

      <p className="text-lg mb-4">
        This project aims to convert hand-drawn wireframe images into actual
        websites. The report goes in detail as to the content and implementation
        details. Only the first 20-30 pages contain relevant information. The
        rest consists of code screenshots and images with examples. Below is a
        video showing how it works.
      </p>

      <div className="p-8">
        <div style={{position:"relative","paddingBottom":"56.25%",height:0}}>
          <div style={{position:"relative","paddingBottom":"56.25%",height:0}}>
            <iframe
              src="https://www.loom.com/embed/8c6ee684140d4613893b3b1f2bbe0fd2?sid=b03527f8-0835-409e-a4a3-20ee8f5cf4c4"
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
