import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import navLinks from "../data/navLinks";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeNav = useCallback(() => setNav(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [nav]);

  return (
    <>
      {/* Top Nav Bar */}
      <nav
        className={`z-50 flex justify-between items-center w-full text-white h-20 fixed top-0 left-0 px-4 lg:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-gradient-to-r from-gray-900 to-gray-800"
        }`}
      >
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-signature cursor-pointer bg-gradient-to-r py-1 from-cyan-500 to-white bg-clip-text text-transparent bg-[length:200%_100%] hover:bg-[position:100%_50%] transition-all duration-500">
            Mehdi
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ id, link }) => (
            <li key={id} className="relative group">
              <Link
                to={link}
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveSection(link)}
                className={`capitalize font-medium transition-colors duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 ${
                  activeSection === link
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-in-out ${
                    activeSection === link
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setNav(true)}
          className="cursor-pointer p-2 text-gray-400 md:hidden hover:text-white transition-colors duration-300 bg-transparent border-none"
          aria-label="Open menu"
        >
          <FaBars size={28} />
        </button>
      </nav>

      {/* Mobile Backdrop - rendered outside nav */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity duration-300 ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      />

      {/* Mobile Sidebar - rendered outside nav */}
      <div
        className={`fixed top-0 left-0 w-[280px] max-w-[80vw] h-full bg-gray-900 z-[70] md:hidden transform transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
            <h1 className="text-3xl font-signature bg-gradient-to-r from-cyan-500 to-white bg-clip-text text-transparent">
              Mehdi
            </h1>
            <button
              onClick={closeNav}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-300 bg-transparent border-none"
              aria-label="Close menu"
            >
              <FaTimes size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {navLinks.map(({ id, link, icon: Icon }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    onClick={closeNav}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                  >
                    <Icon
                      size={20}
                      className="text-gray-500 flex-shrink-0"
                    />
                    <span className="font-medium capitalize text-[15px]">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-5 py-4 border-t border-gray-800">
            <p className="text-gray-600 text-xs text-center">
              &copy; {new Date().getFullYear()} Mehdi | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
