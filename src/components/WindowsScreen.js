import React, { useRef, useState } from "react";
import { BiSearch, BiChevronRight } from "react-icons/bi";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

export default function WindowsScreen(props) {
  let icons = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "NodeJs",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      name: "Java",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      name: "Linux",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "NextJs",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      name: "Vue.js",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
      name: "Kafka",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      name: "Google Cloud",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      name: "AWS",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      name: "Azure",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      name: "Jenkins",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      name: "Kubernetes",
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      name: "Docker",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      name: "Angular",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "Git",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      name: "PHP",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      name: "C/C++",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      name: "Firebase",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      name: "Redux",
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      name: "MySQL",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      name: "Svelte",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      name: "SocketIO",
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      name: "Tensorflow",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: "Bootstrap",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      name: "Material UI",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Figma",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      name: "jQuery",
    },

    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      name: "Flask",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      name: "GraphQL",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      name: "Spring",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
      name: "Raspberry Pi",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
    },
  ];

  let topSkills = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
      experience: "9 years",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      name: "C/C++",
      experience: "5 years",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      name: "Java",
      experience: "4 years",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript (ES6+)",
      experience: "8 years",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
      experience: "6 years",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      name: "Linux",
      experience: "6 years",
    },
  ].sort(function (a, b) {
    var textA = a.experience.toUpperCase();
    var textB = b.experience.toUpperCase();
    return textA > textB ? -1 : textA < textB ? 1 : 0;
  });

  const skillRef = useRef("");
  const [filterText, setFilterText] = useState("");

  return (
    <div
      className="flex justify-center absolute left-0 right-0 bottom-[60px] w-full"
      style={{ zIndex: 999999 }}
    >
      <div className="relative overflow-hidden rounded-md drop-shadow-xl flex flex-col items-center justify-start h-[725px] w-[635px] bg-[#323232] p-8">
        <div
          className="flex items-center justify-between w-full h-[20px] mx-2 py-4 px-3"
          style={{ background: "rgba(0,0,0,0.3)", borderRadius: "25px" }}
        >
          <BiSearch className="mr-2 text-white" style={{ fontSize: "20px" }} />
          <input
            className="bg-transparent outline-none w-full"
            style={{ background: "transparent" }}
            placeholder="Search for my skills"
            onChange={(e) => setFilterText(e.target.value.toLowerCase())}
          />
        </div>
        <div className="w-full flex items-center justify-between mt-8 -mb-8 text-sm px-8">
          <p className="text-white font-bold -ml-2 text-md">Skills</p>
          <div className="flex items-center rounded-md p-1 px-2 justify-center text-white bg-[rgba(100,100,100,0.2)]">
            <p>View all</p>
            <BiChevronRight className="" style={{ marginTop: "2px" }} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[590px] overflow-hidden ml-4">
            <div className="w-[610px] pr-4 grid grid-cols-6 gap-4 mb-2 text-white mt-12 overflow-y-scroll h-[220px]">
              {icons
                .filter(
                  (icon) => icon.name.toLowerCase().indexOf(filterText) !== -1
                )
                .map((icon) => {
                  return (
                    <div
                      className="flex flex-col justify-center items-center mb-2"
                      key={icon.name}
                    >
                      <img
                        style={{ height: "35px", width: "35px" }}
                        src={icon.url}
                        alt="icon"
                      />
                      <p className="text-xs">{icon.name}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 -ml-2">
            <div className="h-[6px] w-[6px] bg-slate-300 rounded-full cursor-pointer"></div>
            <div className="h-[4px] w-[4px] bg-slate-300 rounded-full cursor-pointer"></div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-8 -mb-8 text-sm px-8">
          <p className="text-white font-bold -ml-2 text-md">Experience</p>
          <div className="flex items-center rounded-md p-1 px-2 justify-center text-white bg-[rgba(100,100,100,0.2)]">
            <p>View all</p>
            <BiChevronRight className="" style={{ marginTop: "2px" }} />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full text-white mt-14 ml-8 gap-4 gap-x-24">
          {topSkills.map((icon) => {
            return (
              <div className="flex items-center justify-start" key={icon}>
                <img
                  style={{ height: "40px", width: "40px" }}
                  src={icon.url}
                  alt="icon"
                />
                <div className="flex-col ml-2">
                  <p className="text-sm text-left">{icon.name}</p>
                  <p className="text-sm text-left">{icon.experience}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-[32px] px-12 py-4 border-t-2 border-[#252525] p-4 bg-[#272727] left-0 right-0 w-full flex items-center justify-between mt-8 -mb-8 text-sm">
          <div className="flex items-center">
            <img
              src="/images/me.jpg"
              height="32px"
              width="32px"
              className="rounded-full "
            />
            <p className="text-xs text-white ml-3">Mayank Rao</p>
          </div>
          <div className="hover:bg-[rgba(200,200,200,0.14)] rounded-md p-2 mr-6">
            <MdOutlinePowerSettingsNew
              onClick={() => props.setScreen(0)}
              className="text-2xl  text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
