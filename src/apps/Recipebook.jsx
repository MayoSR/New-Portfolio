import React from "react";

export default function Recipebook() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4"><a  target="_blank" href="https://recipebook16.netlify.app">RecipeBook app</a></h1>
      <p className="text-lg">
      A simple <a  target="_blank" href="https://recipebook16.netlify.app">RecipeBook app</a> that allows users to upload recipes, as well as select recipes using the ingredients in their fridge.
      </p>
    </div>
  );
}
