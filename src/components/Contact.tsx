"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="ml-64 bg-white p-10">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-700 mb-6">
        Contact HFT Consultancy for accelerators, IP cores, security enhancements, network optimization, and HFT modeling. We specialize in providing high-performance solutions tailored to meet the rigorous demands of high-frequency trading environments. Reach out today to learn how we can help you achieve your goals with cutting-edge technology and expert guidance.
      </p>
      <div className="flex flex-wrap">
        <form className="space-y-6 flex-grow pr-8">
          {/* Name Field */}
          <div
            className={`relative border rounded-lg p-2 flex items-center transition ${
              focusedField === "name" || name
                ? "bg-blue-100 border-blue-400"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <FaUser className="text-gray-500 ml-2" />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent pl-3 text-gray-700 outline-none"
            />
          </div>

          {/* Email Field */}
          <div
            className={`relative border rounded-lg p-2 flex items-center transition ${
              focusedField === "email" || email
                ? "bg-blue-100 border-blue-400"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <FaEnvelope className="text-gray-500 ml-2" />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent pl-3 text-gray-700 outline-none"
            />
          </div>

          {/* Message Field */}
          <div
            className={`relative border rounded-lg p-2 flex items-start transition ${
              focusedField === "message" || message
                ? "bg-blue-100 border-blue-400"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <FaComment className="text-gray-500 ml-2 mt-1" />
            <textarea
              placeholder="Your Message"
              value={message}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full bg-transparent pl-3 text-gray-700 outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
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
