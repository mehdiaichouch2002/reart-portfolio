import { useLanguage } from "../context/LanguageContext";

const SKILL_GROUPS = {
  commerce: ["Magento 2", "Magento Commerce", "Varnish", "Redis", "RabbitMQ"],
  backend: ["PHP", "Laravel", "Java EE", "Spring Boot", "Python", "Django"],
  frontend: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "HTML & CSS", "Bootstrap"],
  tooling: ["MySQL", "MongoDB", "Docker", "Nginx", "Linux", "Git"],
};

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section name="skills" className="border-t border-line">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-20 md:py-28 grid gap-10 md:grid-cols-[minmax(0,300px)_1fr] md:gap-14">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="mt-4 text-muted leading-relaxed max-w-[22rem]">{t("skills.description")}</p>
        </div>

        <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {Object.entries(SKILL_GROUPS).map(([group, skills]) => (
            <div key={group}>
              <dt className="font-display font-bold text-fg text-[1rem] pb-2 border-b border-muted">
                {t(`skills.groups.${group}`)}
              </dt>
              <dd>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill} className="py-2 border-b border-line text-fg/85">
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
