import React from "react";
import useContactForm from "../hooks/useContactForm";
import LoadingOverlay from "./common/LoadingOverlay";
import Notification from "./common/Notification";

const inputClass = (hasError) =>
  `p-3 bg-gray-900/50 border-2 rounded-lg text-white focus:outline-none transition-all duration-300 ${
    hasError
      ? "border-red-500 ring-2 ring-red-500/20"
      : "border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
  }`;

const Contact = () => {
  const {
    formData,
    formErrors,
    isLoading,
    notification,
    handleChange,
    handleSubmit,
    setNotification,
  } = useContactForm();

  return (
    <div
      name="contact"
      className="py-20 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
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
              className={inputClass(formErrors.name)}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass(formErrors.email)}
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className={`resize-none ${inputClass(formErrors.message)}`}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 w-full sm:w-auto sm:mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Let's talk"}
            </button>
          </form>
        </div>
      </div>

      <Notification type={notification} onClose={() => setNotification(null)} />
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default Contact;
