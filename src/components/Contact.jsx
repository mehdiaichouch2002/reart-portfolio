import { motion } from "framer-motion";
import useContactForm from "../hooks/useContactForm";
import LoadingOverlay from "./common/LoadingOverlay";
import Notification from "./common/Notification";
import { useLanguage } from "../context/LanguageContext";

const inputClass = (hasError) =>
  `w-full p-3.5 bg-gray-800/60 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-200 text-sm ${
    hasError
      ? "border-red-500/70 ring-2 ring-red-500/20"
      : "border-gray-700/60 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20"
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

  return (
    <div
      name="contact"
      className="py-20 w-full bg-gradient-to-b from-black to-gray-800 px-4 text-white"
    >
      <div className="max-w-2xl mx-auto">

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
          <p className="mt-4 text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder={t("contact.namePlaceholder")}
                value={formData.name}
                onChange={handleChange}
                className={inputClass(formErrors.name)}
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                className={inputClass(formErrors.email)}
              />
            </div>

            <textarea
              name="message"
              placeholder={t("contact.messagePlaceholder")}
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`resize-none ${inputClass(formErrors.message)}`}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="self-end text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? t("contact.sending") : t("contact.cta")}
            </button>
          </form>
        </motion.div>

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
