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
import { TechIcon } from "@/components/TechIcon";
import SmileMemojicon from "@/assets/images/memoji-smile.png";
import { ToolboxItem } from "@/components/ToolboxItem";
import { Card } from "@/components/Card";

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
    },
    {
      title: t("section.close_to_me.gaming"),
    },
    {
      title: t("section.close_to_me.hiking"),
    },
    {
      title: t("section.close_to_me.music"),
    },
    {
      title: t("section.close_to_me.reading"),
    },
    {
      title: t("section.close_to_me.fitness"),
    },
  ];

  return (
    <section className="pb-96 container mx-auto">
      <SectionHeader
        subtitle={t("section.about.subtitle")}
        title={t("section.about.title")}
        description={t("section.about.description")}
      />

      <div className="flex flex-col gap-12 md:grid md:grid-cols-[repeat(4,1fr)]  lg:grid-cols-[repeat(6,1fr)] md:grid-rows-[23rem,23rem] sm:gap-8">
        <AboutCard
          className="md:w-full w-[344px] mx-auto pb-0 min-h-[23rem] lg:col-span-2"
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
          className="w-[344px] mx-auto pb-0 min-h-[23rem] md:col-start-3 md:col-end-5 lg:col-span-4 md:w-full"
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
          className="w-[344px] mx-auto pb-0 min-h-[23rem] 
         md:col-span-2 row-span-1 lg:col-span-4 md:w-full"
          title={t("section.close_to_me.title")}
          description={t("section.about.toolbox_subtitle")}
        >
          <div className="flex h-full w-full flex-wrap gap-2 mt-8 items-center justify-center">
            {hobbies.map((h) => (
              <div
                key={h.title}
                className="px-6 bg-gradient-to-r inline-flex from-emerald-300 to-sky-400 rounded-full py-1.5"
              >
                <span className="text-sm font-medium text-gray-900">
                  {h.title}
                </span>
              </div>
            ))}
          </div>
        </AboutCard>

        <Card
          className=" relative z-0 w-[344px] md:w-full overflow-hidden 
        flex items-center justify-center mx-auto pb-0 h-[23rem] md:col-span-2  "
        >
          <Image
            className="h-full w-full object-cover"
            src={mapImage}
            alt="Havana map"
          />
          <div
            className="absolute flex items-center justify-center z-10 rounded-full bg-gray-600/35
          after:content-[''] after:absolute after:inset-0 after:outline-2 
          after:-outline-offset-2 after:rounded-full
          after:outline-gray-950/30
          "
          >
            <Image className="size-25" src={SmileMemojicon} alt={t.name} />
          </div>
        </Card>
      </div>
    </section>
  );
};
