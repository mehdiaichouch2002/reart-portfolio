import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isLoading) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isLoading]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormErrors({ ...formErrors, email: !emailRegex.test(value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    for (const field in formData) {
      if (!formData[field].trim()) {
        errors[field] = true;
      }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = true;
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      try {
        await axios.post("https://getform.io/f/pboxkmga", formData);
        setFormData({ name: "", email: "", message: "" });
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      } catch (error) {
        setShowErrorMessage(true);
      }
      setIsLoading(false);
    }
  };

  const successMessage = (
    <div
      className={`font-bold fixed top-20 left-0 right-0 mx-auto flex items-center justify-center transform transition-transform duration-500 ease-in-out ${
        showSuccessMessage
          ? "bg-green-700 text-green-950 translate-y-0"
          : showErrorMessage
          ? "bg-red-700 text-red-950 translate-y-0"
          : "-translate-y-full"
      }`}
    >
      <p className="mr-2">
        {showSuccessMessage
          ? "Mail sent successfully"
          : showErrorMessage
          ? "Error submitting form"
          : ""}
      </p>
      {showSuccessMessage ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-green-900 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 0a10 10 0 110 20 10 10 0 010-20zM8.172 12.828a.5.5 0 00.707 0l5-5a.5.5 0 00-.707-.707L8.5 11.293 6.121 8.914a.5.5 0 00-.707.707l3 3z"
            clipRule="evenodd"
          />
        </svg>
      ) : showErrorMessage ? (
        <svg
          width="25px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bg-white m-0"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z"
            fill="#000000"
          />
        </svg>
      ) : null}
      <button
        onClick={() => setShowSuccessMessage(false)}
        className="text-green-950 cursor-pointer focus:outline-none absolute right-2"
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
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <div
      name="contact"
      className="pt-32 w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  inline  border-b-4  border-gray-500">
            Contact
          </p>
          <p
            onClick={() => {
              setShowErrorMessage(true);
            }}
            className="py-6"
          >
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                formErrors.name ? "border-red-500" : "border-gray-500"
              } ${formErrors.name ? "ring-2 ring-red-500" : ""}`}
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                formErrors.email ? "border-red-500" : "border-gray-500"
              } ${formErrors.email ? "ring-2 ring-red-500" : ""}`}
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className={`resize-none p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                formErrors.message ? "border-red-500" : "border-gray-500"
              } ${formErrors.message ? "ring-2 ring-red-500" : ""}`}
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto my-8 flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
      {(showSuccessMessage || showErrorMessage) && successMessage}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-400 opacity-50"></div>
          <div className="absolute z-50 flex items-center justify-center">
            <div
              className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
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
