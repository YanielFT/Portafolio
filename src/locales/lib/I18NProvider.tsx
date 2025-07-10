"use client";

import { useEffect, useMemo, useState } from "react";

import { languages } from "../lang";
import { I18NContext } from "./i18n-context";
import { updateCookieLanguage } from "./actions";
import i18n from "./i18n";

type I18NProviderProps = {
  children: React.ReactNode;
  lng: string;
};

export function I18NProvider({ children, lng }: I18NProviderProps) {
  const [language, setLanguage] = useState(lng);

  const changeLanguage = (toLng: string) => {
    if (languages.includes(toLng)) {
      setLanguage(toLng);
      updateCookieLanguage(toLng);
      i18n.changeLanguage(toLng);
    }
  };

  useEffect(() => {
    updateCookieLanguage(language);
  }, [language]);

  const memoValues = useMemo(() => ({ language, changeLanguage }), [language]);

  return (
    <I18NContext.Provider value={memoValues}>{children}</I18NContext.Provider>
  );
}
