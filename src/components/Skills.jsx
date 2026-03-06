import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import technologies from "../data/technologies";
import { NextArrow, PrevArrow } from "./SliderArrows";
import { useLanguage } from "../context/LanguageContext";

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  appendDots: (dots) => (
    <div style={{ borderRadius: "10px", padding: "10px" }}>
      <ul>{dots}</ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const Skills = () => {
  const { t } = useLanguage();
  return (
  <div
    name="skills"
    className="bg-gradient-to-b from-gray-800 to-black w-full py-20 text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8 text-center">
        <p className="text-4xl font-extrabold inline border-b-4 border-cyan-500">
          {t("skills.title")}
        </p>
        <p className="py-6 text-gray-400">
          {t("skills.description")}
        </p>
      </div>

      <Slider {...SLIDER_SETTINGS}>
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
            <p className={"text-center pb-2 font-bold mt-auto shadow-md mx-5 " + style}>
              {title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default Skills;
