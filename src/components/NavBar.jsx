import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
  ];

  useEffect(() => {
    if (nav) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [nav]);

  return (
    <nav className="z-50 flex justify-between items-center w-full text-white h-20 fixed bg-black px-4 lg:px-8">
      {/* Logo */}
      <div>
        <h1 className="text-4xl font-signature cursor-pointer">Mehdi</h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize font-medium text-gray-400 hover:text-white hover:scale-105 transition-transform"
          >
            <Link to={link} smooth duration={500} className="cursor-pointer">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-2 z-10 text-gray-400 md:hidden"
        aria-expanded={nav}
        role="button"
        tabIndex={0}
      >
        {!nav && <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setNav(false)}
      ></div>
      <ul
        className={`fixed top-0 md:hidden left-0 w-3/4 h-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setNav(false)}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTimes size={25} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start justify-center flex-grow space-y-6">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="w-full text-left capitalize font-medium text-gray-300 hover:text-white hover:bg-gray-700 px-6 py-4 rounded-r-lg transition duration-300 ease-in-out"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                  className="block"
                >
                  {link}
                </Link>
              </li>
            ))}
          </div>

          {/* Footer Section */}
          <div className="flex items-center justify-center pb-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Mehdi | All Rights Reserved</p>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;