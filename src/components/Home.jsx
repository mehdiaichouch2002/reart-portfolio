import React from "react";
import heroImg from "../assets/portfolio/me.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full pt-32 md:pt-52 bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            I'm a Magento 2 Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            Passionate Fullstack & Magento Developer | Crafting Seamless Digital
            Experiences | Proficient in Programming, Web Development, and
            Application Creation | Adaptable Team Player with a Creative &
            Curious Mindset | Committed to Continuous Learning & Professional
            Growth
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex justify-center">
          <img
            src={heroImg}
            alt="my profile"
            className="rounded-2xl w-1/2 md:w-2/3 md:h-auto md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
