import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";
import SubmitContactButton from "@/components/client/SubmitContactButton";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="ml-64 bg-white p-10">
      <h2 className="text-3xl text-black font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-700 mb-6">
        Have a question, need a consultation, or want to discuss your requirements? 
        Fill out the form below or use the provided contact details, and we'll get back to you 
        within 24 hours on working days. We're here to help you achieve your goals with cutting-edge solutions.
      </p>
      <div className="flex flex-wrap">
        <form className="space-y-6 flex-grow pr-8">
          {/* Name Field */}
          <div className="relative border rounded-lg p-2 flex items-center bg-gray-100 border-gray-300">
            <FaUser className="text-gray-500 ml-2" />
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full bg-transparent pl-3 text-gray-700 outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="relative border rounded-lg p-2 flex items-center bg-gray-100 border-gray-300">
            <FaEnvelope className="text-gray-500 ml-2" />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full bg-transparent pl-3 text-gray-700 outline-none"
            />
          </div>

          {/* Message Field */}
          <div className="relative border rounded-lg p-2 flex items-start bg-gray-100 border-gray-300">
            <FaComment className="text-gray-500 ml-2 mt-1" />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={4}
              className="w-full bg-transparent pl-3 text-gray-700 outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <SubmitContactButton />
        </form>

        {/* Contact Details */}
        <div className="text-gray-600 space-y-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-600 mr-3" />
            Ave. Tiradentes esq, Santo Domingo, 10124, Dominican Republic
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-blue-600 mr-3" />
            +1 849-492-4624
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-blue-600 mr-3" />
            info@hftconsultancy.com
          </div>
          <div className="flex items-center">
            <FaLinkedin className="text-blue-600 mr-3" />
            <a
              href="https://www.linkedin.com"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
