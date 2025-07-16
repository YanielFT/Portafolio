import React from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

export const SectionHeader = ({ title, subtitle, description }: Props) => {
  return (
    <div className="container mx-auto pb-16 px-2 md:px-0 flex items-center flex-col justify-center text-center">
      <p
        className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent
        tracking-widest
        "
      >
        {title}
      </p>
      <h2 className="antialiased text-3xl  md:text-5xl font-serif text-center mt-6">
        {subtitle}
      </h2>
      <p className="md:text-lg text-white/60 text-center mt-4 max-w-md">
        {description}
      </p>
    </div>
  );
};
