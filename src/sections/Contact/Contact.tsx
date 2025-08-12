import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import grainImage from "@/assets/images/grain.webp";
import { ContactForm } from "./Form/ContactForm";
export const ContactSection = async () => {
  const { t } = await useTranslationServer();
  return (
    <section id="contact">
      <div className="container pb-16 mx-auto md:px-5 overflow-x-clip">
        <div
          className="relative 
        flex flex-col text-left items-start justify-center
        bg-gradient-to-r 
        from-emerald-300 to-sky-400 text-gray-900
        border border-gray-900
        py-8 sm:px-10 sm:rounded-3xl z-50
        mx-auto gap-4 px-5
        "
        >
          <div
            className="absolute inset-0 w-full h-full -z-10 opacity-15"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="px-1">
            <h2 className="font-serif text-2xl md:text-3xl">
              {t("section.contact.title")}
            </h2>
            <p className="font-normal text-sm mt-5 md:text-base max-w-xl">
              {t("section.contact.subtitle")}
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
