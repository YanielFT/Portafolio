"use client";
import StartIcon from "@/assets/icons/star.svg";
import { useEffect } from "react";
import { useTranslationClient } from "@/locales/lib/useTranslationClient";

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

export const TapeSection = () => {
  const { t } = useTranslationClient();

  useEffect(() => {
    const copy = document.querySelector("#tape .logos-slide")!.cloneNode(true);
    document.querySelector("#tape .logos")?.appendChild(copy);
  }, []);

  return (
    <div id="tape" className="py-16 overflow-x-clip">
      <div
        className="bg-gradient-to-r
     from-emerald-300 to-sky-400
      -rotate-2
      "
      >
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] logos">
          <div
            className="py-3
          logos-slide
          "
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <div key={index} className="space-x-4">
                {words.map((w) => (
                  <div key={w} className="inline-flex gap-4 items-center">
                    <span className=" text-gray-950 uppercase font-extrabold text-sm">
                      {t(`section.tape.${w}`)}
                    </span>
                    <StartIcon className="size-6 text-gray-950 rotate-90" />
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
