import React from "react";

export default function NLPQuestionBank() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        Detecting similar questions in a question bank
      </h1>

      <p className="text-lg mb-4">
        The objective of the project was to create an algorithm that could
        detect similar questions and show other similar questions within the
        question bank. This is a common problem found in exam papers, wherein
        questions from the previous years may end up being repeated for future
        papers. The goal was not to minimize recurring questions, but to show
        similar questions in the pool of questions to professors who may be
        creating an exam paper. It could also be used to quickly create a sample
        paper using questions from past years, or for a mini assignment of some
        kind. For this, we proposed and implemented two solutions. Google
        provides a really good WordNet model. WordNet is a lexical database of
        semantic relations between words. WordNet links words into semantic
        relations including synonyms, hyponyms, and meronyms. The synonyms are
        grouped into synsets with short definitions and usage examples. Once we
        had this model, we wrote an iterative DBScan algorithm, that would take
        all the questions from the question bank, and using a strictness
        parameter, would cluster all similar questions together, based on their
        WordNet "scores". The issue was, across languages, it would require
        Google translate, which was not always very accurate due to varying
        regional dialects and phrasing. Especially in India, where there's
        hundreds of languages and varying dialects for each. So we proposed a
        secondary solution as well. Using the concept of n-gram similarity, we
        could cluster questions using their Jaccard Similarity. Jaccard
        similarity takes into account similar bigrams and divides it by the
        total number of bigrams. The benefit of this was that it was language
        independent. Even text written in other languages could be clustered
        easily, although synonyms would slip by. That said, most exam questions
        generally included proper nouns in their questions, so we would
        definitely have some kind of match for similar questions. ** As of the
        time of re-recording this, Google has taken down its WordNet model, so
        no example video can be provided for that. However, the code still
        exists should you like to examine how it functioned.
      </p>

      <div className="p-8">
        <div style={{position:"relative","paddingBottom":"56.25%",height:0}}>
          <iframe
            src="https://www.loom.com/embed/5823adb834f54cb8935ddaab746ac42a?sid=d47a5485-e138-4a2d-84cb-fe6fdabd2f12"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            style={{position:"absolute","top":0,left:0,width:"100%",height:"100%"}}
            
          ></iframe>
        </div>
      </div>
    </div>
  );
}
