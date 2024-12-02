"use client";

import React, { useState } from "react";

const SubmitContactButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className={`w-full px-6 py-3 text-white rounded-lg transition ${
        success
          ? "bg-green-600 hover:bg-green-700"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
      disabled={loading || success}
    >
      {loading ? "Submitting..." : success ? "Submitted!" : "Submit"}
    </button>
  );
};

export default SubmitContactButton;
