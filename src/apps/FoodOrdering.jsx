import React from "react";

export default function FoodOrdering() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        <a href="https://foodordering16.netlify.app" className="text-blue-800"  target="_blank" rel="noopener noreferrer">Food Ordering Mobile App</a>
      </h1>
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        Red Bull Basement Hackathon
      </h1>
      <p className="text-lg mb-4">
        This was a prototype app written for our pitch in the Red Bull Basement University Hackathon. College canteens are a mess in general, so the idea was to create a scheduling and pre-order system, where students could place orders from their classroom beforehand and pick it up during the breaks or whenever was convenient to them. The benefit would be to prevent the rushing and crowds that would form during breaks, which sometimes took so much time to clear that people would end up being late to class due to inability to get food quickly.
      </p>
      <p className="text-lg">
        While we did not qualify, we came around 5th in India for the pitch and idea. This app is just a simple ordering app of what it might have looked like had it been implemented.
      </p>
    </div>
  );
}