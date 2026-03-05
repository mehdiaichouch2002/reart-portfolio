import React from "react";

export const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute ml-5 top-1/2 right-0 -translate-y-1/2 text-gray-400 hover:text-cyan-400 w-10 h-10 flex justify-center items-center focus:outline-none xl:-right-8 transition-colors duration-300"
    aria-label="Next slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

export const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 flex justify-center items-center text-gray-400 hover:text-cyan-400 focus:outline-none xl:-left-8 transition-colors duration-300"
    aria-label="Previous slide"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);
