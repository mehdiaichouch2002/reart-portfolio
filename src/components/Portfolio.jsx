import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

const CATEGORIES = ["all", "commercial", "opensource", "personal"];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const countFor = (cat) =>
    cat === "all" ? projects.length : projects.filter((p) => p.category === cat).length;

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
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

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 border border-gray-700"
              }`}
            >
              {t(`portfolio.categories.${cat}`)}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                  filter === cat
                    ? "bg-white/20 text-white"
                    : "bg-gray-700 text-gray-400"
                }`}
              >
                {countFor(cat)}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <ProjectCard
                  project={{
                    ...project,
                    description: t(`portfolio.projects.${project.descriptionKey}`),
                    viewLabel: t(project.hosted ? "portfolio.viewLive" : "portfolio.viewCode"),
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
