import { motion } from "framer-motion";
import useContactForm from "../hooks/useContactForm";
import LoadingOverlay from "./common/LoadingOverlay";
import Notification from "./common/Notification";
import { useLanguage } from "../context/LanguageContext";

const inputBase =
  "w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3.5 text-white text-sm placeholder-gray-500 focus:outline-none transition-colors duration-200";

const inputClass = (hasError) =>
  `${inputBase} ${
    hasError
      ? "border-red-500/70 focus:border-red-500"
      : "focus:border-cyan-500/70"
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

  const FieldError = ({ field }) =>
    formErrors[field] ? (
      <p role="alert" className="text-red-400 text-xs mt-1.5 ml-1">
        {t(`contact.errors.${field}`)}
      </p>
    ) : null;

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 px-4 text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2 border-b-2 border-cyan-400">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4 max-w-lg mx-auto"
        >
          <div>
            <label htmlFor="contact-name" className="sr-only">
              {t("contact.namePlaceholder")}
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder={t("contact.namePlaceholder")}
              value={formData.name}
              onChange={handleChange}
              aria-invalid={!!formErrors.name}
              className={inputClass(formErrors.name)}
            />
            <FieldError field="name" />
          </div>

          <div>
            <label htmlFor="contact-email" className="sr-only">
              {t("contact.emailPlaceholder")}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder={t("contact.emailPlaceholder")}
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!formErrors.email}
              className={inputClass(formErrors.email)}
            />
            <FieldError field="email" />
          </div>

          <div>
            <label htmlFor="contact-message" className="sr-only">
              {t("contact.messagePlaceholder")}
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder={t("contact.messagePlaceholder")}
              rows="6"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={!!formErrors.message}
              className={`resize-none ${inputClass(formErrors.message)}`}
            />
            <FieldError field="message" />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? t("contact.sending") : t("contact.cta")}
          </button>
        </motion.form>

      </div>

      <Notification
        type={notification}
        onClose={() => setNotification(null)}
        successMsg={t("notification.success")}
        errorMsg={t("notification.error")}
      />
      {isLoading && <LoadingOverlay />}
    </div>
  );
};

export default Contact;
