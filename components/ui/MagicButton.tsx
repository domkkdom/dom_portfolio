"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MagicButtonProps {
  title?: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  ariaLabel?: string;
}

export const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
  className = "",
  href,
  target,
  rel,
  download,
  ariaLabel,
}: MagicButtonProps) => {
  const content = (
    <>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-5 sm:px-6 py-1 text-sm font-semibold text-white backdrop-blur-3xl gap-2 hover:bg-slate-900/90 transition-colors",
          otherClasses
        )}
      >
        {position === "left" && icon}
        {title && <span>{title}</span>}
        {position === "right" && icon}
      </span>
    </>
  );

  const baseClasses = cn(
    "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl p-[1px] focus:outline-none hover:scale-105 active:scale-95 transition-transform duration-200 shadow-md",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={baseClasses}
        aria-label={ariaLabel || title}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onClick={handleClick}
      aria-label={ariaLabel || title}
    >
      {content}
    </button>
  );
};

export default MagicButton;
