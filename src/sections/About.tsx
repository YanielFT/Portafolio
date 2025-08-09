import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import { SectionHeader } from "../components/SectionHeader";
import { AboutCard } from "../components/AboutCard";

import RedImage from "@/assets/images/redes.svg";
import { MapPicture } from "@/components/MapPicture";
import { ToolBox } from "../components/Toolbox";
import SpiderChart from "@/components/landing/SpiderChart";
import { CardAnimated } from "@/components/CardAnimated";
import { Card } from "@/components/Card";
import Image from "next/image";

export const AboutSection = async () => {
  const { t } = await useTranslationServer();

  return (
    <section id="about" className="pb-32 container mx-auto ">
      <SectionHeader
        subtitle={t("section.about.subtitle")}
        title={t("section.about.title")}
        description={t("section.about.description")}
      />

      <div
        className="flex flex-col px-5 sm:px-0 gap-12 md:grid 
      md:grid-cols-[repeat(4,1fr)]  
      lg:grid-cols-[repeat(6,1fr)]
      md:grid-rows-[0.5fr,0.5fr,1fr] 
      sm:gap-8"
      >
        <AboutCard
          moveInX={200}
          className="w-full  md:row-span-2 sm:w-[344px] md:w-full  mx-auto pb-0 min-h-[23rem] md:col-span-2"
          title={t("section.close_to_me.title")}
          description={t("section.close_to_me.subtitle")}
        >
          <div className="mt-4 flex items-center justify-center h-full w-full">
            <p className="text-lg sm:text-base text-balance text-white/60">
              {t("section.close_to_me.content")}
            </p>
          </div>
        </AboutCard>

        <CardAnimated
          className=" md:row-span-2 relative w-full z-0 sm:w-[344px] md:w-full md:col-span-2  
              flex items-center justify-center mx-auto pb-0 h-[23rem]  "
        >
          <SpiderChart />
        </CardAnimated>

        {/* 🟩 Primer columna con dos elementos apilados */}
        <div className="max-h-[23rem] w-full sm:w-[344px] md:w-full mx-auto md:col-span-2 md:row-span-2 flex flex-col sm:gap-8 gap-12">
          <Card className="relative h-auto w-full">
            <div className="relative w-full h-48">
              <Image
                className="w-full h-38 object-fill opacity-80"
                src="/assets/redes.svg"
                width={400}
                height={300}
                alt="asdsd"
              />
            </div>
          </Card>

          <Card
            className="h-52
            items-center justify-center 
          relative duration-300 group w-full bg-emerald-600/15 p-5 flex-col  gap-4
          "
          >
            <div className="text-gray-50 mb-4">
              <span className="font-bold text-3xl">Middle Sr</span>
              <p className="text-xs">Frontend Developer</p>
            </div>

            <a
              download
              href="/2025-CV-yaniel-fuentes-tedes.pdf"
              className="z-20 cursor-pointer text-white group relative flex
                 gap-1.5 px-4 py-2 border bg-white/15 text-lg
                 max-w-[10rem]
                 backdrop-blur border-white/15 rounded-full transition font-semibold shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Interface / Download">
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>
                  </g>
                </g>
              </svg>
              Download
              <div className="-right-20 -translate-y-11  absolute opacity-0 -bottom-full lg:rounded-md py-2 px-2 bg-black bg-opacity-70  group-hover:opacity-100 transition-opacity shadow-lg">
                171 kb
              </div>
            </a>

            <svg
              className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-emerald-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path
                data-name="layer1"
                d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                strokeMiterlimit="10"
                strokeWidth="5"
              ></path>
            </svg>

            <svg
              className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-emerald-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path
                data-name="layer1"
                d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></path>
            </svg>
          </Card>
        </div>

        <ToolBox />

        <MapPicture />
      </div>
    </section>
  );
};
