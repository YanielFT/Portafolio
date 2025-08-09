"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxYProps = {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
  animateChildren?: boolean;
  childY?: { from: number; to: number };
};

export const ParallaxY = ({
  children,
  speed = 100,
  direction = "up",
  className,
  animateChildren = false,
  childY = { from: 50, to: -50 },
}: ParallaxYProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const from = direction === "up" ? speed : -speed;
  const to = direction === "up" ? -speed : speed;

  const y = useTransform(scrollYProgress, [0, 1], [from, to]);
  const childTransformY = useTransform(
    scrollYProgress,
    [-1, 3],
    [childY.from, childY.to]
  );
  const childOpacityTransform = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        {animateChildren ? (
          <motion.div
            style={{ y: childTransformY, opacity: childOpacityTransform }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </motion.div>
    </div>
  );
};
