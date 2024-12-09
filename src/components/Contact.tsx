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
    <section id="contact" className="bg-white p-10">
      <h2 className="text-3xl text-black font-bold text-center mb-4">Get In Touch</h2>
      <p className="text-gray-700 text-center mb-6">
        Have a question, need a consultation, or want to discuss your requirements? 
        Fill out the form below or use the provided contact details, and we will get back to you 
        within 24 hours on working days. Were here to help you achieve your goals with cutting-edge solutions.
      </p>

      {/* Container with Subtle Background */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-md">
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Contact Form */}
          <form className="space-y-6 flex-grow lg:w-2/3">
            {/* Name Field */}
            <div className="relative border rounded-lg p-2 flex items-center bg-gray-100 border-gray-300">
              <FaUser className="text-gray-500 ml-2" />
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-full bg-transparent pl-3 text-gray-700 outline-none"
                aria-label="Your Name"
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
                aria-label="Your Email"
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
                aria-label="Your Message"
              />
            </div>

            {/* Submit Button */}
            <SubmitContactButton />
          </form>

          {/* Contact Details */}
          <div className="text-gray-600 space-y-6 lg:w-1/3">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-600 mr-3" />
              <p>Ave. Tiradentes esq, Santo Domingo, 10124, Dominican Republic</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-600 mr-3" />
              <p>+1 849-492-4624</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 mr-3" />
              <p>info@hftconsultancy.com</p>
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
      </div>
    </section>
  );
};

export default Contact;
