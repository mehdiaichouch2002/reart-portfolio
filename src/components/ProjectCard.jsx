import React from "react";
import { motion } from "framer-motion";
import ImageWithSkeleton from "./ImageWithSkeleton";

const ProjectCard = ({ project }) => (
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
      <div className="hidden lg:flex absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 items-center justify-center">
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
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

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
);

export default ProjectCard;
