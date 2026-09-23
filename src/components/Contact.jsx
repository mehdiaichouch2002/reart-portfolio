import useContactForm from "../hooks/useContactForm";
import LoadingOverlay from "./common/LoadingOverlay";
import Notification from "./common/Notification";
import { useLanguage } from "../context/LanguageContext";
import { useResumeModal } from "../context/ResumeModalContext";
import { contactLinks, EMAIL } from "../data/contactLinks";

const inputClass = (hasError) =>
  `w-full bg-canvas border rounded-md px-4 py-3 text-fg placeholder-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
    hasError ? "border-danger focus:border-danger" : "border-line focus:border-accent"
  }`;

const Contact = () => {
  const {
    formData,
    formErrors,
    isLoading,
    notification,
    handleChange,
    handleSubmit,
    setNotification,
  } = useContactForm();
  const { t } = useLanguage();
  const { open: openResume } = useResumeModal();

  const Field = ({ id, name, label, children }) => (
    <div>
      <label htmlFor={id} className="block font-sans font-semibold text-fg mb-1.5">
        {label}
      </label>
      {children}
      {formErrors[name] && (
        <p role="alert" id={`${id}-error`} className="mt-1.5 font-sans text-sm text-danger">
          {t(`contact.errors.${name}`)}
        </p>
      )}
    </div>
  );

  return (
    <section name="contact" className="border-t border-line bg-surface">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-20 md:py-28 grid gap-12 md:grid-cols-[minmax(0,380px)_1fr]">
        <div>
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="mt-4 text-fg/80 leading-[1.65]">{t("contact.subtitle")}</p>
          <p className="mt-6">
            <a href={`mailto:${EMAIL}`} className="font-sans font-semibold text-link break-all">
              {EMAIL}
            </a>
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-sans font-medium">
            {contactLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="text-fg hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button onClick={openResume} className="text-fg hover:text-accent">
                {t("contact.resume")}
              </button>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 max-w-[36rem]">
          {Field({
            id: "contact-name",
            name: "name",
            label: t("contact.nameLabel"),
            children: (
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!formErrors.name}
                aria-describedby={formErrors.name ? "contact-name-error" : undefined}
                className={inputClass(formErrors.name)}
              />
            ),
          })}
          {Field({
            id: "contact-email",
            name: "email",
            label: t("contact.emailLabel"),
            children: (
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!formErrors.email}
                aria-describedby={formErrors.email ? "contact-email-error" : undefined}
                className={inputClass(formErrors.email)}
              />
            ),
          })}
          {Field({
            id: "contact-message",
            name: "message",
            label: t("contact.messageLabel"),
            children: (
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!formErrors.message}
                aria-describedby={formErrors.message ? "contact-message-error" : undefined}
                className={`resize-y min-h-[9rem] ${inputClass(formErrors.message)}`}
              />
            ),
          })}

          <button type="submit" disabled={isLoading} className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed">
            {isLoading ? t("contact.sending") : t("contact.cta")}
          </button>
        </form>
      </div>

      <Notification
        type={notification}
        onClose={() => setNotification(null)}
        successMsg={t("notification.success")}
        errorMsg={t("notification.error")}
      />
      {isLoading && <LoadingOverlay />}
    </section>
  );
};

export default Contact;
