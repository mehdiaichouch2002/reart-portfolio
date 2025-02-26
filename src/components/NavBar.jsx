import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Home, User, Code, Briefcase } from "lucide-react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", icon: Home },
    { id: 2, link: "about", icon: User },
    { id: 3, link: "portfolio", icon: Code },
    { id: 4, link: "skills", icon: Briefcase },
  ];

  useEffect(() => {
    if (nav) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [nav]);

  return (
    <nav className="z-50 flex justify-between items-center w-full text-white h-20 fixed bg-gradient-to-r from-gray-900 to-gray-800 px-4 lg:px-8 shadow-lg">
      {/* Logo */}
      <div>
        <h1 className="text-4xl font-signature cursor-pointer bg-gradient-to-r py-1 from-cyan-500 to-white bg-clip-text text-transparent bg-[length:200%_100%] hover:bg-[position:100%_50%] transition-all duration-500">
          Mehdi
        </h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li key={id} className="relative group">
            <Link
              to={link}
              smooth
              duration={500}
              className="capitalize font-medium text-gray-400 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              {link}
              <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-2 z-10 text-gray-400 md:hidden hover:text-white transition-colors duration-300"
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
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-4 w-full">
            {/* Logo */}
            <div>
              <h1 className="text-4xl font-signature pt-2 cursor-pointer bg-gradient-to-r from-cyan-500 to-white bg-clip-text text-transparent bg-[length:200%_100%] hover:bg-[position:100%_50%] transition-all duration-500">
                Mehdi
              </h1>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setNav(false)}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTimes size={25} />
            </button>
          </div>
          <div className="flex flex-col items-start justify-center flex-grow space-y-2">
            {links.map(({ id, link, icon: Icon }) => (
              <li
                key={id}
                className="w-full group hover:bg-gray-700/50 rounded-lg transition-all duration-300"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                  className="flex items-center gap-4 px-6 py-4 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Icon
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                  <span className="font-medium capitalize">{link}</span>
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
