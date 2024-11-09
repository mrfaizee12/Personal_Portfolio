import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center py-16 bg-gray-950 text-white px-6">
      <div className="flex flex-col lg:flex-row items-center max-w-screen-lg">
        
        {/* Egg-shaped Image with Glowing Border */}
        <div className="relative flex justify-center lg:mr-10 mb-8 lg:mb-0" data-aos="flip-left">
          <div className="w-64 h-80 bg-black rounded-full border-4 border-purple-500 p-1 flex items-center justify-center shadow-[0_0_15px_5px_rgba(231,164,231,0.6)]">
            <Image
              src="/about.png"
              alt="About Faizan Anjum"
              width={300}
              height={300}
              className="rounded-full object-cover"
              style={{ clipPath: 'ellipse(50% 60% at 50% 50%)' }} // Tailwind doesn’t support ellipse, so custom style is used
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-purple-300" data-aos="zoom-in-up">
            About Me
          </h2>
          <p className="text-gray-300 text-lg" data-aos="zoom-in-up">
           {`Hello! I'm Faizan Anjum, a passionate software developer. I completed my pre-engineering studies up to the intermediate level, and now I’m diving deep into the world of software development. Skilled in frontend, backend, and full-stack technologies such as HTML, CSS, JavaScript, TypeScript, and currently exploring Next.js, I’m also learning about certified cloud technologies, applied generative AI, Web 3.0, and the Metaverse. I love combining my creativity with technology to build innovative and impactful digital solutions!`} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
