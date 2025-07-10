"use client";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, _: string) => import(`../langs/${language}.json`)
    )
  )
  .init({
    fallbackLng: "es",
    defaultNS: "default",
    detection: {
      order: ["htmlTag", "path", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? ["en", "es"] : [],
  });

export default i18next;
