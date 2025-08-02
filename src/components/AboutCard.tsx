"use client";
import React, { ReactNode } from "react";
import StartIcon from "@/assets/icons/star.svg"; // Ajusta la ruta si es necesario
import { Card } from "./Card";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

interface SectionHeaderProps {
  title?: string;
  className?: string;
  description?: string;
  icon?: React.ReactNode;
  children: ReactNode;
  moveInX?: number;
  moveInY?: number;
}

export const AboutCard: React.FC<SectionHeaderProps> = ({
  children,
  title,
  description,
  className,
  icon = <StartIcon className="size-9 text-emerald-300" />,
  moveInX = 0,
  moveInY = 0,
}) => {
  return (
    <motion.div
      initial={{ x: moveInX, y: moveInY }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{  once: true }}
      className={className}
    >
      <Card className={twMerge("py-8 px-5", className)}>
        <div>
          <div className={`flex items-center justify-start gap-2`}>
            {icon}
            <h3 className="font-serif font-normal text-3xl">{title}</h3>
          </div>
          <p className="text-sm text-white/60 mt-2">{description}</p>
        </div>
        {children}
      </Card>
    </motion.div>
  );
};
