import React from "react";

export default function LinkedInH1B() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        <a target="_blank" href="https://chrome.google.com/webstore/detail/linkedin-us-h1b-uk-skille/kaojaomikpeddgjoggcmdcohhaphkpae?hl=en&authuser=2">
            LinkedIn US H1B & UK Skilled Worker Checker
        </a>
      </h1>
      <p className="text-lg">
        A{" "}
        <a
          target="_blank"
          className="text-blue-800"
          href="https://chrome.google.com/webstore/detail/linkedin-us-h1b-uk-skille/kaojaomikpeddgjoggcmdcohhaphkpae?hl=en&authuser=2"
        >
          LinkedIn plugin
        </a>{" "}
        utilized by 2000+ users daily, that automatically indicates which
        companies have sponsored H1B and UK skilled worker visas in the past
        years.

        This plugin went viral on LinkedIn, garnering over 4000 likes and 700,000 impressions.
      </p>
      <div className="p-8">
        <img src="/apps/h1b/1.jpg" alt="ShowcaseServer" />
      </div>
    </div>
  );
}
