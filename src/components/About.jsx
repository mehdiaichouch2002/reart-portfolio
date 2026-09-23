import { useLanguage } from "../context/LanguageContext";

// Titles are stored as "Organisation — role"
const splitTitle = (title) => {
  const [org, ...rest] = title.split(" — ");
  return rest.length ? { org, role: rest.join(" — ") } : { org: title, role: null };
};

const About = () => {
  const { t } = useLanguage();
  const timelineEvents = t("timeline");

  return (
    <section name="about" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-20 md:py-28 grid gap-10 md:grid-cols-[minmax(0,300px)_1fr] md:gap-14">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="mt-4 text-muted leading-relaxed max-w-[22rem]">{t("about.intro")}</p>
        </div>

        <ol className="relative border-l-2 border-line ml-1.5">
          {timelineEvents.map((item) => {
            const { org, role } = splitTitle(item.title);
            const current = /present|in progress|aujourd|en cours/i.test(item.date);
            return (
              <li key={item.title} className="relative pl-7 sm:pl-9 pb-10 last:pb-0">
                <span
                  className={`absolute -left-[7px] top-[0.45rem] w-3 h-3 rotate-45 ${
                    current ? "bg-accent" : "bg-canvas border-2 border-line"
                  }`}
                  aria-hidden="true"
                />
                <p className="font-sans text-sm font-semibold text-muted tabular-nums">{item.date}</p>
                <h3 className="mt-1 font-display text-[1.1rem] font-bold text-fg leading-snug">
                  {org}
                </h3>
                {role && <p className="font-sans font-medium text-accent">{role}</p>}
                <p className="mt-2 text-fg/80 leading-[1.65] max-w-[40rem]">{item.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default About;
