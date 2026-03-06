import React from "react";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const timelineEvents = t("timeline");

  return (
    <section
      name="about"
      className="py-20 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-4xl px-6 md:px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2 border-b-2 border-cyan-400">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1.5px] bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent hidden md:block" />

          <div className="relative space-y-4 md:space-y-6">
            {timelineEvents.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                index={index}
                isLeft={item.type === "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
