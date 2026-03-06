import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

const CATEGORIES = ["all", "commercial", "opensource", "personal"];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t("portfolio.title").split(" ").length > 1 ? (
              <>
                {t("portfolio.title").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-cyan-400">
                  {t("portfolio.title").split(" ").slice(-1)[0]}
                </span>
              </>
            ) : (
              <span className="text-cyan-400">{t("portfolio.title")}</span>
            )}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("portfolio.description")}
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
              {t(`portfolio.categories.${category}`)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPortfolios.map((project) => (
              <ProjectCard
                key={project.id}
                project={{
                  ...project,
                  description: t(`portfolio.projects.${project.descriptionKey}`),
                  viewLabel: t(project.hosted ? "portfolio.viewLive" : "portfolio.viewCode"),
                }}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
