import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import navLinks from "../data/navLinks";
import useScrolled from "../hooks/useScrolled";
import { useLanguage } from "../context/LanguageContext";

const NAV_HEIGHT = 72;
const LANGUAGES = ["en", "fr"];
// "home" is reached through the wordmark
const sectionLinks = navLinks.filter(({ link }) => link !== "home");

const Wordmark = ({ onClick }) => (
  <Link
    to="home"
    smooth
    duration={500}
    onClick={onClick}
    href="#home"
    className="cursor-pointer select-none text-fg font-display font-bold text-[1.05rem] tracking-[-0.01em]"
  >
    Mehdi Aichouch
  </Link>
);

const LanguageSwitch = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center rounded-md border border-line p-0.5">
      {LANGUAGES.map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-label={code.toUpperCase()}
          aria-pressed={lang === code}
          className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
            lang === code ? "bg-fg text-canvas" : "text-muted hover:text-fg"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrolled = useScrolled(20);
  const { t } = useLanguage();

  const closeNav = useCallback(() => setNav(false), []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", nav);
    return () => document.body.classList.remove("overflow-hidden");
  }, [nav]);

  useEffect(() => {
    if (!nav) return;
    const onKey = (e) => e.key === "Escape" && closeNav();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nav, closeNav]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const atBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50;

      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].link);
        return;
      }

      let current = "home";
      for (const { link } of navLinks) {
        const el = document.querySelector(`[name="${link}"]`);
        if (el && el.offsetTop - NAV_HEIGHT - 8 <= scrollY) current = link;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 h-[72px] bg-canvas/90 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "border-b border-line" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-[1120px] h-full mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Wordmark />

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {sectionLinks.map(({ id, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    href={`#${link}`}
                    smooth
                    duration={500}
                    offset={-NAV_HEIGHT}
                    aria-current={activeSection === link ? "true" : undefined}
                    className={`font-sans font-medium cursor-pointer transition-colors border-b-2 pb-0.5 ${
                      activeSection === link
                        ? "text-fg border-accent"
                        : "text-muted border-transparent hover:text-fg"
                    }`}
                  >
                    {t(`nav.${link}`)}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageSwitch />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitch />
            <button
              onClick={() => setNav(true)}
              className="p-2 text-fg"
              aria-label="Open menu"
              aria-expanded={nav}
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity duration-300 ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 w-[280px] max-w-[85vw] h-full bg-surface z-[70] md:hidden transform transition-transform duration-300 ease-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!nav}
      >
        <div className="flex items-center justify-between h-[72px] px-5 border-b border-line">
          <span className="font-display font-bold text-fg">Menu</span>
          <button onClick={closeNav} className="p-2 text-fg" aria-label="Close menu" tabIndex={nav ? 0 : -1}>
            <FaTimes size={20} />
          </button>
        </div>
        <ul className="px-3 py-4">
          {navLinks.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                href={`#${link}`}
                smooth
                duration={500}
                offset={-NAV_HEIGHT}
                onClick={closeNav}
                tabIndex={nav ? 0 : -1}
                className={`block px-3 py-3 rounded-md font-sans text-lg font-medium cursor-pointer ${
                  activeSection === link ? "text-accent" : "text-fg hover:bg-line/50"
                }`}
              >
                {t(`nav.${link}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
