import React from "react";

export default function ShowcaseServer() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">ShowcaseServer</h1>
      <p className="text-lg">
        In 2022, an innovative project was rolled out at Cornell University,
        reshaping the way professors and teaching assistants (TAs) manage and
        engage with student projects. This cutting-edge system can automatically
        clone student projects from GitHub and deploy them directly onto
        Cornell's dedicated servers. Through an intuitive management dashboard,
        professors are now empowered to monitor student projects with
        unparalleled efficiency, accessing real-time logs, pinpointing and
        rectifying errors, and effectively managing student accounts for the
        grading process. Simultaneously, TAs have been granted the ability to
        instantly access live logs and student errors, facilitating prompt
        troubleshooting assistance. Crucially, upon its initiation, the system
        autonomously establishes its own environment, guaranteeing optimal
        compatibility and user experience. The most remarkable aspect of this
        innovation is its cost-free provision, standing as a compelling
        alternative to the traditionally pricey platforms like AWS, GCP, Azure,
        and Heroku. Since its inception, the initiative has garnered significant
        attention, with over 300 students utilizing the platform and numerous
        professors expressing keen interest. This groundbreaking endeavor not
        only won the coveted MPS Award of Excellence but also promises a
        trajectory of continued growth and adaptation in the academic landscape.
      </p>
      <div className="p-8">
        <img src="/apps/showcase/4.png" alt="ShowcaseServer" />
        <br />
        <img src="/apps/showcase/3.png" alt="ShowcaseServer" />
        <br />
        <img src="/apps/showcase/2.png" alt="ShowcaseServer" />
        <br />
        <img src="/apps/showcase/1.png" alt="ShowcaseServer" />
      </div>
    </div>
  );
}
