import { useTranslationServer } from "@/locales/lib/useTranslationServer";
import StartIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
const words = [
  "performant",
  "accessible",
  "secure",
  "interactive",
  "Scalable",
  "frinedly",
  "maintainable",
  "optimized",
  "usable",
  "reliable",
];

export const TapeSection = async () => {
  const { t } = await useTranslationServer();
  return (
    <div className="py-16   overflow-x-clip">
      <div
        className="bg-gradient-to-r
     from-emerald-300 to-sky-400
      -rotate-2
      "
      >
        <div className="flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-4 py-3
          animate-move-left
          "
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <div key={index}>
                {words.map((w) => (
                  <div key={w} className="inline-flex gap-4 items-center">
                    <span className=" text-gray-950 uppercase font-extrabold text-sm">
                      {t(`section.tape.${w}`)}
                    </span>
                    <StartIcon className="size-6  text-gray-950 -rotate-5" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
