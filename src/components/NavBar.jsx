import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import navLinks from "../data/navLinks";
import useScrolled from "../hooks/useScrolled";
import { useLanguage } from "../context/LanguageContext";

const NavLogo = ({ size = "md" }) => {
  const isLg = size === "lg";
  const dim = isLg ? 60 : 52;

  return (
    <Link
      to="home"
      smooth
      duration={500}
      className="group cursor-pointer select-none block"
      style={{ width: dim, height: dim }}
    >
      <div className="relative w-full h-full">
        {/* Ambient glow */}
        <div className="absolute inset-0 logo-glow pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(129,140,248,0.15) 60%, transparent 80%)",
            filter: "blur(8px)",
            transform: "scale(1.4)",
          }}
        />

        {/* Main SVG mark */}
        <svg
          width={dim}
          height={dim}
          viewBox="0 0 48 48"
          fill="none"
          overflow="visible"
          className="relative z-10 transition-transform duration-500 group-hover:scale-110"
        >
          <defs>
            <linearGradient id="lg-main" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22d3ee" />
              <stop offset="1" stopColor="#818cf8" />
            </linearGradient>
            <radialGradient id="lg-fill" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#0e2035" />
              <stop offset="100%" stopColor="#060b14" />
            </radialGradient>
          </defs>

          {/* ── Hex pulse rings (radar / broadcast effect) ── */}
          <path
            d="M24 2 L40 13 L40 35 L24 46 L8 35 L8 13 Z"
            stroke="url(#lg-main)" strokeWidth="1" fill="none"
            style={{ transformOrigin: "24px 24px", animation: "logo-hex-pulse 2.6s ease-out infinite" }}
          />
          <path
            d="M24 2 L40 13 L40 35 L24 46 L8 35 L8 13 Z"
            stroke="url(#lg-main)" strokeWidth="1" fill="none"
            style={{ transformOrigin: "24px 24px", animation: "logo-hex-pulse 2.6s ease-out 1.3s infinite" }}
          />

          {/* ── Outer rotating dashed ring (clockwise) ── */}
          <g style={{ transformOrigin: "24px 24px", animation: "logo-spin-cw 10s linear infinite" }}>
            <circle cx="24" cy="24" r="27" stroke="url(#lg-main)" strokeWidth="0.8"
              strokeDasharray="3 7" fill="none" opacity="0.35" />
          </g>

          {/* ── Inner counter-rotating arc (CCW) ── */}
          <g style={{ transformOrigin: "24px 24px", animation: "logo-spin-ccw 7s linear infinite" }}>
            <circle cx="24" cy="24" r="19" stroke="url(#lg-main)" strokeWidth="0.6"
              strokeDasharray="2 10" fill="none" opacity="0.2" />
          </g>

          {/* ── Hexagon fill + border ── */}
          <path d="M24 2 L40 13 L40 35 L24 46 L8 35 L8 13 Z" fill="url(#lg-fill)" />
          <path
            d="M24 2 L40 13 L40 35 L24 46 L8 35 L8 13 Z"
            stroke="url(#lg-main)" strokeWidth="1.2" fill="none"
            opacity="0.8"
            className="group-hover:opacity-100 transition-opacity duration-400"
          />

          {/* ── Radial spokes ── */}
          <line x1="24" y1="24" x2="24" y2="2"  stroke="url(#lg-main)" strokeWidth="0.5" opacity="0.12" />
          <line x1="24" y1="24" x2="40" y2="13" stroke="url(#lg-main)" strokeWidth="0.5" opacity="0.12" />
          <line x1="24" y1="24" x2="8"  y2="13" stroke="url(#lg-main)" strokeWidth="0.5" opacity="0.12" />

          {/* ── Vertex nodes ── */}
          <circle cx="24" cy="2"  r="1.8" fill="#22d3ee" opacity="0.9" />
          <circle cx="40" cy="13" r="1.8" fill="#818cf8" opacity="0.9" />
          <circle cx="8"  cy="13" r="1.8" fill="#22d3ee" opacity="0.6" />

          {/* ── Geometric M ── */}
          <path
            d="M13 34 L13 15 L24 25.5 L35 15 L35 34"
            stroke="url(#lg-main)" strokeWidth="2.4"
            strokeLinecap="round" strokeLinejoin="round"
            fill="none"
          />

          {/* ── Center dot ── */}
          <circle cx="24" cy="24" r="1.5" fill="url(#lg-main)" opacity="0.5" />
        </svg>
      </div>
    </Link>
  );
};

const LANGUAGES = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrolled = useScrolled(20);
  const { lang, setLang, t } = useLanguage();

  const closeNav = useCallback(() => setNav(false), []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", nav);
    return () => document.body.classList.remove("overflow-hidden");
  }, [nav]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navHeight = 82;
      const atBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50;

      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].link);
        return;
      }

      let current = "home";
      for (const { link } of navLinks) {
        const el = document.querySelector(`[name="${link}"]`);
        if (el && el.offsetTop - navHeight <= scrollY) {
          current = link;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Nav Bar */}
      <nav
        className={`z-50 flex justify-between items-center w-full text-white h-20 fixed top-0 left-0 px-4 lg:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-gradient-to-r from-gray-900 to-gray-800"
        }`}
      >
        {/* Logo */}
        <NavLogo />

        {/* Desktop: nav links + language switcher */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {navLinks.map(({ id, link }) => (
              <li key={id} className="relative group">
                <Link
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                  className={`capitalize font-medium transition-colors duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 ${
                    activeSection === link
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {t(`nav.${link}`)}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-in-out ${
                      activeSection === link ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop language switcher */}
          <div className="flex items-center gap-1 border-l border-gray-700 pl-4">
            {LANGUAGES.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  lang === code
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <span>{flag}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: language switcher + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-1 border-r border-gray-700 pr-2">
            {LANGUAGES.map(({ code, flag }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`text-base px-1.5 py-1 rounded transition-all duration-200 bg-transparent border-none cursor-pointer ${
                  lang === code
                    ? "ring-1 ring-cyan-400 ring-offset-1 ring-offset-gray-900"
                    : "opacity-50 hover:opacity-100"
                }`}
                aria-label={code.toUpperCase()}
              >
                {flag}
              </button>
            ))}
          </div>
          <button
            onClick={() => setNav(true)}
            className="cursor-pointer p-2 text-gray-400 hover:text-white transition-colors duration-300 bg-transparent border-none"
            aria-label="Open menu"
          >
            <FaBars size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity duration-300 ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[280px] max-w-[80vw] h-full bg-gray-900 z-[70] md:hidden transform transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
            <NavLogo size="lg" />
            <button
              onClick={closeNav}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-300 bg-transparent border-none"
              aria-label="Close menu"
            >
              <FaTimes size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {navLinks.map(({ id, link, icon: Icon }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    onClick={closeNav}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                  >
                    <Icon size={20} className="text-gray-500 flex-shrink-0" />
                    <span className="font-medium capitalize text-[15px]">
                      {t(`nav.${link}`)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-5 py-4 border-t border-gray-800">
            <p className="text-gray-600 text-xs text-center">
              &copy; {new Date().getFullYear()} Mehdi | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
