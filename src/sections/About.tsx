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
import { TechIcon } from "@/components/TechIcon";
import { ToolboxItem } from "@/components/ToolboxItem";

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

  return (
    <section className="pb-96">
      <SectionHeader
        subtitle={t("section.about.subtitle")}
        title={t("section.about.title")}
        description={t("section.about.description")}
      />

      <div className="flex flex-col gap-6">
        <AboutCard
          className="max-w-[344px] mx-auto pb-0 min-h-[23rem]"
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
          className="max-w-[344px] mx-auto pb-0 min-h-[23rem]"
          title={t("section.about.toolbox")}
          description={t("section.about.toolbox_subtitle")}
        >
          <div className="mt-12  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ToolboxItem toolboxItems={toolboxItems} className="mt-6" />
            <ToolboxItem
              toolboxItems={toolboxItems}
              className=" mt-6"
              itemWrapperClassName="-translate-x-1/2"
            />
          </div>
        </AboutCard>
      </div>
    </section>
  );
};
