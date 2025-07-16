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
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = async () => {
  const { t } = await useTranslationServer();
  return (
    <section className="container mx-auto mb-16">
      <SectionHeader
        title={t("section.testimonial.title")}
        subtitle={t("section.testimonial.subtitle")}
        description={t("section.testimonial.description")}
      />
      <div className="flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]  overflow-x-clip">
        <div
          className="flex flex-none gap-8 py-16 md:py-24
     "
        >
          {testimonials.map((t) => (
            <Card key={t.name} className="max-w-xs md:max-w-md p-6">
              <div className="flex gap-4 items-center">
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
