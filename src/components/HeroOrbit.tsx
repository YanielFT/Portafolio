import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 satelite" >
      <div
        className={`flex items-start justify-start  `}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {/* */}
        <div className="inline-flex  animate-spin [animation-duration:35s] ">{children}</div>
      </div>
    </div>
  );
};
