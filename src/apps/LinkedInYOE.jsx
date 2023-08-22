import React from "react";

export default function LinkedInYOE() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        <a target="_blank" href="https://chrome.google.com/webstore/detail/linkedin-years-of-experie/donhgkmejidpmaaaegcncggmplnpfcob?hl=en&authuser=2">
            LinkedIn Years of Experience Checker
        </a>
      </h1>
      <p className="text-lg">
        A{" "}
        <a
          target="_blank"
          className="text-blue-800"
          href="https://chrome.google.com/webstore/detail/linkedin-years-of-experie/donhgkmejidpmaaaegcncggmplnpfcob?hl=en&authuser=2"
        >
          LinkedIn plugin
        </a>{" "}
        utilized by 300+ users daily, that automatically indicates the years of experience for a LinkedIn job posting.
      </p>
      <div className="p-8">
        <img src="/apps/yoe/1.jpg" alt="ShowcaseServer" />
      </div>
    </div>
  );
}
