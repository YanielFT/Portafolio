"use client";
import React from "react";
import { Card } from "./Card";
import Image from "next/image";
import { motion } from "motion/react";
import mapImage from "@/assets/images/map.jpg";
import SmileMemojicon from "@/assets/images/memoji-smile.png";

export const MapPicture = () => {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ amount: 0.2, once: true }}
      className=" relative w-full z-0 sm:w-[344px] md:w-full md:col-span-2 overflow-hidden 
      flex items-center justify-center mx-auto pb-0 h-[23rem]  "
    >
      <Card
        className="relative w-full z-0 sm:w-[344px] md:w-full md:col-span-2 overflow-hidden 
      flex items-center justify-center mx-auto pb-0 h-[23rem]  "
      >
        <div className="absolute inset-0 z-50 h-full w-full bg-gray-950/65 [mask-image:linear-gradient(to_bottom,transparent_10%,black_80%)]"></div>
        <span className="absolute text-pretty max-w-50 z-[100] top-70 text-white/80  font-semibold text-lg">
          Plaza de la Revolución, La Habana
        </span>
        <Image
          className="h-full w-full object-cover grayscale-50"
          src={mapImage}
          alt="Havana map"
        />

        <div
          className="absolute  flex items-center justify-center rounded-full bg-gray-600/35
        after:content-[''] after:absolute after:inset-0 after:outline-2 
        after:-outline-offset-2 after:rounded-full
        after:outline-gray-950/30
        z-[100]
        "
        >
          <Image
            className="size-25"
            src={SmileMemojicon}
            alt={"vedado city map"}
          />
        </div>
      </Card>
    </motion.div>
  );
};
