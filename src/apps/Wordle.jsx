import React from "react";

export default function Wordle() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">Wordle</h1>
      <p className="text-lg">
      A <a target="_blank" className="text-blue-800" href="https://wordle16.netlify.app/">Wordle</a> game built in pure JavaScript as a coding challenge. Built in 30mins.
      </p>
      <div className="p-8">
        <img src="/apps/wordle/1.png" alt="ShowcaseServer" />
      </div>
    </div>
  );
}
