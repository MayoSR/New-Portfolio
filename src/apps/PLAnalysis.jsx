import React from "react";

export default function PLAnalysis() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">Social Network Analysis of Programming Languages from Stackoverflow</h1>
      
      <h2 className="text-3xl mt-4">About</h2>
      <p className="text-lg">
        At the core of this project, there are two significant facets: a programming language recommender and a teammate recommender, both deriving insights from Stackoverflow data.
      </p>

      <h2 className="text-3xl mt-4">Part 1: Programming Language Recommender</h2>
      <p className="text-lg">
        A prevalent dilemma among budding developers is the selection of a subsequent programming language post mastering the foundational ones. To assist, we conceptualized a language dependency matrix, representing interrelations among programming languages. This matrix was engineered by sifting through countless Stackoverflow profiles, identifying concurrent mentions of languages. The objective was straightforward: discern patterns in language utilization based on profession or interest, thereby devising recommendations for users.
      </p>
      <p className="text-lg">
        Crafting the matrix was an immense task, given the vast dataset. With the top ~80% languages from Stackoverflow as our prime focus, we extracted and indexed occurrences. Despite the challenges, such as differentiating single-letter languages like 'C' and 'R', we established an extensive dependency matrix. Consequently, a user's bio or interests could be utilized to suggest analogous programming languages.
      </p>
      <p className="text-lg">
        As an outcome, our data suggested that a C++ expert might naturally lean towards Java or Python. Likewise, a pro in Cocoa and Swift might find Objective-C intriguing. This recommendation system, founded on social network analysis, strayed from the usual ML model approach, presenting a fresh perspective.
      </p>

      <h2 className="text-3xl mt-4">Part 2: Teammate Recommender</h2>
      <p className="text-lg">
        A subsequent challenge was finding collaborators with analogous technical skills. Our initial approach was the Jaccard similarity, gauging similarity using bigrams from user profiles. Soon, we integrated our previous endeavor - the language matrix. By interpreting languages from user bios, the matrix could then identify users possessing high-scored languages. For instance, a Swift aficionado could collaboratively benefit from an Objective-C coder. This concept, rich in potential, remains a prospect for future exploration.
      </p>

    </div>
  );
}
