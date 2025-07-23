import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import { Facebook } from "lucide-react";

const footerLinks = [
  {
    titile: "Instagram",
    href: "",
    icon: <Facebook />
  },
  {
    titile: "LinkedIn",
    href: "",
  },
  {
    titile: "GitHub",
    href: "",
  },
];

export const Footer = async () => {
  const { t } = await useTranslationServer();
  return (
    <footer>
      <div className="container mx-auto">
        <div>
          <div>
            &copy; {new Date().getFullYear()}. {t("footer.rights")}
          </div>
          <div>
            <nav className="flex flex-col">
              {footerLinks.map((a) => (
                <a href={a.href} key={a.titile}>
                  {a.titile} 
                  <Facebook/>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
