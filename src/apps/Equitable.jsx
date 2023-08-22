import React from "react";

export default function Equitable() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">Equitable</h1>
      <p className="text-lg">
      In a recent collaboration with Equitable, I developed an innovative solution aimed at optimizing the way they managed and archived their vast amount of unlabeled call logs. Recognizing the value of tapping into the hidden patterns and information contained in these logs, I built an LDA (Latent Dirichlet Allocation) model which automatically classifies each call based on its content. This streamlined classification process not only enhanced the efficiency of log archiving but also played a pivotal role in elevating the standards of customer service delivery, by providing the call center team with refined insights from the logs. To amplify the utility of this model and make the results more accessible, I designed a comprehensive dashboard using Vue3 and Quasar frameworks. This interactive dashboard was backed by PostgreSQL, ensuring data robustness and scalability. The dashboard served as a user-friendly interface that granted data analysts the flexibility to explore, interact with, and glean actionable insights from the classified call logs seamlessly. The integration of these technologies led to a holistic solution, promoting data-driven decision-making and improving overall operational efficiency at Equitable's call center.
      </p>
      <div className="p-8">
        <img src="/apps/equitable/1.png" alt="ShowcaseServer" />
      </div>
    </div>
  );
}
