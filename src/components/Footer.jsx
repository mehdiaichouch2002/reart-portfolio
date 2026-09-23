import { useLanguage } from "../context/LanguageContext";
import { contactLinks, socialLinks } from "../data/contactLinks";
import { StarMark } from "./common/ZelligeStar";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-paper/70">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-10 pb-24 sm:pb-10 sm:pr-44 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2.5 font-sans">
          <StarMark className="w-5 h-5 text-paper" />
          <span>
            &copy; {new Date().getFullYear()} Mehdi Aichouch. {t("footer.location")}
          </span>
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
          {[...contactLinks, ...socialLinks].map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
