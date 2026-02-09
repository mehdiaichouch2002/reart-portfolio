import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 3000);
    return () => clearTimeout(timer);
  }, [notification]);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isLoading]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setFormErrors((prev) => ({
        ...prev,
        email: value.trim() ? !EMAIL_REGEX.test(value) : false,
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    for (const field in formData) {
      if (!formData[field].trim()) {
        errors[field] = true;
      }
    }

    if (formData.email.trim() && !EMAIL_REGEX.test(formData.email)) {
      errors.email = true;
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);
    try {
      await axios.post("https://getform.io/f/pboxkmga", formData);
      setFormData({ name: "", email: "", message: "" });
      setNotification("success");
    } catch {
      setNotification("error");
    }
    setIsLoading(false);
  };

  return (
    <div
      name="contact"
      className="py-20 w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Contact
          </p>
          <p className="py-6 text-gray-400">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={`p-3 bg-gray-900/50 border-2 rounded-lg text-white focus:outline-none transition-all duration-300 ${
                formErrors.name
                  ? "border-red-500 ring-2 ring-red-500/20"
                  : "border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              }`}
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`p-3 bg-gray-900/50 border-2 rounded-lg text-white focus:outline-none transition-all duration-300 ${
                formErrors.email
                  ? "border-red-500 ring-2 ring-red-500/20"
                  : "border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              }`}
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className={`resize-none p-3 bg-gray-900/50 border-2 rounded-lg text-white focus:outline-none transition-all duration-300 ${
                formErrors.message
                  ? "border-red-500 ring-2 ring-red-500/20"
                  : "border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              }`}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 mx-auto flex items-center rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Let's talk"}
            </button>
          </form>
        </div>
      </div>

      {/* Notification */}
      <div
        className={`fixed top-20 left-0 right-0 mx-auto max-w-md z-50 transform transition-all duration-500 ease-in-out ${
          notification
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 py-3 rounded-lg mx-4 shadow-lg ${
            notification === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          <span className="font-medium">
            {notification === "success"
              ? "Mail sent successfully!"
              : "Error submitting form. Please try again."}
          </span>
          <button
            onClick={() => setNotification(null)}
            className="ml-4 text-white/80 hover:text-white transition-colors bg-transparent border-none"
            aria-label="Close notification"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative z-10">
            <div
              className="h-12 w-12 animate-spin rounded-full border-4 border-white border-r-transparent"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
