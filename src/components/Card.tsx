import React, { ComponentPropsWithoutRef } from "react";
import grainImage from "@/assets/images/grain.webp";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
  style,
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      style={style}
      className={twMerge(
        `bg-gray-800 
          relative  border-2 border-white/15 rounded-3xl
          after:content-[''] 
          after:absolute
          after:inset-0
          z-0
          after:-z-10
          overflow-hidden
          after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20
          after:pointer-events-none
          shadow-[0_0_80px] shadow-emerald-300/15
          md:text-4xl
          `,
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
