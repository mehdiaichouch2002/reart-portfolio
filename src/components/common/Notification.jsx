import React from "react";
import { FiX } from "react-icons/fi";

const Notification = ({ type, onClose, successMsg, errorMsg }) => (
  <div
    role="status"
    aria-live="polite"
    className={`fixed top-20 inset-x-0 mx-auto max-w-md z-50 px-4 transition-all duration-300 ${
      type ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
    }`}
  >
    {type && (
      <div
        className={`flex items-start justify-between gap-4 px-4 py-3 rounded-md shadow-lg text-canvas ${
          type === "success" ? "bg-live" : "bg-danger"
        }`}
      >
        <span className="font-medium">{type === "success" ? successMsg : errorMsg}</span>
        <button onClick={onClose} className="text-canvas/70 hover:text-canvas" aria-label="Close notification">
          <FiX size={18} />
        </button>
      </div>
    )}
  </div>
);

export default Notification;
