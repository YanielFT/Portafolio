"use client";

import { useTranslationClient } from "@/locales/lib/useTranslationClient";

export const Header = () => {
  const { t, onChangeLang } = useTranslationClient();

  return (
    <div>
      <nav>
        <a href="#">{t("hero.heroTitle")}</a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </nav>
      <div>
        <button className="block" onClick={()=>{onChangeLang('es')}}>es</button>
        <button onClick={()=>{onChangeLang('en')}}>en</button>
      </div>
    </div>
  );
};
