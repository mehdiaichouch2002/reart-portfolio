import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import technologies from "../data/technologies";

const NextArrow = ({ onClick }) => (
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

const PrevArrow = ({ onClick }) => (
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

const settings = {
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  appendDots: (dots) => (
    <div style={{ borderRadius: "10px", padding: "10px" }}>
      <ul>{dots}</ul>
    </div>
  ),
};

const Experience = () => {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-20 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-extrabold inline border-b-4 border-cyan-500">
            Skills
          </p>
          <p className="py-6 text-gray-400">
            These are the technologies I've worked with
          </p>
        </div>

        <Slider {...settings}>
          {technologies.map(({ id, src, title, style, documentation }) => (
            <div
              key={id}
              className="py-2 rounded-lg flex flex-col justify-center items-center"
            >
              <a href={documentation} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt={title}
                  className="w-20 h-40 mx-auto mb-2 object-contain cursor-pointer duration-200 hover:scale-125"
                />
              </a>
              <p
                className={
                  "text-center pb-2 font-bold mt-auto shadow-md mx-5 " + style
                }
              >
                {title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Experience;
