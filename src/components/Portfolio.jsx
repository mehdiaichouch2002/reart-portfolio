import { useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import projects from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

const clientWork = projects.filter((p) => p.category === "commercial");
// Magento modules first: they're closest to the client work above
const isMagento = (p) => p.tech.includes("Magento 2");
const otherWork = projects
  .filter((p) => p.category !== "commercial")
  .sort((a, b) => isMagento(b) - isMagento(a));
const INITIAL_VISIBLE = 6;
const hostname = (url) => new URL(url).hostname.replace(/^www\./, "");

const TechList = ({ tech }) => (
  <ul className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm text-muted">
    {tech.map((name) => (
      <li key={name}>{name}</li>
    ))}
  </ul>
);

const ClientProject = ({ project, t }) => (
  <article className="grid gap-6 md:gap-10 md:grid-cols-[1fr_1.15fr] items-center py-10 md:py-14 border-t border-line first:border-t-0 first:pt-4">
    <div>
      <p className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-live">
        <span className="w-2 h-2 rounded-full bg-live" aria-hidden="true" />
        {t("portfolio.live")}
      </p>
      <h3 className="mt-2 font-display font-bold text-fg tracking-[-0.02em] text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight">
        {project.title}
      </h3>
      <p className="mt-3 text-fg/80 leading-[1.65] max-w-[32rem]">
        {t(`portfolio.projects.${project.descriptionKey}`)}
      </p>
      <div className="mt-4">
        <TechList tech={project.tech} />
      </div>
      <a href={project.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 font-sans font-semibold text-link">
        {hostname(project.href)}
        <FiArrowUpRight aria-hidden="true" />
        <span className="sr-only">({t("portfolio.opensNewTab")})</span>
      </a>
    </div>
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className="block rounded-lg overflow-hidden border border-line bg-surface"
    >
      <img src={project.src} alt="" loading="lazy" className="w-full aspect-video object-cover" />
    </a>
  </article>
);

const OtherProject = ({ project, t }) => (
  <li className="py-6 border-t border-line">
    <div className="flex items-baseline justify-between gap-4">
      <h4 className="font-display text-[1.05rem] font-bold text-fg">{project.title}</h4>
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-link"
      >
        <FiGithub aria-hidden="true" />
        {t("portfolio.viewCode")}
        <span className="sr-only">: {project.title}</span>
      </a>
    </div>
    <p className="mt-2 text-fg/80 leading-[1.6]">{t(`portfolio.projects.${project.descriptionKey}`)}</p>
    <div className="mt-3">
      <TechList tech={project.tech} />
    </div>
  </li>
);

const Portfolio = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();
  const visible = expanded ? otherWork : otherWork.slice(0, INITIAL_VISIBLE);

  return (
    <section name="portfolio" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-20 md:py-28">
        <h2 className="section-title">{t("portfolio.title")}</h2>
        <p className="mt-4 text-muted leading-relaxed max-w-[36rem]">{t("portfolio.description")}</p>

        <div className="mt-8">
          {clientWork.map((project) => (
            <ClientProject key={project.id} project={project} t={t} />
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="font-display font-bold text-fg text-[1.35rem] tracking-[-0.01em]">
            {t("portfolio.otherTitle")}
          </h3>
          <p className="mt-2 text-muted max-w-[36rem]">{t("portfolio.otherDescription")}</p>
          <ul className="mt-6 grid md:grid-cols-2 md:gap-x-12">
            {visible.map((project) => (
              <OtherProject key={project.id} project={project} t={t} />
            ))}
          </ul>
          {otherWork.length > INITIAL_VISIBLE && (
            <button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="btn-secondary mt-8"
            >
              {expanded
                ? t("portfolio.showLess")
                : t("portfolio.showAll").replace("{count}", otherWork.length)}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
