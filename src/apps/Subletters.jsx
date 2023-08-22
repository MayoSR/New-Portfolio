import React from "react";

export default function RentalPlatform() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">Cornell & Ithaca College Rental Platform</h1>
      <p className="text-lg">
        Born out of a vision to streamline the housing search for Cornell and Ithaca College students, 2022 saw the advent of a revolutionary rental website. Crafted meticulously as a part of the Advanced Cloud Computing course, the platform bridges the housing gaps by bringing renters and landlords onto a unified, user-friendly platform. Hosted seamlessly on Microsoft's Azure, it utilizes an automated CI/CD pipeline empowered by GitHub actions, ensuring up-to-date delivery and reliability.
      </p>
      <p className="text-lg">
        Leveraging the prowess of Azure Maps API, the system provides real-time location-based services, allowing users to drop pins on preferred housing locations. This is all held together by a robust sharded Microsoft SQL database, ensuring swift data retrieval and secure storage. While the backend thrives on the efficiency of FastAPI, the frontend dazzles with the dynamism of Next and the state management power of Redux, ensuring users an intuitive and responsive experience.
      </p>
      <p className="text-lg">
        Not just a project, but a beacon of innovation, this rental platform signifies the potential of combining educational endeavors with real-world applications, serving both the student community and the broader housing ecosystem in Ithaca.
      </p>
      <div className="p-8">
        <img src="/apps/rental/3.png" alt="RentalPlatform" />
        <br />
        <img src="/apps/rental/2.png" alt="RentalPlatform" />
        <br />
        <img src="/apps/rental/1.png" alt="RentalPlatform" />
      </div>
    </div>
  );
}
