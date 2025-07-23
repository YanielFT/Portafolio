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
import mapImage from "@/assets/images/map.jpg";
import SmileMemojicon from "@/assets/images/memoji-smile.png";
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

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
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
    <section className="pb-32 container mx-auto">
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
          className="w-full sm:w-[344px] md:w-full  mx-auto pb-0 min-h-[23rem] md:col-span-2 lg:col-span-4"
          title={t("section.about.toolbox")}
          description={t("section.about.toolbox_subtitle")}
        >
          <div className="mt-12 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ToolboxItem toolboxItems={toolboxItems} className="mt-6" />
            <ToolboxItem
              toolboxItems={toolboxItems}
              className=" mt-6"
              itemWrapperClassName="-translate-x-1/2"
            />
          </div>
        </AboutCard>
        <AboutCard
          className="sm:w-[344px] md:w-full mx-auto pb-0 min-h-[23rem] 
         md:col-span-2 row-span-1 lg:col-span-4  flex flex-col"
          title={t("section.close_to_me.title")}
          description={t("section.about.toolbox_subtitle")}
        >
          <div className="relative w-full h-full flex-1">
            {hobbies.map((h) => (
              <div
                key={h.title}
                className={`
                absolute left-[${h.left}] top-[${h.top}]

                px-6 py-2 bg-gradient-to-r inline-flex from-emerald-300 to-sky-400 rounded-full py-1.5"
                `}
                style={{
                  left: h.left,
                  top: h.top,
                }}
              >
                <div className="inline-flex gap-2 items-center">
                  <span className="text-sm font-medium text-gray-900">
                    {h.title}
                  </span>
                  {h.icon}
                </div>
              </div>
            ))}
          </div>
        </AboutCard>

        <Card
          className=" relative w-full z-0 sm:w-[344px] md:w-full md:col-span-2 overflow-hidden 
        flex items-center justify-center mx-auto pb-0 h-[23rem]  "
        >
          <div className="absolute inset-0 z-50 h-full w-full bg-gray-950/65 [mask-image:linear-gradient(to_bottom,transparent_10%,black_80%)]"></div>
          <span className="absolute text-pretty max-w-50 z-[100] top-70 text-white/90  font-semibold text-lg">
            Plaza de la Revolución, La Habana
          </span>
          <Image
            className="h-full w-full object-cover grayscale-50"
            src={mapImage}
            alt="Havana map"
          />

          <div
            className="absolute  flex items-center justify-center rounded-full bg-gray-600/35
          after:content-[''] after:absolute after:inset-0 after:outline-2 
          after:-outline-offset-2 after:rounded-full
          after:outline-gray-950/30
          z-[100]
          "
          >
            <Image className="size-25" src={SmileMemojicon} alt={t.name} />
          </div>
        </Card>
      </div>
    </section>
  );
};
