import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container pt-32 bg-gray-900 p-8 rounded-lg shadow-[0_0_15px_5px_rgba(231,164,231,0.6)] border border-purple-500">
      <div className="grid md:grid-cols-2 gap-20 items-center text-white">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">Technologies I Work with</h2>
          <p className="text-gray-400 pt-2">
            I am currently learning HTML, CSS, and TypeScript, and can create responsive websites using these technologies. My goal is to become a Full Stack Web Developer, and I am actively working on enhancing my skills in both frontend and backend development. Currently, I am learning Next.js to further strengthen my knowledge of building modern web applications. I am passionate about coding and eager to explore new tools and frameworks that will help me achieve my full stack development ambitions.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-3xl sm:text-4xl text-purple-300 space-y-2">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">TailwindCSS</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
