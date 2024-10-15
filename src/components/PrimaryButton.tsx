import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const PrimaryButton = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <button
      className={twMerge(
        "rounded-full bg-fish text-lg text-white h-14 px-6 flex gap-2 items-center justify-center font-light ",
        className
      )}
    >
      {children}
    </button>
  );
};
