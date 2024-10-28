import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container bg-gray-900 p-8 rounded-lg shadow-[0_0_15px_5px_rgba(231,164,231,0.6)] border border-purple-500">
      <div className="grid md:grid-cols-2 gap-10 text-white">
        {/* Contact Information Section */}
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">Get in touch</h2>
          <p className="text-gray-400 text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me an email, give me a call, or send a message using the form below.
          </p>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <MdOutlineMail size={30} className="text-purple-300" /> faizee956@gmail.com
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} className="text-purple-300" /> +923112221305
          </div>
        </div>
        
        {/* Contact Form Section */}
        <div className="space-y-8">
          {/* Name Field */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name" className="text-purple-300">Name</label>
            <input 
              type="text" 
              className="h-[40px] bg-gray-800 border border-purple-500 rounded-md text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" 
              id="name" 
            />
          </div>
          
          {/* Email Field */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email" className="text-purple-300">Email</label>
            <input 
              type="text" 
              className="h-[40px] bg-gray-800 border border-purple-500 rounded-md text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" 
              id="email" 
            />
          </div>
          
          {/* Message Field */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="message" className="text-purple-300">Message</label>
            <textarea 
              className="bg-gray-800 border border-purple-500 rounded-md text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" 
              id="message" 
              rows={8}>
            </textarea>
          </div>
          
          {/* Send Button */}
          <button 
            className="bg-purple-500 hover:bg-purple-600 p-2 px-6 rounded-md text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400" 
            data-aos="zoom-in-up">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
