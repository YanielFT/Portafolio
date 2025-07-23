import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = async () => {
  const { t } = await useTranslationServer();
  return (
    <section>
      <div className="container pb-16 mx-auto px-5 sm:px-0 overflow-x-clip">
        <div
          className="relative 
        flex flex-col md:flex-row md:gap-16 md:text-left items-center justify-center
        text-center z-0 
        bg-gradient-to-r 
        from-emerald-300 to-sky-400 text-gray-900
        border border-gray-900
        py-8 px-10 rounded-3xl"
        >
          <div
            className="absolute inset-0 w-full h-full -z-10 opacity-15"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className=" max-w-lg ">
            <h2 className="font-serif text-2xl md:text-3xl">
              {t("section.contact.title")}
            </h2>
            <p className="font-normal text-sm mt-5 md:text-base">
              {t("section.contact.subtitle")}
            </p>
          </div>
          <button className="inline-flex flex-none gap-3 items-center capitalize justify-center bg-gray-900 px-5 py-3 rounded-xl mt-4">
            <span className="text-white font-semibold">
              {t("section.contact.contact_me")}
            </span>
            <ArrowRightIcon className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
