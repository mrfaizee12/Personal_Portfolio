import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page from reloading

    // Set success message
    setSuccessMessage('Message sent successfully!');

    // Clear form fields
    setFormData({ name: '', email: '', message: '' });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

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
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Success Message */}
          {successMessage && (
            <div className="text-green-500 font-semibold">{successMessage}</div>
          )}
          
          {/* Name Field */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name" className="text-purple-300">Name</label>
            <input 
              type="text" 
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="h-[40px] bg-gray-800 border border-purple-500 rounded-md text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" 
            />
          </div>
          
          {/* Email Field */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email" className="text-purple-300">Email</label>
            <input 
              type="email" 
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="h-[40px] bg-gray-800 border border-purple-500 rounded-md text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" 
            />
          </div>
          
          {/* Message Field */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="message" className="text-purple-300">Message</label>
            <textarea 
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={8}
              className="bg-gray-800 border border-purple-500 rounded-md text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-400" 
            />
          </div>
          
          {/* Send Button */}
          <button 
            type="submit" // Ensure this is "submit" so it triggers onSubmit
            className="bg-purple-500 hover:bg-purple-600 p-2 px-6 rounded-md text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400" 
            data-aos="zoom-in-up">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
