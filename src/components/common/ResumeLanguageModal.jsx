import React from "react";
import { FaFile } from "react-icons/fa";
import { useResumeModal } from "../../context/ResumeModalContext";
import { useLanguage } from "../../context/LanguageContext";

const ResumeLanguageModal = () => {
  const { isOpen, close } = useResumeModal();
  const { t } = useLanguage();

  const handleDownload = (language) => {
    const resumeUrl =
      language === "en" ? "/MEHDI-AICHOUCH-EN.pdf" : "/MEHDI-AICHOUCH-FR.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = `MEHDI-AICHOUCH-${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    close();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl border border-cyan-500/30"
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
