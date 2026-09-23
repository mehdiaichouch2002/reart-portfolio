import { Link } from "react-scroll";
import heroImg from "../assets/portfolio/me.png";
import projects from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { useResumeModal } from "../context/ResumeModalContext";
import { StarPortrait } from "./common/ZelligeStar";

const liveStores = projects.filter((p) => p.category === "commercial");
const hostname = (url) => new URL(url).hostname.replace(/^www\./, "");

const Home = () => {
  const { t } = useLanguage();
  const { open: openResume } = useResumeModal();

  return (
    <section name="home" className="pt-[72px]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-8 pb-16 md:pt-12 md:pb-20 grid gap-10 md:grid-cols-[1fr_minmax(0,400px)] md:items-center">
        <div>
          <h1 className="font-sans font-bold text-ink tracking-[-0.03em] leading-[1.02] text-[clamp(2.3rem,5.4vw,3.9rem)] max-w-[14ch]">
            {t("home.headline")}
          </h1>
          <p className="mt-5 text-muted text-[1.12rem] leading-[1.65] max-w-[34rem]">
            {t("home.description")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="portfolio" href="#portfolio" smooth duration={500} offset={-72} className="btn-primary cursor-pointer">
              {t("home.cta")}
            </Link>
            <button onClick={openResume} className="btn-secondary">
              {t("home.resume")}
            </button>
          </div>

          <div className="mt-10">
            <p className="font-sans text-sm text-muted">{t("home.liveStores")}</p>
            <ul className="mt-3 flex flex-wrap gap-x-7 gap-y-3">
              {liveStores.map((store) => (
                <li key={store.id}>
                  <a
                    href={store.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 font-sans font-semibold text-ink"
                  >
                    <span className="w-2 h-2 rounded-full bg-zellige" aria-hidden="true" />
                    <span className="border-b border-ink/20 group-hover:border-ink transition-colors">
                      {store.title}
                    </span>
                    <span className="sr-only">({hostname(store.href)})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <StarPortrait
          src={heroImg}
          alt={t("home.photoAlt")}
          className="w-full max-w-[240px] sm:max-w-[320px] md:max-w-[380px] mx-auto md:mx-0"
        />
      </div>
    </section>
  );
};

export default Home;
