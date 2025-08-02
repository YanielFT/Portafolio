"use client";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "../components/Card";
import { useTranslationClient } from "@/locales/lib/useTranslationClient";
import { useEffect } from "react";
const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Alex Turner 2",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar3,
  },
  {
    name: "Olivia Green 2",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar4,
  },
  {
    name: "Olivia Green 3",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  const { t } = useTranslationClient();
  useEffect(() => {
    const copy = document
      .querySelector("#testimonial .logos-slide")!
      .cloneNode(true);
    document.querySelector("#testimonial .logos")?.appendChild(copy);
  }, []);
  return (
    <section id="testimonial" className="container mx-auto mb-16">
      <SectionHeader
        title={t("section.testimonial.title")}
        subtitle={t("section.testimonial.subtitle")}
        description={t("section.testimonial.description")}
      />
      <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] logos space-x-8">
        <div
          className="gap-8 py-16 md:py-24 logos-slide
     "
        >
          {testimonials.map((t) => (
            <Card key={t.name} className="max-w-xs md:max-w-md p-6 h-[16rem]">
              <div className="flex gap-8 items-center">
                <div
                  className="bg-gray-700
              inline-flex items-center justify-center
              rounded-full size-14"
                >
                  <Image className="max-h-full" src={t.avatar} alt={t.name} />
                </div>
                <div className="flex flex-col items-start justify-center max-w-xs">
                  <div className="font-semibold font-sans text-xl">
                    {t.name}
                  </div>
                  <div className="text-sm text-white/40 font-sans">
                    {t.position}
                  </div>
                </div>
              </div>
              <p className="text-sm md:mt-6 md:text-base mt-4 font-medium font-sans">
                {t.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
