import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  {
    titile: "Instagram",
    href: "",
    icon: <Instagram size={16} />,
  },
  {
    titile: "LinkedIn",
    href: "",
    icon: <Linkedin size={16} />,
  },
  {
    titile: "GitHub",
    href: "",
    icon: <Github size={16} />,
  },
];

export const Footer = async () => {
  const { t } = await useTranslationServer();
  return (
    <footer>
      <div
        className="
      overflow-x-clip sm:justify-between 
      relative -z-10 flex-col gap-8 sm:flex-row flex items-center justify-center mx-auto"
      >
        <div className="max-w-5xl mx-auto flex items-center flex-col sm:flex-row sm:justify-between w-full  border-t py-10 sm:py-6 border-t-white/15">
          <nav className="flex flex-col sm:flex-row sm:gap-10  sm:order-2">
            {footerLinks.map((a) => (
              <div key={a.titile} className="text-sm py-4">
                <a
                  href={a.href}
                  className="flex items-center justify-center gap-1"
                >
                  <span className="">{a.titile}</span>
                  <span>{a.icon}</span>
                </a>
              </div>
            ))}
          </nav>
          <span className="text-center mx-auto sm:mx-0 sm:order-1">
            &copy; {new Date().getFullYear()}. {t("footer.rights")}
          </span>
        </div>
        <div
          className="absolute 
       [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]
            -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30"
        ></div>
      </div>
    </footer>
  );
};
