"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxXProps = {
  children: React.ReactNode;
  from?: number;
  to?: number;
  className?: string;
};

export const ParallaxX = ({
  children,
  from = -100,
  to = 100,
  className,
}: ParallaxXProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // cuando entra y sale del viewport
  });

  const x = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
};
