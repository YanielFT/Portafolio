import type { Metadata } from "next";
import "./landing.css";
import { I18NProvider } from "@/locales/lib/I18NProvider";
import acceptLanguage from "accept-language";
import { cookieI18Name, fallbackLng, languages } from "@/locales/lang";
import { cookies } from "next/headers";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "YanielFT Portafolio",
  description:
    "A digital space designed to showcase my experience and skills as a frontend developer",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  acceptLanguage.languages(languages);
  const lng =
    acceptLanguage.get(cookies().get(cookieI18Name)?.value) || fallbackLng;
  return (
    <div
      className={twMerge(
        inter.variable,
        calistoga.variable,
        "bg-gray-900 text-white antialiased font-sans"
      )}
    >
      <I18NProvider lng={lng}>{children}</I18NProvider>
    </div>
  );
}
