import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/portfolio/me.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";

const TypewriterRoles = ({ roles }) => {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const role = roles[roleIdx];
    let timer;
    if (phase === "typing") {
      if (displayed.length < role.length) {
        timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 70);
      } else {
        timer = setTimeout(() => setPhase("erasing"), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((prev) => (prev + 1) % roles.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, phase, roleIdx, roles]);

  return (
    <span className="text-cyan-400 whitespace-nowrap">
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-cyan-400 ml-1 align-middle animate-pulse rounded-sm" />
    </span>
  );
};

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();
  const roles = t("home.roles");

  return (
    <div
      name="home"
      className="w-full pt-32 md:pt-52 pb-20 bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row gap-10 md:gap-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center h-full text-center md:text-left"
        >
          <p className="text-cyan-400/80 text-sm font-semibold tracking-widest uppercase mb-3">
            {t("home.greeting")}
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            <span className="block text-white">{t("home.titlePrefix")}</span>
            <span className="block whitespace-nowrap overflow-hidden">
              <TypewriterRoles roles={roles} />
            </span>
          </h2>

          <p className="text-gray-400 py-5 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            {t("home.description")}
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 font-medium"
            >
              {t("home.cta")}
              <span className="group-hover:translate-x-1 duration-300 transition-transform">
                <MdOutlineKeyboardArrowRight size={22} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-4 md:mt-0 flex justify-center relative"
        >
          {/* Glow ring behind the image */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl scale-110 pointer-events-none" />

          {!imageLoaded && (
            <div className="rounded-2xl w-64 sm:w-72 md:w-80 md:max-w-xs aspect-square bg-gray-700 animate-pulse" />
          )}
          <img
            src={heroImg}
            alt="Mehdi Aichouch profile"
            className={`relative rounded-2xl w-64 sm:w-72 md:w-80 md:max-w-xs ring-2 ring-cyan-500/20 transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
