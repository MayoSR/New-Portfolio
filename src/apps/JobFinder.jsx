import React from "react";

export default function JobFinder() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        <a href="https://jobpicker16.netlify.app" target="_blank"> Job Finder App</a>
      </h1>
      <p className="text-lg">
        The <a  target="_blank" className="text-blue-800"  href="https://jobpicker16.netlify.app">app is a simple job searching app</a>. While these apps already exist in
        some form or the other, they are usually fairly cluttered or not
        isolated experiences. For example,LinkedIn supports job postings, but
        because there's so many other things going on, sometimes the job portion
        feels like an after thought. I preferred the idea of an app exclusively
        for job postings only, where all relevant job data and communication
        could be neatly collated in one place.
      </p>
      <div className="p-8">
        <div className="flex">
          <img src="/apps/job/1.png" alt="ShowcaseServer" />
          <img src="/apps/job/banner.png" alt="ShowcaseServer" />
        </div>
      </div>
    </div>
  );
}
