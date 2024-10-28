"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiXCircle } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-black p-4 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-medium text-white">nick-Faizee</div>
        <ul className={`hidden md:flex gap-10 lg:gap-16`}>
          <li>
            <Link href="#hero" className="text-white hover:text-pink-400">HOME</Link>
          </li>
          <li>
            <Link href="#about" className="text-white hover:text-pink-400">ABOUT</Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-pink-400">PROJECTS</Link>
          </li>
          <li>
            <Link href="#skills" className="text-white hover:text-pink-400">SKILLS</Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-pink-400">CONTACT</Link>
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <HiXCircle size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden absolute top-16 right-0 w-48 bg-gray-800 p-4 space-y-4 z-20">
          <li>
            <Link href="#hero" className="text-white hover:text-pink-400" onClick={toggleMenu}>HOME</Link>
          </li>
          <li>
            <Link href="#about" className="text-white hover:text-pink-400" onClick={toggleMenu}>ABOUT</Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-pink-400" onClick={toggleMenu}>PROJECTS</Link>
          </li>
          <li>
            <Link href="#skills" className="text-white hover:text-pink-400" onClick={toggleMenu}>SKILLS</Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-pink-400" onClick={toggleMenu}>CONTACT</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
