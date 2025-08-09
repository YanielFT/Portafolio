"use client";
import React, { useRef } from "react";
import { AboutCard } from "./AboutCard";
import { useTranslationClient } from "@/locales/lib/useTranslationClient";
import JavascriptIcon from "@/assets/icons/square-js.svg";

import ReactIcon from "@/assets/icons/react.svg";

import ExpressIcon from "@/assets/icons/Express.js_dark.svg";
import CloudinaryIcon from "@/assets/icons/cloudinary.svg";
import NextJsIcon from "@/assets/icons/nextjs_icon_dark.svg";
import MaterialUiIcon from "@/assets/icons/materialui.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import SupabaseIcon from "@/assets/icons/supabase.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import { TechIcon } from "./TechIcon";

export const ToolBox = () => {
  const { t } = useTranslationClient();

  const toolboxItems = [
    {
      title: "JS/TS",
      left: "5%",
      top: "5%",
      icon: (
        <JavascriptIcon
          className={`size-10 lg:size-14 fill-[url(#tech-icon-gradient)]`}
        />
      ),
    },

    {
      title: "React",
      left: "65%",
      top: "5%",
      icon: (
        <ReactIcon
          className={`size-10 lg:size-14 fill-[url(#tech-icon-gradient)]`}
        />
      ),
    },
    {
      title: "Redux",
      left: "90%",
      top: "30%",
      icon: (
        <ReduxIcon
          className={`size-10 lg:size-14 fill-[url(#tech-icon-gradient)]`}
        />
      ),
    },
    {
      title: "NextJs",
      left: "70%",
      top: "30%",
      icon: (
        <NextJsIcon
          className={`size-10 lg:size-14 fill-[url(#tech-icon-gradient)]`}
        />
      ),
    },
    {
      title: "Tailwind",
      left: "40%",
      top: "60%",
      icon: (
        <TailwindIcon
          className={`size-10 lg:size-14 fill-[url(#tech-icon-gradient)]`}
        />
      ),
    },
    {
      title: "Material UI",
      left: "60%",
      top: "60%",
      icon: (
        <MaterialUiIcon
          className={`size-10 lg:size-14 fill-[url(#tech-icon-gradient)]`}
        />
      ),
    },
    {
      title: "Express js",
      left: "10%",
      top: "30%",
      icon: (
        <ExpressIcon
          className={`size-10 lg:size-14 fill-[url(#tech-icon-gradient)]`}
        />
      ),
    },

    {
      title: "Supabase",
      left: "20%",
      top: "60%",
      icon: (
        <SupabaseIcon
          className={`size-10 lg:size-14 fill-[url(#tech-icon-gradient)]`}
        />
      ),
    },
    {
      title: "Cloudinary",
      left: "30%",
      top: "30%",
      icon: (
        <CloudinaryIcon
          className={`size-10 lg:size-14 fill-[url(#tech-icon-gradient)]`}
        />
      ),
    },
  ];

  return (
    <AboutCard
      moveInX={-200}
      moveInY={200}
      className="sm:w-[344px] md:w-full cursor mx-auto sm:min-h-[23rem] min-h-auto   
         md:col-span-2  row-span-1 lg:col-span-4 flex flex-col "
      title={t("section.about.toolbox")}
      description={t("section.about.toolbox_subtitle")}
    >
      <div className="relative lg:justify-start w-full h-full flex flex-wrap gap-4 justify-center items-center lg:items- mt-5 lg:mt-10">
        {toolboxItems.map((h) => (
          <div
            key={h.title}
            className="p-2 border border-gray-500 rounded-xl flex  flex-col items-center  gap-1"
          >
            <TechIcon component={h.icon} />
            {/* <span className="font-semibold text-sm text-center">{h.title}</span> */}
          </div>
        ))}
      </div>
    </AboutCard>
  );
};
