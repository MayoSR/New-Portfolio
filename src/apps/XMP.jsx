import React from "react";

export default function XMP() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        <a href="http://info5900.infosci.cornell.edu/">
            Cornell Xenophobia Meter
        </a>
      </h1>
      <p className="text-lg">
        A{" "}
        <a
          target="_blank"
          className="text-blue-800"
          href="http://info5900.infosci.cornell.edu/"
        >
          Website 
        </a>{" "}
        utilized the Law School at Cornell University, to advertise a crucial paper in an international publication being researched.
      </p>
      <div className="p-8">
        <img src="/apps/xmp/1.png" alt="ShowcaseServer" />
      </div>
    </div>
  );
}
