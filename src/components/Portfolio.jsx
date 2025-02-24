import React, { useState } from "react";
import AnitaImg from "../assets/projects/anita.png";
import CarharttImg from "../assets/projects/carhartt.png";
import FreespaceImg from "../assets/projects/freespace.png";
import EdwwinImg from "../assets/projects/edwin.png";
import PortfolioImg from "../assets/projects/portfolio.jpg";
import RequestifyImg from "../assets/projects/requestify.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const portfolios = [
    {
      id: 1,
      src: FreespaceImg,
      href: "https://github.com/mehdiaichouch2002/Freespace",
      title: "Freespace",
      hosted: false,
      category: "opensource",
      description: "A space management application",
      tech: ["PHP"],
    },
    {
      id: 2,
      src: RequestifyImg,
      href: "https://github.com/mehdiaichouch2002/Requestify",
      title: "Requestify",
      hosted: false,
      category: "opensource",
      description: "Request management system",
      tech: ["Laravel"],
    },
    {
      id: 3,
      src: CarharttImg,
      href: "https://b2b.carhartt-wip.com",
      title: "B2B Carhartt WIP",
      hosted: true,
      category: "commercial",
      description: "B2B e-commerce platform",
      tech: ["Magento 2"],
    },
    {
      id: 4,
      src: AnitaImg,
      href: "https://www.anita.com",
      title: "Anita",
      hosted: true,
      category: "commercial",
      description: "E-commerce website",
      tech: ["Magento 2"],
    },
    {
      id: 5,
      src: EdwwinImg,
      href: "https://edwin-europe.com",
      title: "Edwin",
      hosted: true,
      category: "commercial",
      description: "Fashion retail platform",
      tech: ["Magento 2"],
    },
    {
      id: 6,
      src: PortfolioImg,
      href: "https://github.com/mehdiaichouch2002/reart-portfolio",
      title: "Portfolio",
      hosted: false,
      category: "personal",
      description: "Personal portfolio website",
      tech: ["React", "Tailwind"],
    },
  ];

  const filteredPortfolios =
    filter === "all"
      ? portfolios
      : portfolios.filter((project) => project.category === filter);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the projects I've recently worked on, encompassing
            commercial applications, open-source contributions, and personal
            ventures.{" "}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {["all", "commercial", "opensource", "personal"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all
        ${
          filter === category
            ? "bg-cyan-500 text-white"
            : "bg-gray-800 text-gray-400 hover:bg-gray-700"
        }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredPortfolios.map((project) => (
    <div 
      key={project.id}
      className="bg-gray-800 rounded-xl overflow-hidden md:transform md:hover:scale-105 transition-all duration-300 shadow-xl"
    >
      <div className="relative group bg-white">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {/* Desktop hover overlay - hidden on mobile */}
        <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
            <afterEach
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-all"
            >
              {project.hosted ? "View Live" : "View Code"}
            </afterEach>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Mobile View Button */}
        <div className="block lg:hidden mt-4 text-center">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-block text-center bg-cyan-500 text-white px-6 py-2.5 rounded-full hover:bg-cyan-600 transition-all font-medium"
          >
            {project.hosted ? "View Live" : "View Code"}
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Portfolio;
