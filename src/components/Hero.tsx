import React from 'react'; 
import Navbar from './Navbar';
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen bg-gray-900 flex flex-col items-center lg:flex-row lg:items-stretch pt-16"
    >
      <Navbar />
      
      {/* Profile Picture Section with Glowing Border */}
      <div className="flex justify-center lg:justify-end lg:order-2 lg:w-1/2 p-6 mt-10 lg:mr-20">
        <div className="w-48 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full bg-black flex items-center justify-center overflow-hidden border-4 border-purple-500 shadow-[0_0_15px_5px_rgba(231,164,231,0.6)]" data-aos="flip-left">
          <Image
            src="/profile.png"
            alt="Faizan's Profile"
            width={300}
            height={300}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Text and Buttons Section */}
      <div className="text-white lg:order-1 lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-12 space-y-6 p-6 mt-10 lg:ml-20 text-center lg:text-left">
        <div className="text-[40px] sm:text-[60px] md:text-[80px] font-bold leading-tight">
          <p data-aos="zoom-in-up">I'm</p>
          <p data-aos="zoom-in-up">Faizan</p>
          <p data-aos="zoom-in-up">Anjum</p>
        </div>
        
        {/* Buttons with Glowing Effect */}
        <div className="flex space-x-4">
          <a
            href="https://milestone01-2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-purple-950 text-white shadow-[0_0_10px_2px_rgba(231,164,231,0.6)] border border-purple-400 hover:bg-purple-600 transition"
          >
            View CV
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded bg-green-950 text-white shadow-[0_0_10px_2px_rgba(72,255,72,0.6)] border border-green-400 hover:bg-green-600 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="https://www.instagram.com/welcometofaizeecity/" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram className="text-white text-3xl hover:text-pink-500" />
          </a>
          <a href="https://web.facebook.com/faizan.anjum.7334" target="_blank" rel="noopener noreferrer">
            <IoLogoFacebook className="text-white text-3xl hover:text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/faizan-anjum-a044912b8/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-blue-500" />
          </a>
          <a href="https://github.com/mrfaizee12" target="_blank" rel="noopener noreferrer">
            <SiGithub className="text-white text-3xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
