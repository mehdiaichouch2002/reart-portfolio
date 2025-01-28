import React from "react";
import AnitaImg from "../assets/projects/anita.png";
import CarharttImg from "../assets/projects/carhartt.png";
import FreespaceImg from "../assets/projects/freespace.png";
import EdwwinImg from "../assets/projects/edwin.png";
import PortfolioImg from "../assets/projects/portfolio.jpg";
import RequestifyImg from "../assets/projects/requestify.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: FreespaceImg,
      href: "https://github.com/mehdiaichouch2002/Freespace",
      title: "Freespace",
      hosted : false
    },
    {
      id: 2,
      src: RequestifyImg,
      href: "https://github.com/mehdiaichouch2002/Requestify",
      title: "Requestify",
      hosted : false
    },
    {
      id: 3,
      src: CarharttImg,
      href: "https://b2b.carhartt-wip.com",
      title: "B2B Carhartt WIP",
      hosted : true
    },
    {
      id: 4,
      src: AnitaImg,
      href: "https://www.anita.com",
      title: "Anita",
      hosted : true
    },
    {
      id: 5,
      src: EdwwinImg,
      href: "https://edwin-europe.com",
      title: "Edwin",
      hosted : true
    },
    {
      id: 6,
      src: PortfolioImg,
      href: "https://github.com/mehdiaichouch2002/reart-portfolio",
      title: "Portfolio",
      hosted : true
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b py-32 from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-extrabold inline border-b-4 border-cyan-500">
            Portfolio
          </p>
          <p className="py-6 text-lg text-gray-300">
            Explore some projects I have worked on below.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, href, title, hosted }) => (
            <div
              key={id}
              className="rounded-lg transform hover:scale-105 duration-300 bg-gray-900 shadow-lg"
            >
              <img
                src={src}
                alt={title}
                className="rounded-t-lg object-cover h-48 w-full bg-white"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-cyan-400 text-center">
                  {title}
                </h3>
              </div>
              <div className="flex items-center justify-center pb-4">
                <a
                  href={href}
                  className="px-6 py-3 m-2 text-sm bg-cyan-500 text-black font-medium rounded-md shadow-md hover:bg-cyan-600 hover:shadow-lg transition-all"
                  target="_blank"
                  rel="noreferrer"
                >
                  { hosted ? "View in Live" : "View Code"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
