"use client";
import React from "react";
import Image from "next/image";
import mapImage from "@/assets/images/map.jpg";
import SmileMemojicon from "@/assets/images/memoji-smile.png";
import { CardAnimated } from "./CardAnimated";

export const MapPicture = () => {
  return (
    <CardAnimated
      className=" relative w-full z-0 sm:w-[344px] md:w-full md:col-span-2  
              flex items-center justify-center mx-auto pb-0 h-[23rem] "
    >
      <div className="absolute inset-0 z-50 h-full w-full bg-gray-950/70 [mask-image:linear-gradient(to_bottom,transparent_10%,black_80%)]"></div>
      <span
        className="absolute text-pretty text-center z-[100] top-65 text-white/90 tracking-wider  antialiased
        font-serif font-normal text-xl sm:text-2xl max-w-[15rem] lg:max-w-[20rem]
        "
      >
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
        after:outline-gray-950/30 animate-bounce
        z-[100]
        "
      >
        <Image
          className="size-25"
          src={SmileMemojicon}
          alt={"vedado city map"}
        />
      </div>
    </CardAnimated>
  );
};
