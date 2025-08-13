import memojiImage from "@/assets/images/memoji-computer.png";
import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.webp";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "../components/HeroOrbit";
import { TypewriterEffectSmooth } from "@/components/ui/typerwriter-effect";

export const HeroSection = async () => {
  const { t } = await useTranslationServer();

  const words = [
    {
      text: t("header.build"),
    },
    {
      text: t("header.awasome"),
    },
    {
      text: t("header.apps"),
    },
  ];

  const words2 = [
    {
      text: t("header.with"),
    },
    {
      text: "Yaniel Fuentes",
      className: "text-emerald-300",
    },
  ];

  return (
    <section
      id="home"
      className="relative z-0 py-32 md:py-40 overflow-x-clip overflow-y-hidden"
    >
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_0%,black_30%,transparent)]">
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero-ring size-[320px] sm:size-[620px] "></div>
        <div className="hero-ring size-[520px] sm:size-[820px]  "></div>
        <div className="hero-ring size-[720px] sm:size-[1020px] "></div>
        <div className="hero-ring size-[820px] sm:size-[1220px] "></div>

        <HeroOrbit size={650} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={0}>
          <StarIcon className="size-12 text-emerald-300/60 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={250} rotation={290}>
          <StarIcon className="size-4 text-emerald-300/15" />
        </HeroOrbit>
        <HeroOrbit size={490} rotation={180}>
          <StarIcon className="size-10 text-emerald-300/20 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={450} rotation={100}>
          <StarIcon className="size-8 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={0}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={90}>
          <StarIcon className="size-6 text-emerald-300/60 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={100}>
          <StarIcon className="size-6 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={300}>
          <StarIcon className="size-6 text-emerald-300/60" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={200}>
          <StarIcon className="size-16 text-emerald-300/60" />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={180}>
          <StarIcon className="size-24 text-emerald-300/60" />
        </HeroOrbit>
      </div>

      <div className="container px-1 mx-auto z-10">
        <div className="flex flex-col items-center">
          <Image
            className="w-24 h-24"
            src={memojiImage}
            alt="Person peeking from behind laptop"
          />
          <div className="flex items-center justify-center  border border-gray-800 rounded-md gap-2 py-2 px-4 bg-gray-950">
            <div className="bg-green-500 rounded-full h-2 w-2 animate-pulse"></div>
            <small className="text-sm font-semibold">
              {t("section.hero.status")}
            </small>
          </div>
        </div>
        <div className="max-w-xl lg:max-w-3xl mx-auto my-4">
          <TypewriterEffectSmooth words={words} />
          <TypewriterEffectSmooth words={words2} delay={3} />
          <p className="md:text-lg text-center text-pretty mt-4 text-white/60">
            {t("section.hero.description")}
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center flex-col md:flex-row items-center gap-4 z-10">
        <a
          href="#projects"
          className="cursor-pointer inline-flex items-center justify-center gap-2 border border-white/15 px-6 h-12 rounded-xl "
        >
          <span className="capitalize font-semibold">
            {t("section.hero.link_my_work")}
          </span>``
          <ArrowDown className="size-4" />
        </a>
        <a 
         href="#contact"
        className="cursor-pointer inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">{t("section.hero.connect")}</span>
        </a>
      </div>
    </section>
  );
};
