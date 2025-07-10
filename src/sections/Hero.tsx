import memojiImage from "@/assets/images/memoji-computer.png";
import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "../components/HeroOrbit";

export const HeroSection = async () => {
  const { t } = await useTranslationServer();

  return (
    <section className="relative z-0 py-40 overflow-x-clip">
      <div
        className="absolute inset-0 -z-1 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="hero-ring size-[620px] "></div>
      <div className="hero-ring size-[820px]  "></div>
      <div className="hero-ring size-[1020px] "></div>
      <div className="hero-ring size-[1220px] "></div>
      
      <HeroOrbit size={650} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={0}>
        <StarIcon className="size-12 text-emerald-300/60" />
      </HeroOrbit>
      <HeroOrbit size={450} rotation={100}>
        <StarIcon className="size-8 text-emerald-300/40" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={0}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={90}>
        <StarIcon className="size-6 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={100}>
        <StarIcon className="size-6 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={300}>
        <StarIcon className="size-6 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={200}>
        <StarIcon className="size-16 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={180}>
        <StarIcon className="size-24 text-emerald-300/60" />
      </HeroOrbit>

      <div className="container px-1 mx-auto">
        <div className="flex flex-col items-center">
          <Image
            className="w-24 h-24"
            src={memojiImage}
            alt="Person peeking from behind laptop"
          />
          <div className="flex items-center justify-center  border border-gray-800 rounded-md gap-2 py-2 px-4 bg-gray-950">
            <div className="bg-green-500 rounded-full h-2 w-2"></div>
            <small className="text-sm font-semibold">
              {t("section.hero.status")}
            </small>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="md:text-5xl font-serif tracking-wide antialiased font-medium text-3xl capitalize text-center mt-8">
            {t("section.hero.title")}
          </h1>
          <p className="md:text-lg text-center text-pretty mt-4 text-white/60">
            {t("section.hero.description")}
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center flex-col md:flex-row items-center gap-4">
        <button className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
          <span className="capitalize font-semibold">
            {t("section.hero.link_my_work")}
          </span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">{t("section.hero.connect")}</span>
        </button>
      </div>
    </section>
  );
};
