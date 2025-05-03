import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotetion,
}: PropsWithChildren<{ size: number; rotetion: number }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className=" flex items-start justify-start "
        style={{
          transform: `rotate(${rotetion}deg)`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div
          className=" inline-flex"
          style={{ transform: `rotate(${rotetion * -1}deg)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
