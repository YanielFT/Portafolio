import palcoPage from "@/assets/images/placo.webp";
import palcoMobilePage from "@/assets/images/palco-mobile.webp";
import smabrainPage from "@/assets/images/smabrain.webp";
import smabrainMobilePage from "@/assets/images/smabrain-mobile.webp";
import tecoMobilePage from "@/assets/images/teco-mobile.webp";
import tecoPage from "@/assets/images/teco.webp";
import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Palco Group",
    year: "2024",
    title: "Palco Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://palco-develop.vercel.app/",
    image: palcoPage,
    imageMobile: palcoMobilePage,
  },
  {
    company: "SmartBit",
    year: "2024",
    title: "SmartBit Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "http://smabrain.vercel.app/",
    image: smabrainPage,
    imageMobile: smabrainMobilePage,
  },
  {
    company: "TecoPo",
    year: "2025",
    title: "Teco store",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://teco-test.vercel.app/",
    image: tecoPage,
    imageMobile: tecoMobilePage,
  },
];

export const ProjectsSection = async () => {
  const { t } = await useTranslationServer();

  return (
    <section id="projects" className="container mx-auto pb-16 px-5 md:px-0 ">
      <SectionHeader
        title={t("section.projects.title")}
        subtitle={t("section.projects.second_title")}
        description={t("section.projects.description")}
      />

      <div className="flex gap-20 flex-col mt-10 md:mt-20 ">
        {portfolioProjects.map((project, index) => (
          <Card
            style={{
              top: `calc(64px + ${index * 20}px`,
            }}
            key={project.title}
            className="px-8 pt-8 sticky md:py-12 md:px-10 lg:px-20"
          >
            <article className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <div
                  className="bg-gradient-to-r
              text-sm tracking-widest gap-2     
              font-bold uppercase from-emerald-300 to-sky-400 text-transparent bg-clip-text
               inline-flex"
                >
                  <span>{project.company}</span>
                  <div>&bull;</div>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-2xl text-left mt-2 font-semibold font-serif antialiased sm:max-w-60">
                  {project.title}
                </h3>
                <hr className="border-rounded-top-2 border-white/5 my-4" />
                <ul className="flex flex-col mt-4 gap-1">
                  {project.results.map((result) => (
                    <li className="text-left text-white/60" key={result.title}>
                      <span className="inline-flex gap-1 items-center justify-center text-sm">
                        <CheckIcon className="size-5" /> {result.title}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="mt-5"
                >
                  <button
                    className="
            rounded-xl 
            bg-white text-gray-950
            h-12 px-8
            inline-flex gap-2 items-center justify-center
            my-5
            md:text-lg font-normal antialiased
            "
                  >
                    <span>{t("section.projects.view_project")}</span>
                    <ArrowIcon />
                  </button>
                </Link>
              </div>

              <div className="relative lg:translate-0">
                <Image
                  className="h-full  
                  -mr-20
                  -mb-4 md:-mb-12 md:mr-0
                  w-auto max-w-screen 
                  lg:mt-12 lg:absolute lg:h-full 
                  lg:max-w-none lg:-right-30
                  object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <Image
                  className="
                  max-h-60 max-w-30
                  md:max-h-80 md:max-w-50 w-full h-full z-10
                  left-0 bottom-0
                  lg:-left-30 lg:-bottom-14
                  lg:mt-12 absolute 
                  object-cover object-center"
                  src={project.imageMobile}
                  alt={`${project.title} mobile version`}
                />
              </div>
            </article>
          </Card>
        ))}
      </div>
    </section>
  );
};
