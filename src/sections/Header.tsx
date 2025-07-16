"use client";

import { useTranslationClient } from "@/locales/lib/useTranslationClient";

export const Header = () => {
  const { t } = useTranslationClient();

  return (
    <div className="flex justify-center w-full z-10 items-center fixed top-5">
      <nav className="flex gap-1 p-0.5 border bg-white/15 backdrop-blur border-white/15 rounded-full">
        <a href="#" className="nav-item">
          {t("header.home")}
        </a>
        <a href="#" className="nav-item">
          {t("header.projects")}
        </a>
        <a href="#" className="nav-item">
          {t("header.about")}
        </a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          {t("header.contact")}
        </a>
      </nav>
    </div>
  );
};
