import React from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

interface Props {
  toolboxItems: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemWrapperClassName?: string;
}

export const ToolboxItem = ({
  itemWrapperClassName,
  toolboxItems,
  className,
}: Props) => {
  return (
    <div className={twMerge("flex", className)}>
      <div className="flex flex-none pr-6 py-0.5 gap-6">
        {toolboxItems.map((t) => (
          <div
            className={twMerge(
              "px-4 py-2  border-2 border-gray-500/15 rounded-xl inline-flex gap-4 items-center",
              itemWrapperClassName
            )}
            key={t.title}
          >
            <TechIcon component={t.iconType} />
            <span className="font-semibold text-sm">{t.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
