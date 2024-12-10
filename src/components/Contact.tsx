"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitting: boolean;
    succeeded: boolean;
    error: string | null;
  }>({
    submitting: false,
    succeeded: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitting: true, succeeded: false, error: null });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "fca21106-2e90-411a-bbe2-2a737bebcdf0", // Replace with your Web3Forms Access Key
          ...formData,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setFormStatus({ submitting: false, succeeded: true, error: null });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      if (error instanceof Error) {
        setFormStatus({ submitting: false, succeeded: false, error: error.message });
      } else {
        setFormStatus({ submitting: false, succeeded: false, error: "An unknown error occurred." });
      }
    }
  };

  return (
    <section id="contact" className="bg-white p-10">
      <h2 className="text-3xl text-black font-bold text-center mb-4">Get In Touch</h2>
      <p className="text-gray-700 text-center mb-6">
        Have a question, need a consultation, or want to discuss your requirements? 
        Fill out the form below or use the provided contact details, and we will get back to you 
        within 24 hours on working days. We are here to help you achieve your goals with cutting-edge solutions.
      </p>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md">
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          <form
            className="space-y-6 flex-grow lg:w-2/3"
            onSubmit={handleSubmit}
          >
            <div className="relative border rounded-lg p-2 flex items-center bg-gray-100 border-gray-300">
              <FaUser className="text-gray-500 ml-2" />
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent pl-3 text-gray-700 outline-none"
                aria-label="Your Name"
                required
              />
            </div>

            <div className="relative border rounded-lg p-2 flex items-center bg-gray-100 border-gray-300">
              <FaEnvelope className="text-gray-500 ml-2" />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent pl-3 text-gray-700 outline-none"
                aria-label="Your Email"
                required
              />
            </div>

            <div className="relative border rounded-lg p-2 flex items-start bg-gray-100 border-gray-300">
              <FaComment className="text-gray-500 ml-2 mt-1" />
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent pl-3 text-gray-700 outline-none resize-none"
                aria-label="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              disabled={formStatus.submitting}
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {formStatus.submitting ? "Submitting..." : "Submit"}
            </button>

            {formStatus.succeeded && (
              <p className="text-green-500 text-center mt-4">
                Thank you! Your message has been sent.
              </p>
            )}
            {formStatus.error && (
              <p className="text-red-500 text-center mt-4">
                {formStatus.error}
              </p>
            )}
          </form>

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
