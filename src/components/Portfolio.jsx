import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

const CATEGORIES = ["all", "commercial", "opensource", "personal"];

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-48">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-48 object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredPortfolios =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the projects I've recently worked on, encompassing
            commercial applications, open-source contributions, and personal
            ventures.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 border border-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPortfolios.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/80 border border-gray-700/50 rounded-xl overflow-hidden md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-cyan-500/10 transition-all duration-300 shadow-xl"
              >
                <div className="relative group bg-white">
                  <ImageWithSkeleton src={project.src} alt={project.title} />
                  {/* Desktop hover overlay */}
                  <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-all"
                      >
                        {project.hosted ? "View Live" : "View Code"}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/70 text-cyan-400 rounded-full text-sm border border-gray-600/50"
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
