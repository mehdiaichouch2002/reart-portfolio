import React from "react";
import { motion } from "framer-motion";
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
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2 border-b-2 border-cyan-400">
            {t("skills.title")}
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            {t("skills.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Slider {...SLIDER_SETTINGS}>
            {technologies.map(({ id, src, title, style, documentation }) => (
              <div
                key={id}
                className="px-3 py-2 focus:outline-none"
              >
                <a
                  href={documentation}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-800/40 border border-gray-700/40 hover:border-cyan-500/40 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <img
                    src={src}
                    alt={title}
                    className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className={`text-center text-sm font-semibold ${style}`}>
                    {title}
                  </p>
                </a>
              </div>
            ))}
          </Slider>
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;
