import bookImage from "@/assets/images/book-cover.png";
import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import { SectionHeader } from "../components/SectionHeader";
import Image from "next/image";
import { AboutCard } from "../components/AboutCard";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";

import { ToolboxItem } from "@/components/ToolboxItem";
import { Card } from "@/components/Card";
import {
  Backpack,
  BookOpen,
  Brush,
  Dumbbell,
  Gamepad2,
  Music,
} from "lucide-react";
import { MapPicture } from "@/components/MapPicture";
import { BeyondToCode } from "../components/BeyondToCode";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: (
      <JavascriptIcon className="size-10 fill-[url(#tech-icon-gradient)]" />
    ),
  },
  {
    title: "HTML",
    iconType: <HTMLIcon className="size-10 fill-[url(#tech-icon-gradient)]" />,
  },
  {
    title: "CSS3",
    iconType: <CssIcon className="size-10 fill-[url(#tech-icon-gradient)]" />,
  },
  {
    title: "React",
    iconType: <ReactIcon className="size-10 fill-[url(#tech-icon-gradient)]" />,
  },
  {
    title: "Chrome",
    iconType: (
      <ChromeIcon className="size-10 fill-[url(#tech-icon-gradient)]" />
    ),
  },
  {
    title: "GitHub",
    iconType: (
      <GitHubIcon className="size-10 fill-[url(#tech-icon-gradient)]" />
    ),
  },
];

export const AboutSection = async () => {
  const { t } = await useTranslationServer();

  const hobbies = [
    {
      title: t("section.close_to_me.painting"),
      left: "5%",
      top: "5%",
      icon: <Brush className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.gaming"),
      left: "50%",
      top: "5%",
      icon: <Gamepad2 className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.hiking"),
      left: "10%",
      top: "30%",
      icon: <Backpack className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.music"),
      left: "35%",
      top: "40%",
      icon: <Music className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.reading"),
      left: "55%",
      top: "75%",
      icon: <BookOpen className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.fitness"),
      left: "5%",
      top: "65%",
      icon: <Dumbbell className="text-gray-950" size={20} />,
    },
  ];

  return (
    <section id="about" className="pb-32 container mx-auto overflow-hidden">
      <SectionHeader
        subtitle={t("section.about.subtitle")}
        title={t("section.about.title")}
        description={t("section.about.description")}
      />

      <div
        className="flex flex-col px-5 sm:px-0 gap-12 md:grid 
      md:grid-cols-[repeat(4,1fr)]  
      lg:grid-cols-[repeat(6,1fr)] md:grid-rows-[1fr,1fr]
       sm:gap-8"
      >
        <AboutCard
          moveInX={-200}
          className="w-full sm:w-[344px] md:w-full mx-auto pb-0 min-h-[23rem] 
          md:col-span-2"
          title={t("section.about.reads")}
          description={t("section.about.reads_subtitle")}
        >
          <div className="relative w-40 mx-auto mt-0">
            <Image
              className="absolute top-14 left-0"
              src={bookImage}
              alt="Book cover"
            />
          </div>
        </AboutCard>

        <AboutCard
          moveInX={200}
          className="w-full sm:w-[344px] md:w-full  mx-auto pb-0 min-h-[23rem] md:col-span-2 lg:col-span-4"
          title={t("section.about.toolbox")}
          description={t("section.about.toolbox_subtitle")}
        >
          <div className="mt-12 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ToolboxItem toolboxItems={toolboxItems} className="mt-6 " />
            <ToolboxItem
              toolboxItems={toolboxItems}
              className=" mt-6 -translate-x-[120%] lg:-translate-x-[10%]"
              toRight
            />
          </div>
        </AboutCard>

        <BeyondToCode />

        <MapPicture />
      </div>
    </section>
  );
};
