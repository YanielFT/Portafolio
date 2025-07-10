import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* animate-spin [animation-duration:85s] */}
      <div
        className={`size-[${size}px]`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {/* animate-spin [animation-duration:35s] */}
        <div className="inline-flex ">{children}</div>
      </div>
    </div>
  );
};
