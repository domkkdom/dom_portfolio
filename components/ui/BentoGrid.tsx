"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlob";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline, IoCheckmark } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const techStackBadges = [
  { name: "Flutter", icon: "/flutter_icon.svg" },
  { name: "Dart", icon: "/dart_icon.svg" },
  { name: "Riverpod", icon: "/riverpod_logo.png" },
  { name: "BLoC", icon: "/flutter_icon.svg" },
  { name: "Stacked", icon: "/logo.png" },
  { name: "Firebase", icon: "/firebase_icon.svg" },
  { name: "REST APIs", icon: "/cloud.svg" },
  { name: "React", icon: "/re.svg" },
];

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "dominionjesusblessing15@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Determine whether this card has a dark background / dark visual image
  const isDarkCanvas = id === 1 || id === 2 || id === 5 || id === 6;

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl transition duration-300 shadow-sm dark:shadow-none justify-between flex flex-col space-y-4 group/bento hover:shadow-xl",
        "border border-slate-200 dark:border-white/[0.12]",
        isDarkCanvas
          ? "bg-[#030712] dark:bg-[#04071D] text-white"
          : "bg-white dark:bg-[#04071D] text-slate-950 dark:text-white",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full relative`}>
        {/* Background Image */}
        <div className="w-full h-full absolute inset-0">
          {img && (
            <img
              src={img}
              alt="bento item visual"
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {/* Gradient Scrim for cards with dark background images so text stands out crisply */}
        {id === 1 && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none z-[5]" />
        )}

        {id === 5 && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none z-[5]" />
        )}

        {/* Spare Image */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-60 dark:opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt="decorative visual"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {/* Gradient Animation for Item 6 */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        {/* Custom Layout for Item 3 (Tech Stack) */}
        {id === 3 ? (
          <div className="relative h-full flex flex-col justify-between p-6 lg:p-7 z-10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple border border-purple-500/20 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                Clean Architecture & State
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                My Core Tech Stack
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">
                Production-grade mobile engineering stack optimized for 60fps performance and Clean Architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {techStackBadges.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-purple-400 dark:hover:border-purple/40 text-slate-800 dark:text-white text-xs font-semibold shadow-xs hover:scale-105 transition-all duration-200 cursor-default"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-3.5 h-3.5 object-contain"
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Default Content Wrapper for Other Cards */
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-8 z-10"
            )}
          >
            {/* Description */}
            <div
              className={cn(
                "font-sans font-semibold text-xs lg:text-sm tracking-wide mb-1.5 z-10",
                isDarkCanvas
                  ? "text-purple-300 drop-shadow-sm"
                  : "text-purple-600 dark:text-[#C1C2D3]"
              )}
            >
              {description}
            </div>

            {/* Title */}
            <div
              className={cn(
                "font-sans text-base sm:text-lg lg:text-2xl max-w-96 font-extrabold z-10 leading-snug",
                isDarkCanvas
                  ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  : "text-slate-950 dark:text-white"
              )}
            >
              {title}
            </div>

            {/* GitHub 3D Globe for Item 2 */}
            {id === 2 && (
              <div className="mt-4">
                <GridGlobe />
              </div>
            )}

            {/* Email Copy CTA for Item 6 */}
            {id === 6 && (
              <div className="mt-6 relative">
                <div className="absolute -bottom-5 right-0 pointer-events-none">
                  {copied && <Lottie options={defaultOptions} height={200} width={400} />}
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy My Email Address"}
                  icon={copied ? <IoCheckmark className="text-emerald-400" /> : <IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-slate-950 text-white font-semibold"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BentoGrid;
