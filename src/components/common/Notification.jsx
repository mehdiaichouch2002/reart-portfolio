import React from "react";

const Notification = ({ type, onClose }) => (
  <div
    className={`fixed top-20 left-0 right-0 mx-auto max-w-md z-50 transform transition-all duration-500 ease-in-out ${
      type ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
    }`}
  >
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-lg mx-4 shadow-lg ${
        type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
      }`}
    >
      <span className="font-medium">
        {type === "success"
          ? "Mail sent successfully!"
          : "Error submitting form. Please try again."}
      </span>
      <button
        onClick={onClose}
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
);

export default Notification;
