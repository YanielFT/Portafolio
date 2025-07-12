import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = async () => {
  const { t } = await useTranslationServer();

  return (
    <section className="pb-16 px-2 md:px-0">
      <div className="container max-w-md mx-auto my-5">
        <div className="flex justify-center items-center">
          <p className="uppercase font-semibold text-center tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            {t("section.projects.title")}
          </p>
        </div>
        <h2 className="antialiased text-3xl  md:text-5xl font-serif text-center mt-6">
          {t("section.projects.second_title")}
        </h2>
        <p className="md:text-lg text-white/60 text-center mt-4 max-w-md">
          {t("section.projects.description")}
        </p>
      </div>

      <div className="flex gap-20 flex-col mt-10 md:mt-20">
        {portfolioProjects.map((project) => (
          <div
            className="
         bg-gray-800 
          p-8
          pb-0
          relative  border-2 border-white/15 rounded-3xl
          after:content-[''] 
          after:absolute
          after:inset-0
          z-0
          after:-z-10
          overflow-hidden
          after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20
          after:pointer-events-none
          font-serif shadow-[0_0_80px] shadow-emerald-300/15 md:text-4xl
        "
            key={project.title}
          >
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>
            <div
              className="bg-gradient-to-r
              text-sm tracking-widest gap-2     
              font-bold uppercase from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex"
            >
              <span>{project.company}</span>
              <div>&bull;</div>
              <span>{project.year}</span>
            </div>

            <h3 className="text-2xl text-left mt-2 font-semibold font-serif antialiased sm:max-w-60">
              {project.title}
            </h3>
            <hr className="border-rounded-top-2 border-white/5 my-4" />
            <ul className="flex flex-col gap-4 mt-4">
              {project.results.map((result) => (
                <li className="text-left text-white/60" key={result.title}>
                  <span className="inline-flex gap-1 items-center justify-center text-sm">
                    <CheckIcon className="size-5" /> {result.title}
                  </span>
                </li>
              ))}
            </ul>
            <Link href={project.link} className="mt-5">
              <button
                className="
            rounded-xl font-normal
            bg-white text-gray-950
            h-12 md:w-full px-4
            inline-flex gap-2 items-center justify-center
            my-5

            "
              >
                <span>{t("section.projects.view_project")}</span>
                <ArrowIcon />
              </button>
            </Link>

            <div className="">
              <Image
                className="object-cover w-auto -mb-4"
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
