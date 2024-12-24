import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ title, date, description, index, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className={`relative w-full md:w-[calc(50%-24px)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
  >
    <div className="absolute left-[-10px] top-0 h-full md:hidden">
      <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-md shadow-cyan-400/20" />
      <div className="w-[1.5px] h-full bg-cyan-400/20 mx-auto mt-0" />
    </div>

    <div className={`md:bg-gray-800/70 p-3 rounded-md hover:bg-gray-800/80 transition-all duration-300 shadow-sm 
      ${isLeft ? 'md:pr-6' : 'md:pl-6'}
      ml-0`}>
      <div className="flex flex-col gap-1">
        <h3 className="text-md md:text-lg font-semibold text-cyan-400">{title}</h3>
        <span className="text-xs font-medium w-fit px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
          {date}
        </span>
      </div>
      <p className="mt-1 text-xs md:text-sm text-gray-300 leading-snug">{description}</p>
    </div>

    <div className={`absolute top-5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm hidden md:block
      ${isLeft ? 'right-[-28px]' : 'left-[-28px]'}`} />
    <div className={`absolute top-6 w-[18px] h-[1.5px] bg-cyan-400/30 hidden md:block
      ${isLeft ? 'right-[-18px]' : 'left-[-18px]'}`} />
  </motion.div>
);

const About = () => {
  const timelineEvents = [
    {
      title: "Morocommerce, FES — Magento Developer",
      date: "Dec 2023 - PRESENT",
      description: "Developed, optimized, and used PHP, JavaScript, and TypeScript for Magento Commerce websites. Focused on contemporary front-end frameworks like ReactJS and Magento 2.",
      type: "left"
    },
    {
      title: "Internship",
      date: "Aug 2023 - Dec 2023",
      description: "Developed a functional HR application using PHP, streamlining HR processes and improving organizational efficiency within one month.",
      type: "right"
    },
    {
      title: "ISTA Adarissa, FES — TS in Digital Development",
      date: "2021 - 2023",
      description: "Obtained skills in React.js, Laravel, managing databases, and diverse web technologies while obtaining a diploma as a full-stack web development specialized technician.",
      type: "left"
    },
    
    {
      title: "English Studies — Faculty of Humanities, Fez",
      date: "2020 - 2021",
      description: "Focused on developing proficiency in the English language and enhancing communication skills.",
      type: "right"
    },
    {
      title: "Ahmed Zaki Alaoui HS, FES — High School Degree",
      date: "2020",
      description: "Gained foundational knowledge and skills, preparing for higher education.",
      type: "left"
    }
  ];

  return (
    <section className="min-h-screen py-14 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-4xl px-6 md:px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2 border-b-2 border-cyan-400">
            About Me
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1.5px] bg-cyan-400/20 hidden md:block" />

          <div className="relative">
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
