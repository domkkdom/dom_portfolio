import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaDownload, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative pb-16 pt-32 sm:pt-40">
      {/* Background Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw]"
          fill="#a855f7"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#6366f1"
        />
      </div>

      {/* Grid Pattern Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.04] absolute top-0 left-0 flex items-center justify-center transition-colors">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="flex justify-center relative my-10 sm:my-16 z-10">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[65vw] flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              Available for Senior Mobile & Fintech Roles
            </span>
          </div>

          <TextGenerateEffect
            words="Engineering Production-Grade Cross-Platform Mobile Applications"
            className="text-center text-[34px] sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white"
          />

          <p className="text-center text-slate-600 dark:text-white-200 mt-5 mb-8 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-normal leading-relaxed">
            Hi, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Jesusblessing Dominion</span>. A Flutter & Mobile Application Developer with <span className="text-purple-600 dark:text-purple font-semibold">5 years</span> of software engineering experience specializing in Clean Architecture, scalable state (Riverpod, BLoC, Stacked), and shipping live fintech apps on the Apple App Store & Google Play Store.
          </p>

          {/* Action CTAs - Unified MagicButtons with Spinning Animated Borders */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
            <MagicButton
              title="Explore Projects"
              icon={<FaLocationArrow className="w-3.5 h-3.5" />}
              position="right"
              href="#projects"
              className="w-full sm:w-auto min-w-[170px]"
            />

            <MagicButton
              title="Download CV"
              icon={<FaDownload className="w-3.5 h-3.5 text-purple-400" />}
              position="left"
              href="/Jesusblessing_Dominion_CV.pdf"
              download="Jesusblessing_Dominion_CV.pdf"
              target="_blank"
              className="w-full sm:w-auto min-w-[160px]"
            />

            <MagicButton
              title="LinkedIn"
              icon={<FaLinkedin className="w-4 h-4 text-blue-400" />}
              position="left"
              href="https://www.linkedin.com/in/dominion-jesusblessing-2026a7251/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-[130px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
