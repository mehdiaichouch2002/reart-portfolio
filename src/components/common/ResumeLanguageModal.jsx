import React, { useEffect, useState } from "react";
import { FaFile } from "react-icons/fa";
import { useResumeModal } from "../../context/ResumeModalContext";
import { useLanguage } from "../../context/LanguageContext";

// Files live in public/ as MEHDI-AICHOUCH-<ROLE>-<LANG>.pdf
const ROLES = ["fullstack", "magento2"];

const ResumeLanguageModal = () => {
  const { isOpen, close } = useResumeModal();
  const { t } = useLanguage();
  const [role, setRole] = useState(ROLES[0]);

  const handleDownload = (language) => {
    const fileName = `MEHDI-AICHOUCH-${role.toUpperCase()}-${language.toUpperCase()}.pdf`;
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    close();
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-hidden");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[80] backdrop-blur-sm p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={t("resumeModal.title")}
    >
      <div
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-6 sm:p-8 max-w-md w-full max-h-[90dvh] overflow-y-auto shadow-2xl border border-cyan-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4">
            <FaFile size={32} className="text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {t("resumeModal.title")}
          </h2>
          <p className="text-gray-400">{t("resumeModal.subtitle")}</p>
        </div>

        <div
          role="radiogroup"
          aria-label={t("resumeModal.subtitle")}
          className="grid grid-cols-2 gap-1 p-1 mb-4 bg-gray-900/80 rounded-lg border border-gray-700"
        >
          {ROLES.map((r) => (
            <button
              key={r}
              role="radio"
              aria-checked={role === r}
              onClick={() => setRole(r)}
              className={`py-2 px-3 rounded-md font-semibold transition-all duration-300 ${
                role === r
                  ? "bg-cyan-500 text-white shadow"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {t(`resumeModal.${r}`)}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleDownload("en")}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center space-x-3 border border-cyan-400/20"
          >
            <span className="text-2xl">🇬🇧</span>
            <span>{t("resumeModal.english")}</span>
          </button>

          <button
            onClick={() => handleDownload("fr")}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center space-x-3 border border-purple-400/20"
          >
            <span className="text-2xl">🇫🇷</span>
            <span>{t("resumeModal.french")}</span>
          </button>
        </div>

        <button
          onClick={close}
          className="w-full mt-4 text-gray-400 hover:text-white font-medium py-2 transition-all duration-300 hover:bg-gray-800/50 rounded-lg"
        >
          {t("resumeModal.cancel")}
        </button>
      </div>
    </div>
  );
};

export default ResumeLanguageModal;
