import React from "react";

export const TechIcon = ({ component }: { component: React.ReactNode }) => {
  return (
    <>
      {component}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="tech-icon-gradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
