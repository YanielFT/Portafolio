"use client";

import { useTranslationClient } from "@/locales/lib/useTranslationClient";
import Link from "next/link";

const NAV_ITEMS = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const Header = () => {
  const { t } = useTranslationClient();

  return (
    <div className="flex justify-center w-full z-10 items-center fixed top-5">
      <nav className="flex gap-1 p-0.5 border bg-white/15 backdrop-blur border-white/15 rounded-full">
        {/* nav-item-active */}
        {NAV_ITEMS.map((n) => (
          <Link
            href={n.href}
            className="nav-item hover:bg-white/70 hover:text-gray-900"
          >
            {t(n.label)}
          </Link>
        ))}
      </nav>
    </div>
  );
};
