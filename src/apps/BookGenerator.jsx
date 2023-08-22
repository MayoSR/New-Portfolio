import React from "react";

export default function BookGenerator() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">StoryGen: Automated Storybook Generator</h1>
      <p className="text-lg">
        Envision a world where stories evolve seamlessly, chapter after chapter, driven not by human imagination, but by intricate algorithms and neural networks. Welcome to StoryGen, an avant-garde platform that harnesses the power of LSTM/GRU cells combined with Bi-Directional RNNs to generate enthralling narratives. 
      </p>
      <p className="text-lg">
        Delve into the magic of J.K. Rowling's wizarding world, for instance. Imagine handing StoryGen a chapter from 'Harry Potter', and witnessing it craft an entirely new, coherent continuation — expanding the horizons of Hogwarts in ways previously unimagined. Beyond mere novelty, the technology behind this platform holds profound implications for literature, media, and content creation, demonstrating how artificial intelligence might dance in tandem with human creativity.
      </p>
      <p className="text-lg">
        The accompanying report offers a deep dive into the mechanics of this innovation, elucidating its workings, highlighting examples, and shedding light on the remarkable outcomes of this AI-driven literary endeavor.
      </p>
      <div className="p-8">
      <embed
        src="/apps/story/story.pdf#view=FitH"
        type="application/pdf"
        width="100%"
        height="500px"  // or however tall you want the PDF viewer to be
        title="StoryGen Report"
    />
      </div>
    </div>
  );
}
