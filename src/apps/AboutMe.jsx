import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

export default function AboutMe() {
  const [showText, setShowText] = useState(0);

  const copyClipboard = () => {
    navigator.clipboard.writeText("ms3293@cornell.edu");
    setShowText(1);
    setTimeout(() => {
      setShowText(0);
    }, 1000);
  };

  return (
    <div className="flex p-5">
      <div className="flex">
        <div className="flex flex-col items-center justify-center h-full pr-10 border-r border-gray-300 space-y-7 w-[600px]">
          <img
            src="/images/me.jpg"
            className="h-[200px] w-[200px] rounded-full"
            alt="Mayank"
          />

          <div className="flex justify-between w-full">
            <a
              href="https://github.com/MayoSR"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github"
                className="h-12 w-12"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mayankrao16/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="linkedin"
                className="h-12 w-12"
              />
            </a>
            <div className="relative">
              <img
                src="/icons/gmail.png"
                alt="linkedin"
                className="h-12 w-12 cursor-pointer"
                onClick={copyClipboard}

              />
              {showText ? (
                <p className="absolute text-xs text-black left-0">
                  Copied to clipboard!
                </p>
              ) : <></>}
            </div>
          </div>
        </div>
        <div className="ml-5 text-black space-y-5 text-left">
          <h1 className="text-4xl">Hello! I am Mayank Sailesh Rao</h1>

          <p className="text-md mb-2.5">
            I graduated from Cornell University with the MPS Award of
            Excellence, distinguishing myself as one of the top students in my
            batch with a GPA of 3.87. I'm actively searching for job
            opportunities where I can contribute and further hone my skills.
          </p>
          <p className="text-md mb-2.5">
            Throughout my academic journey, I've been passionate about making
            accessible technology and interface design. I relax by reading
            books, watching videos, or engaging in activities like Chess,
            Soccer, swimming, and working out.
          </p>
          <p className="text-md mb-2.5">
            One of my hobbies is developing apps or making small games. I'm
            always considering what app to make next or improvements to my
            existing projects. Occasionally, I challenge myself by solving
            competitive coding questions or learning new tech stacks. Currently,
            I'm immersing myself in Rust.
          </p>
        </div>
      </div>
    </div>
  );
}
