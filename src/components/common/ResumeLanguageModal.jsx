import React, { useEffect, useRef, useState } from "react";
import { FiDownload, FiX } from "react-icons/fi";
import { useResumeModal } from "../../context/ResumeModalContext";
import { useLanguage } from "../../context/LanguageContext";

// Files live in public/ as MEHDI-AICHOUCH-<ROLE>-<LANG>.pdf
const ROLES = ["fullstack", "magento2"];
const LANGS = ["en", "fr"];

const ResumeLanguageModal = () => {
  const { isOpen, close } = useResumeModal();
  const { t, lang } = useLanguage();
  const [role, setRole] = useState(ROLES[0]);
  const dialogRef = useRef(null);

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
    dialogRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  // Offer the visitor's current language first
  const langOrder = lang === "fr" ? ["fr", "en"] : LANGS;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[80] p-4"
      onClick={close}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        className="relative bg-surface border border-line rounded-lg p-6 sm:p-8 max-w-md w-full max-h-[90dvh] overflow-y-auto shadow-2xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={close} className="absolute top-4 right-4 p-1.5 text-muted hover:text-fg" aria-label={t("resumeModal.cancel")}>
          <FiX size={20} />
        </button>

        <h2 id="resume-title" className="font-display text-2xl font-bold text-fg">
          {t("resumeModal.title")}
        </h2>
        <p className="mt-1 text-muted">{t("resumeModal.subtitle")}</p>

        <div
          role="radiogroup"
          aria-label={t("resumeModal.roleLabel")}
          className="mt-6 grid grid-cols-2 gap-1 p-1 bg-canvas rounded-md border border-line"
        >
          {ROLES.map((r) => (
            <button
              key={r}
              role="radio"
              aria-checked={role === r}
              onClick={() => setRole(r)}
              className={`py-2 px-3 rounded font-semibold transition-colors ${
                role === r ? "bg-fg text-canvas" : "text-muted hover:text-fg"
              }`}
            >
              {t(`resumeModal.${r}`)}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-2">
          {langOrder.map((l, i) => (
            <button
              key={l}
              onClick={() => handleDownload(l)}
              className={`${i === 0 ? "btn-primary" : "btn-secondary"} w-full justify-between`}
            >
              {t(`resumeModal.${l === "en" ? "english" : "french"}`)}
              <FiDownload aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeLanguageModal;
