import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
      id: 0,
      title: "Countdown Timer",
      desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
      img: "/mypro1.PNG",
      tags: ["NextJS", "Node", "CSS", "Typescript"],
    },
    {
      id: 1,
      title: "Weather Widget",
      desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",
      img: "/mypro4.png",
      tags: ["NextJS", "Node", "CSS", "Typescript"],
    },
    {
      id: 2,
      title: "Currency Converter Project",
      desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
      img: "/mypro5.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
      id: 3,
      title: "Static Interactive Resume",
      desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
      img: "/mypro3.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
      id: 4,
      title: "Simple Calculator Project",
      desc: "A basic HTML CSS and TypeScript calculator for performing essential arithmetic operations.",
      img: "/mypro2.PNG",
      tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
      id: 5,
      title: "Todo List",
      desc: "CLI Todo List Application",
      img: "/mypro.png",
      tags: ["HTML", "Node", "CSS", "Typescript"],
    },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32 bg-gray-900">
      <Heading title={'My Projects'} />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
