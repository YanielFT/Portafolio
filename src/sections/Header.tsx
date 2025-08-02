"use client";
import { useTranslationClient } from "@/locales/lib/useTranslationClient";
import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

type NavItemsType = {
  href: string;
  label: string;
};
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
  const [hash, setHash] = useState<string>("");
  const isSelected = (n: NavItemsType) => hash === n.href.replace("#", "");
  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash.replace("#", ""));
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return (
    <div className="flex justify-center w-full z-10 items-center fixed top-5">
      <motion.nav className="flex gap-1 p-0.5 border bg-white/15 backdrop-blur border-white/15 rounded-full">
        {NAV_ITEMS.map((n) => (
          <motion.a
            key={n.label}
            href={n.href}
            layout
            className={`relative nav-item hover:bg-white/70 hover:text-gray-900 ${
              isSelected(n) ? "text-gray-900" : "text-white"
            }`}
          >
            {isSelected(n) && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 bg-white text-gray-900 rounded-full -z-10"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}

            {t(n.label)}
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
};
