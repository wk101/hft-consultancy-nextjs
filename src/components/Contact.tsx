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

// Web3Forms access keys are client-side identifiers, not secrets — they are
// meant to be visible in the browser. Reading it from the environment keeps it
// out of source so it can be rotated without a code change if it gets abused.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitting: boolean;
    succeeded: boolean;
    failed: boolean;
  }>({
    submitting: false,
    succeeded: false,
    failed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: a real person never fills a field they cannot see.
    const botcheck = new FormData(e.currentTarget).get("botcheck");
    if (botcheck) {
      // Report success to the bot and send nothing.
      setFormStatus({ submitting: false, succeeded: true, failed: false });
      return;
    }

    if (!ACCESS_KEY) {
      console.error(
        "NEXT_PUBLIC_WEB3FORMS_KEY is not set — the contact form cannot submit. See .env.example."
      );
      setFormStatus({ submitting: false, succeeded: false, failed: true });
      return;
    }

    setFormStatus({ submitting: true, succeeded: false, failed: false });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New enquiry from hftconsultancy.com",
          from_name: "HFT Consultancy website",
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Web3Forms responded ${response.status}`);
      }

      setFormData({ name: "", email: "", message: "" });
      setFormStatus({ submitting: false, succeeded: true, failed: false });
    } catch (error) {
      // Never surface the raw error to the visitor — it can leak the endpoint
      // and status codes. Log it for us, show a generic message to them.
      console.error("Contact form submission failed:", error);
      setFormStatus({ submitting: false, succeeded: false, failed: true });
    }
  };

  return (
    <section id="contact" className="bg-white px-6 sm:px-12 lg:px-16 py-10">
  <h2 className="text-3xl text-black font-bold text-center mb-4">Get In Touch</h2>
  <p className="text-gray-700 text-center mb-6">
    Have a question, need a consultation, or want to discuss your requirements? <br />
    Fill out the form below or use the provided contact details, and we will get back to you
    within 24 hours on working days. We are here to help you achieve your goals with cutting-edge solutions.
  </p>

  <div className="rounded-lg shadow-md p-6 sm:p-8 md:p-10">
    <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8">
      {/* Form Section */}
      <form
        className="flex-grow space-y-6 w-full lg:w-2/3"
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

        {/* Honeypot — hidden from people, tempting to bots. Not a real field. */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <button
          type="submit"
          disabled={formStatus.submitting}
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
        >
          {formStatus.submitting ? "Submitting..." : "Submit"}
        </button>

        {formStatus.succeeded && (
          <p className="text-green-600 text-center mt-4">
            Thank you! Your message has been sent.
          </p>
        )}
        {formStatus.failed && (
          <p className="text-red-600 text-center mt-4">
            Sorry, your message could not be sent. Please email us directly at{" "}
            <a href="mailto:info@hftconsultancy.com" className="underline">
              info@hftconsultancy.com
            </a>
            .
          </p>
        )}
      </form>

      {/* Contact Details Section */}
      <div className="w-full lg:w-1/3 text-gray-600 space-y-6">
        <div className="flex items-start">
          <FaMapMarkerAlt className="text-blue-600 mr-3" />
          <address className="not-italic">
            Ave. Tiradentes esq, Santo Domingo, <br /> 10124, Dominican Republic
          </address>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="text-blue-600 mr-3" />
          <a href="tel:+18494924624" className="hover:underline">
            +1 849-492-4624
          </a>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-blue-600 mr-3" />
          <a href="mailto:info@hftconsultancy.com" className="hover:underline">
            info@hftconsultancy.com
          </a>
        </div>
        <div className="flex items-center">
          <FaLinkedin className="text-blue-600 mr-3" />
          <a
            href="https://www.linkedin.com/company/hft-consultancy/"
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
