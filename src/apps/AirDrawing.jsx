import React from "react";

export default function AirDrawing() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">AirDrawing: Converting Air Strokes into Writing</h1>
      <p className="text-lg">
        The contemporary lecture halls, vast and accommodating, often echo the footfalls of professors as they weave between rows, assisting and observing students. Yet, any scribble or clarification on the blackboard demanded a return to the front, disrupting the flow of the lecture.
      </p>
      <p className="text-lg">
        AirDrawing emerges as a transformative solution to this. Envision a pen, not ordinary, but embedded with a sharp blue LED. As the professor sketches in the air, a camera fixed to a Raspberry Pi captures these air strokes, rendering them instantaneously onto a virtual board. 
      </p>
      <p className="text-lg">
        Beyond its immediate function, AirDrawing's brilliance lies in its universality. Any device running Python can host it. Its affordability and adaptability to varied light colors make it a trailblazer in the realm of ed-tech.
      </p>
      <p className="text-lg">
        While video recordings of this innovation remain elusive, having been curated exclusively within the confines of a lab, the code stands testimony to this pioneering endeavor. Explore it below for a glimpse into the future of lecture delivery.
      </p>
      <div className="p-8">
        <a className="text-blue-500 hover:underline" href="https://github.com/MayoSR/InvisiblePen/blob/master/tracker.py" target="_blank" rel="noopener noreferrer">
          Click here to view the code
        </a>
      </div>
    </div>
  );
}
