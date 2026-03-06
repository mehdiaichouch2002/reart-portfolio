import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(
    () => localStorage.getItem("lang") || "en"
  );

  const setLang = useCallback((l) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key) => key.split(".").reduce((obj, k) => obj?.[k], translations[lang]) ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
