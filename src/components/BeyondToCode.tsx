"use client";
import React, { useRef } from "react";
import { AboutCard } from "./AboutCard";
import { useTranslationClient } from "@/locales/lib/useTranslationClient";
import { motion } from "motion/react";
import {
  Backpack,
  BookOpen,
  Brush,
  Dumbbell,
  Gamepad2,
  Music,
} from "lucide-react";

export const BeyondToCode = () => {
  const constraintsRef = useRef(null);
  const { t } = useTranslationClient();
  const hobbies = [
    {
      title: t("section.close_to_me.painting"),
      left: "5%",
      top: "5%",
      icon: <Brush className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.gaming"),
      left: "50%",
      top: "5%",
      icon: <Gamepad2 className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.hiking"),
      left: "10%",
      top: "30%",
      icon: <Backpack className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.music"),
      left: "35%",
      top: "40%",
      icon: <Music className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.reading"),
      left: "55%",
      top: "75%",
      icon: <BookOpen className="text-gray-950" size={20} />,
    },
    {
      title: t("section.close_to_me.fitness"),
      left: "5%",
      top: "65%",
      icon: <Dumbbell className="text-gray-950" size={20} />,
    },
  ];

  return (
    <AboutCard
      moveInX={-200}
      moveInY={200}
      className="sm:w-[344px] md:w-full cursor mx-auto pb-0 min-h-[23rem] 
         md:col-span-2 row-span-1 lg:col-span-4 flex flex-col"
      title={t("section.close_to_me.title")}
      description={t("section.about.toolbox_subtitle")}
    >
      <motion.div
        ref={constraintsRef}
        className="relative w-full h-full flex-1"
      >
        {hobbies.map((h) => (
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            whileHover={{ cursor: "grab" }}
            whileTap={{ scale: 1.1 }}
            key={h.title}
            className={`
                absolute left-[${h.left}] top-[${h.top}]
                px-6 py-2 bg-gradient-to-r inline-flex from-emerald-300 to-sky-400 rounded-full py-1.5"
                `}
            style={{
              left: h.left,
              top: h.top,
            }}
          >
            <div className="inline-flex gap-2 items-center">
              <span className="text-sm font-medium text-gray-900">
                {h.title}
              </span>
              {h.icon}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AboutCard>
  );
};
