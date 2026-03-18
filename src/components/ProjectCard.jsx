import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ImageWithSkeleton from "./ImageWithSkeleton";

const CATEGORY_STYLES = {
  commercial: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  opensource: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  personal: "bg-violet-500/20 text-violet-400 border-violet-500/30",
};

const ProjectCard = ({ project }) => {
  const Icon = project.hosted ? FiExternalLink : FiGithub;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-gray-800/80 border border-gray-700/50 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-gray-600/60 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-white aspect-video">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <ImageWithSkeleton src={project.src} alt={project.title} />
        </div>

        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${
            CATEGORY_STYLES[project.category] ?? "bg-gray-700/60 text-gray-300 border-gray-600/30"
          }`}
        >
          {project.category}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-cyan-500 text-white px-5 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:bg-cyan-400"
          >
            <Icon size={15} />
            {project.viewLabel}
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1.5">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 bg-gray-700/70 text-cyan-400 rounded-full text-xs border border-gray-600/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Mobile link button */}
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="lg:hidden flex-shrink-0 flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <Icon size={15} />
            {project.viewLabel}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
