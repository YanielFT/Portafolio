"use client";
import React from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";
import { useScroll, useTransform, motion } from "motion/react";

interface Props {
  toolboxItems: {
    title: string;
    iconType: React.ReactNode;
  }[];
  className?: string;
  itemWrapperClassName?: string;
  toRight?: boolean;
}

export const ToolboxItem = ({
  itemWrapperClassName,
  toolboxItems,
  className,
  toRight,
}: Props) => {
  const { scrollYProgress } = useScroll();
  // Conecta el scroll vertical con movimiento horizontal
  const right = toRight ? 400 : -600;
  const x = useTransform(scrollYProgress, [0, 1], [0, right]);

  return (
    <div className={twMerge("flex", className)}>
      <motion.div style={{ x }} className="flex flex-none pr-6 py-0.5 gap-6">
        {toolboxItems.map((t) => (
          <div
            className={twMerge(
              "p-2 border-2 border-gray-500/15 rounded-xl inline-flex gap-6 items-center",
              itemWrapperClassName
            )}
            key={t.title}
          >
            <TechIcon component={t.iconType} />
            <span className="font-semibold text-sm">{t.title}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
