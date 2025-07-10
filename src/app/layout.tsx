import type { Metadata } from "next";
import "./globals.css";
import { I18NProvider } from "@/locales/lib/I18NProvider";
import acceptLanguage from "accept-language";
import { cookieI18Name, fallbackLng, languages } from "@/locales/lang";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "YanielFT Portafolio",
  description:
    "A digital space designed to showcase my experience and skills as a frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  acceptLanguage.languages(languages);
  const lng =
    acceptLanguage.get(cookies().get(cookieI18Name)?.value) || fallbackLng;
  return (
    <html lang={lng}>
      <I18NProvider lng={lng}>{children}</I18NProvider>
    </html>
  );
}
