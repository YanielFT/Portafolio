"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { Card } from "./Card";

type Props = {
  children: ReactNode;
  className?: string;
};

export const CardAnimated = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card
        className="relative w-full z-0 sm:w-[344px] md:w-full md:col-span-2  
      flex items-center justify-center mx-auto pb-0 h-[23rem] "
      >
        {children}
      </Card>
    </motion.div>
  );
};
