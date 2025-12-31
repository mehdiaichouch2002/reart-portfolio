import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import c from "../assets/technologies/c++.png";
import magento from "../assets/technologies/magento.png";
import js from "../assets/technologies/js.png";
import tailwind from "../assets/technologies/tailwind.png";
import laravel from "../assets/technologies/laravel.png";
import github from "../assets/technologies/github.png";
import gitlab from "../assets/technologies/gitlab.png";
import mongodb from "../assets/technologies/mongodb.png";
import linux from "../assets/technologies/linux.png";
import php from "../assets/technologies/php.png";
import reactjs from "../assets/technologies/reactjs.png";
import bootstrap from "../assets/technologies/bootstrap.png";
import python from "../assets/technologies/python.png";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute ml-5 top-1/2 right-0 -translate-y-1/2 text-gray-400 w-10 h-10 flex justify-center items-center focus:outline-none xl:-right-8"
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
    className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 flex justify-center items-center text-gray-400 focus:outline-none xl:-left-8"
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

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      documentation: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      src: js,
      title: "Javascript",
      style: "shadow-yellow-500",
      documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      src: reactjs,
      title: "React",
      style: "shadow-blue-600",
      documentation: "https://reactjs.org/docs/getting-started.html",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      documentation: "https://tailwindcss.com/docs",
    },
    {
      id: 6,
      src: magento,
      title: "Magento 2",
      style: "shadow-orange-400",
      documentation: "https://devdocs.magento.com/",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
      documentation: "https://docs.github.com/",
    },
    {
      id: 8,
      src: php,
      title: "PHP",
      style: "shadow-indigo-600",
      documentation: "https://www.php.net/manual/",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
      documentation:
        "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    },
    {
      id: 10,
      src: linux,
      title: "Linux",
      style: "shadow-gray-400",
      documentation: "https://www.kernel.org/doc/",
    },
    {
      id: 11,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-500",
      documentation: "https://laravel.com/docs",
    },
    {
      id: 12,
      src: gitlab,
      title: "Gitlab",
      style: "shadow-orange-500",
      documentation: "https://docs.gitlab.com/",
    },
    {
      id: 13,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
      documentation: "https://www.mongodb.com/docs",
    },
    {
      id: 14,
      src: c,
      title: "C++",
      style: "shadow-blue-300",
      documentation: "https://devdocs.io/cpp",
    },
    {
      id: 15,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
      documentation: "https://docs.python.org/3/",
    },
  ];

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
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul>{dots} </ul>
      </div>
    ),
  };

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-extrabold inline border-b-4 border-cyan-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <Slider {...settings}>
          {techs.map(({ id, src, title, style, documentation }) => (
            <div
              key={id}
              className={
                "py-2 rounded-lg flex flex-col justify-center items-center"
              }
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
